package com.example.FutuExercise.service.definition;

import com.example.FutuExercise.dto.AppCampaignDTO;
import com.example.FutuExercise.dto.AppEditCampaignDTO;
import com.example.FutuExercise.dto.AppRegisterCampaignDTO;

import java.util.List;

public interface AppCampaignService {

    AppCampaignDTO registerCampaign(AppRegisterCampaignDTO appCampaignDTO);

    AppCampaignDTO editCampaign(AppEditCampaignDTO editCampaignDTO);

    void deleteCampaign(int id);

    List<AppCampaignDTO> getCampaignList();
}
