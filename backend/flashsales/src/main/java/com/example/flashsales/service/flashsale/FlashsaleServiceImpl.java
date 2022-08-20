package com.example.flashsales.service.flashsale;

import com.example.flashsales.dto.FlashsaleDto;
import com.example.flashsales.dto.response.ResponseDto;
import com.example.flashsales.exception.CustomException;
import com.example.flashsales.model.Cart_Product;
import com.example.flashsales.model.Flashsale;
import com.example.flashsales.model.Flashsale_product;
import com.example.flashsales.model.Product;
import com.example.flashsales.repository.FlashsaleProductRepository;
import com.example.flashsales.repository.FlashsaleRepository;
import com.example.flashsales.repository.ProductRepository;
import com.example.flashsales.service.flashsale.FlashsaleService;
import com.example.flashsales.service.product.ProductService;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class FlashsaleServiceImpl implements FlashsaleService {

    @Autowired
    private FlashsaleRepository flashsaleRepository;
    @Autowired
    private FlashsaleProductRepository flashsaleProductRepository;

    @Autowired
    ProductService productService;

    @Override
    public ResponseDto addFlashsale(FlashsaleDto flashsaleDto) {
        // validate if the product id provided is valid
        Product product = productService.findById(flashsaleDto.getProductId());
        if ( Objects.isNull(product) ) {
            throw new CustomException("Product not exist");
        }

        // validate if the product already exist in the database
        Flashsale_product query_product = flashsaleProductRepository.findByProduct(product);
        if ( Objects.isNull( query_product )) {
            Flashsale flashsale = new Flashsale(flashsaleDto.getStartTime(), flashsaleDto.getEndTime());
            flashsaleRepository.save(flashsale); // save the flash sale instance

            Flashsale_product flashsale_product = new Flashsale_product(product, flashsale, flashsaleDto.getNewPrice(), flashsaleDto.getTotalStock());
            flashsaleProductRepository.save(flashsale_product); // save the flash-sale product instance
            return new ResponseDto("true", "Flash sale created successfully!");
        } else {    // if existed, throw an error
            throw new CustomException("Product is already present!");
        }
    }

    @Override
    public List<Flashsale> getAllFlashsales() {
        return flashsaleRepository.findAll();
    }
}
