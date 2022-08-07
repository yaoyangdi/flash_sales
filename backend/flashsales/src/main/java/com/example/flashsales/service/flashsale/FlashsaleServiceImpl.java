package com.example.flashsales.service.flashsale;

import com.example.flashsales.model.Flashsale;
import com.example.flashsales.repository.FlashsaleRepository;
import com.example.flashsales.service.flashsale.FlashsaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlashsaleServiceImpl implements FlashsaleService {

    @Autowired
    private FlashsaleRepository flashsaleRepository;

    @Override
    public Flashsale addFlashsale(Flashsale flashsale) {
        return flashsaleRepository.save(flashsale);
    }

    @Override
    public List<Flashsale> getAllFlashsales() {
        return flashsaleRepository.findAll();
    }
}
