package com.example.flashsales.service.cart;

import com.example.flashsales.dto.AddToCartDto;
import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.exception.CustomException;
import com.example.flashsales.model.Cart_Product;
import com.example.flashsales.model.Product;
import com.example.flashsales.model.User;
import com.example.flashsales.repository.CartProductRepository;
import com.example.flashsales.service.product.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CartServiceImpl implements CartService{
    @Autowired
    ProductService productService;
    @Autowired
    CartProductRepository cartProductRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ResponseDto addToCart(AddToCartDto addToCartDto, User user) {
        // validate if the product id is valid
        Product product = productService.findById(addToCartDto.getProductId());
        if ( Objects.isNull(product) ) {
            throw new CustomException("Product not exist");
        }
        // validate if the product already exist in the cart
        Cart_Product query_cart = cartProductRepository.findByCartProduct(product);
        if ( Objects.nonNull( query_cart )) { // if existed, then update the amount
            query_cart.setQty(query_cart.getQty() + addToCartDto.getQty());
            cartProductRepository.save(query_cart);
        } else { // if not exist, then add the product(s) to the cart
            // save the cart
            Cart_Product cart_product = new Cart_Product(product, user, addToCartDto.getQty());
            cartProductRepository.save(cart_product);
        }
        return new ResponseDto("success","Add to cart successfully");
    }

    @Override
    public List<Cart_Product> getAllItems(User user) {
        return cartProductRepository.findByUser(user);
        }


}
