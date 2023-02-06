package com.example.FutuExercise.exception.campaign;

import org.springframework.http.HttpStatus;

public class CampaignNotFoundException extends BusinessException {

    public CampaignNotFoundException(String message) {
        super(HttpStatus.NOT_FOUND, message);
    }
}
