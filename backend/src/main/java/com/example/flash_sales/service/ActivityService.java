package com.example.flash_sales.service;

import com.example.flash_sales.model.Activity;

import java.util.List;

public interface ActivityService {
    public Activity saveActivity(Activity activity);
    public List<Activity> getAllActivities();
}