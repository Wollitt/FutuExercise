package com.example.FutuExercise.mapper;

import com.example.FutuExercise.dto.AppCampaignDTO;
import com.example.FutuExercise.model.AppCampaign;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper()
public interface AppCampaignMapper {
    AppCampaign mapAppCampaignDTOToAppCampaign(AppCampaignDTO appCampaignDTO);

    AppCampaignDTO mapAppCampaignToAppCampaignDTO(AppCampaign appCampaign);

    List<AppCampaignDTO> mapAppCampaignListToAppCampaignDTOList(List<AppCampaign> appCampaigns);
}
