package com.example.flashsales.service.cart;

import com.example.flashsales.dto.AddToCartDto;
import com.example.flashsales.model.Cart_Product;
import com.example.flashsales.model.Product;
import com.example.flashsales.model.User;
import com.example.flashsales.repository.CartProductRepository;
import com.example.flashsales.service.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService{
    @Autowired
    ProductService productService;
    @Autowired
    CartProductRepository cartProductRepository;

    @Override
    public void addToCart(AddToCartDto addToCartDto, User user) {
        // validate if the product id is valid
        Product product = productService.findById(addToCartDto.getProductId());
        // save the cart
        Cart_Product cart_product = new Cart_Product(product, user, addToCartDto.getQty());
        cartProductRepository.save(cart_product);
    }
}
