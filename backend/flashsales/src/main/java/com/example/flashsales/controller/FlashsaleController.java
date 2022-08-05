package com.example.flashsales.controller;

import com.example.flashsales.model.Flashsale;
import com.example.flashsales.model.User;
import com.example.flashsales.service.FlashsaleService;
import com.example.flashsales.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flashsale")
@CrossOrigin
public class FlashsaleController {
    @Autowired
    private FlashsaleService flashsaleService;

    @GetMapping
    List<Flashsale> all() { return flashsaleService.getAllFlashsales();
    }

    @PostMapping
    Flashsale newFlashsale(@RequestBody Flashsale flashsale) { return flashsaleService.addFlashsale(flashsale); }
}

