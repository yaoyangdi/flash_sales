package com.example.flashsales.service.product;

import com.example.flashsales.exception.CustomException;
import com.example.flashsales.exception.ProductNotExistsException;
import com.example.flashsales.model.Product;
import com.example.flashsales.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Objects;
import java.util.Optional;

public class ProductServiceImpl implements ProductService{
    @Autowired
    ProductRepository productRepository;

    @Override
    public void saveProduct(Product product) {
        // check whether product exist
        if(Objects.nonNull(findByTitle(product.getTitle()))){
            throw new CustomException("Product already exist, not need to add");
        }
        // save the product
        productRepository.save(product);
    }

    @Override
    public Product findById(long productId) {
        Optional<Product> optionalProduct= productRepository.findById(productId);
        if (optionalProduct.isEmpty()){
            throw new ProductNotExistsException("product id is invalid: " + productId);
        }
        return optionalProduct.get();
    }

    @Override
    public Product findByTitle(String title) {
        Product product = productRepository.findByTitle(title);
        if (Objects.nonNull(product)){
            throw new CustomException("product already exist");
        }
        return product;
    }


}
