package com.example.flash_sales.controller;

import com.example.flash_sales.model.Activity;
import com.example.flash_sales.repository.ActivityRepository;
import com.example.flash_sales.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class FlashsalesController {
    @Autowired
    private ActivityService activityService;

    @GetMapping("/flashsales")
    List<Activity> all(){
        return activityService.getAllActivities();
    }

    @PostMapping("/flashsales")
    Activity newActivity(@RequestBody Activity newActivity){
        return activityService.saveActivity(newActivity);
    }
}
