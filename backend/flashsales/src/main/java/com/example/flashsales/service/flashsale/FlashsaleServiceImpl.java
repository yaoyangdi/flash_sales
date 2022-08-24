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
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

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
            Date startTime = flashsaleDto.getStartTime();
            Date endTime = flashsaleDto.getEndTime();

            // check if the flash sale time slot has been occupied
            Flashsale byStartTimeAndEndTime = flashsaleRepository.findByStartTimeAndEndTime(startTime, endTime);
            if (Objects.isNull(byStartTimeAndEndTime))  {
                // if null then create a new one flash sale
                Flashsale flashsale = new Flashsale(flashsaleDto.getStartTime(), flashsaleDto.getEndTime());
                flashsaleRepository.save(flashsale);
                // add flash-sale product
                Flashsale_product flashsale_product = new Flashsale_product(product, flashsale, flashsaleDto.getNewPrice(), flashsaleDto.getTotalStock());
                flashsaleProductRepository.save(flashsale_product); // save the flash-sale product instance

            } else {
                // if existed then add new product to this activity
                Flashsale_product flashsale_product = new Flashsale_product(product, byStartTimeAndEndTime, flashsaleDto.getNewPrice(), flashsaleDto.getTotalStock());
//                byStartTimeAndEndTime.getProducts().add(flashsale_product);
//                flashsaleRepository.save(byStartTimeAndEndTime);
                flashsaleProductRepository.save(flashsale_product); // save the flash-sale product instance
            }
            return new ResponseDto("true", "Flash sale created successfully!");


        } else {    // if existed, throw an error
            throw new CustomException("Product is already present!");
        }
    }

    @Override
    public List<Flashsale> getAllFlashsales() {
        return flashsaleRepository.findAll();
    }

    @Override
    public ResponseDto processFlashsale(long fp_id) {
        // validate if product exist in the database
        Flashsale_product byId = flashsaleProductRepository.findById(fp_id);
        if (Objects.isNull(byId)){
            throw new CustomException("Product not exist");
        } else {
            long availableStock = byId.getAvailableStock();
            if (availableStock > 0) {
                byId.setAvailableStock(availableStock-1);
                flashsaleProductRepository.save(byId);

                return new ResponseDto("true", "Proceed successfully!");
            } else {
                throw new CustomException("Sorry, this product already sold out :(");
            }
        }
    }

    @Override
    public ResponseDto updateStatus(long id, int status) {
        // validate if flash sale exist in the database
        Flashsale byId = flashsaleRepository.findById(id);
        if (Objects.isNull(byId)){
            throw new CustomException("Flashsale not exist!");
        } else {
            byId.setStatus(status);
            flashsaleRepository.save(byId);
            return new ResponseDto("true", "Update status successfully!");
        }
    }

    @Override
    public ResponseDto updateStartTime(long id, String startTime) throws ParseException {
        // validate if flash sale exist in the database
        Flashsale byId = flashsaleRepository.findById(id);
        if (Objects.isNull(byId)){
            throw new CustomException("Flashsale not exist!");
        } else {
            Date st = new SimpleDateFormat("yyyy/MM/dd hh:mm").parse(startTime);
            byId.setStartTime(st);
            flashsaleRepository.save(byId);
            return new ResponseDto("true", "Update start time successfully!");
        }
    }

    @Override
    public ResponseDto updateEndTime(long id, String endTime) throws ParseException {
        // validate if flash sale exist in the database
        Flashsale byId = flashsaleRepository.findById(id);
        if (Objects.isNull(byId)){
            throw new CustomException("Flashsale not exist!");
        } else {
            Date et = new SimpleDateFormat("yyyy/MM/dd hh:mm").parse(endTime);
            byId.setStartTime(et);
            flashsaleRepository.save(byId);
            return new ResponseDto("true", "Update end time successfully!");
        }
    }
}
