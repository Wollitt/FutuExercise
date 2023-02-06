package com.example.FutuExercise.controller;

import com.example.FutuExercise.dto.AppCampaignDTO;
import com.example.FutuExercise.dto.AppEditCampaignDTO;
import com.example.FutuExercise.dto.AppRegisterCampaignDTO;
import com.example.FutuExercise.service.definition.AppCampaignService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/campaigns")
@CrossOrigin(origins = "http://localhost:4200")
public class AppCampaignController {

    private AppCampaignService campaignService;

    @GetMapping
    public List<AppCampaignDTO> getCampaignList() {
        return campaignService.getCampaignList();
    }

    @PostMapping
    public AppCampaignDTO registerCampaign(@Valid @RequestBody AppRegisterCampaignDTO appCampaignDTO) {
        return campaignService.registerCampaign(appCampaignDTO);
    }

    @PutMapping
    public AppCampaignDTO editCampaign(@RequestBody AppEditCampaignDTO editCampaignDTO) {
        return campaignService.editCampaign(editCampaignDTO);
    }

    @DeleteMapping
    public void deleteCampaign(int id) {
        campaignService.deleteCampaign(id);
    }
}
