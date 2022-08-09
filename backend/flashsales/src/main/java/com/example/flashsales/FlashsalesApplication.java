package com.example.flashsales;

import com.cloudinary.Cloudinary;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@EnableSwagger2
public class FlashsalesApplication {
	public static void main(String[] args) {
		SpringApplication.run(FlashsalesApplication.class, args);
	}

	@Bean
	public Cloudinary cloudinaryConfig() {
		Cloudinary cloudinary = null;
		Map config = new HashMap();
		config.put("cloud_name", System.getenv("cloudName"));
		config.put("api_key", System.getenv("apiKey"));
		config.put("api_secret", System.getenv("apiSecret"));
		cloudinary = new Cloudinary(config);
		return cloudinary;
	}

}

