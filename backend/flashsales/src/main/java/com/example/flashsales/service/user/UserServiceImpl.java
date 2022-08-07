package com.example.flashsales.service.user;

import com.example.flashsales.dto.ResponseDto;
import com.example.flashsales.exception.CustomException;
import com.example.flashsales.model.AuthenticationToken;
import com.example.flashsales.model.User;
import com.example.flashsales.repository.UserRepository;
import com.example.flashsales.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TokenService tokenService;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public ResponseDto signUp(User user) {
        // handle user email is null
//        if (userRepository.findByEmail(user.getEmail()) === null) {
//
//        }
        // check if user is already exist
        User byEmail = userRepository.findByEmail(user.getEmail());
        if ( Objects.nonNull(userRepository.findByEmail(user.getEmail())) ) {
            throw new CustomException("user already exist");
        }

        // hash the password
        String encrytedpassword = user.getPassword();
        try {
            encrytedpassword = hashPassword(user.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        // save the user
        User new_user = new User(user.getUsername(), user.getFirstname(), user.getLastname(), user.getEmail(), encrytedpassword);
        userRepository.save(new_user);

        // create the token
        final AuthenticationToken authenticationToken = new AuthenticationToken(new_user);
        tokenService.saveConfirmationToken(authenticationToken);

        ResponseDto responseDto = new ResponseDto("success", "dummy response");
        return responseDto;
    }

    private String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(password.getBytes());
        byte[] digest = md.digest();
        String hash = DatatypeConverter
                .printHexBinary(digest).toUpperCase();
        return hash;

    }

}
