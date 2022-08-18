package com.example.flashsales.dto;

public class UserDto {
    private String username;
    private String firstname;
    private String lastname;
    private String email;

    public UserDto(String username, String firstname, String lastname, String email) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }
}
