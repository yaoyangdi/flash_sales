package com.example.flashsales.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.flashsales.common.ApiResponse;
import com.example.flashsales.common.Singleton;
import com.example.flashsales.dto.ProductDto;
import com.example.flashsales.exception.CustomException;
import com.example.flashsales.model.Product;
import com.example.flashsales.service.product.ProductService;
import org.cloudinary.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping
    public List<Product> allProducts(){
        return productService.getAll();
    }


    @PostMapping
    public ResponseEntity<ApiResponse> newProduct(ProductDto productDto) {

        try {
            Product product = null;
            // handle image is null
            if (productDto.getImage()!= null){
                File uploadedFile =  convertMultiPartToFile(productDto.getImage());
                Cloudinary cloudinary = Singleton.getInstance().getCloudinary();
                Map uploadResult = cloudinary.uploader().upload(uploadedFile, ObjectUtils.emptyMap());
                String imag_url = new JSONObject(uploadResult).getString("url");
                product = new Product(productDto.getTitle(), productDto.getDescription(), productDto.getPrice(), imag_url);
            } else {
                product = new Product(productDto.getTitle(), productDto.getDescription(), productDto.getPrice(),null);
            }

            productService.saveProduct(product);
        } catch (MaxUploadSizeExceededException e) {
          return new ResponseEntity<>(new ApiResponse(false, "File size exceeds limit!"), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(new ApiResponse(true, "Product Added"), HttpStatus.CREATED);
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }
}
