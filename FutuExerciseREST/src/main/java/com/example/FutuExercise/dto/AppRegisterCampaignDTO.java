package com.example.FutuExercise.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class AppRegisterCampaignDTO {

    private String name;

    private String keywords;

    private float bid_amount;

    private float campaign_fund;

    private boolean status;

    private String town;

    private float radius;
}
