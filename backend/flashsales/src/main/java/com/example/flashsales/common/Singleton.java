package com.example.flashsales.common;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

public class Singleton {
    private static Singleton instance;
    private Cloudinary cloudinary;

    // Constructor
    private Singleton() {
        this.cloudinary =  new Cloudinary(
                ObjectUtils.asMap(
                        "cloud_name", System.getenv("cloudName"),
                        "api_key", System.getenv("apiKey"),
                        "api_secret", System.getenv("apiSecret"),
                        "secure", true)
        );
    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public Cloudinary getCloudinary() {
        return cloudinary;
    }
}
