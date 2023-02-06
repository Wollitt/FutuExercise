package com.example.FutuExercise.service.implementation;

import com.example.FutuExercise.dto.AppCampaignDTO;
import com.example.FutuExercise.dto.AppEditCampaignDTO;
import com.example.FutuExercise.dto.AppRegisterCampaignDTO;
import com.example.FutuExercise.exception.campaign.CampaignNotFoundException;
import com.example.FutuExercise.mapper.AppCampaignMapper;
import com.example.FutuExercise.model.AppAccount;
import com.example.FutuExercise.model.AppCampaign;
import com.example.FutuExercise.repository.AppCampaignRepository;
import com.example.FutuExercise.service.definition.AppAccountService;
import com.example.FutuExercise.service.definition.AppCampaignService;
import lombok.AllArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class AppCampaignServiceImpl implements AppCampaignService {

    private AppCampaignMapper campaignMapper;
    private AppCampaignRepository campaignRepository;
    private SimpMessagingTemplate simpMessagingTemplate;
    private AppAccountService appAccountService;

    @Override
    public AppCampaignDTO registerCampaign(AppRegisterCampaignDTO appCampaignDTO) {
        AppCampaign campaign = new AppCampaign();
        campaign.setName(appCampaignDTO.getName());
        campaign.setKeywords(appCampaignDTO.getKeywords());
        campaign.setBid_amount(appCampaignDTO.getBid_amount());
        campaign.setCampaign_fund(appCampaignDTO.getCampaign_fund());
        campaign.setStatus(appCampaignDTO.isStatus());
        campaign.setTown(appCampaignDTO.getTown());
        campaign.setRadius(appCampaignDTO.getRadius());

        AppAccount emerald_account = appAccountService.getEmeraldAccount();
        emerald_account.setBalance(emerald_account.getBalance() - campaign.getCampaign_fund());
        appAccountService.editEmeraldAccount(emerald_account);

        AppCampaign registeredCampaign = campaignRepository.save(campaign);
        AppCampaignDTO registeredCampaignDTO = campaignMapper.mapAppCampaignToAppCampaignDTO(registeredCampaign);

        simpMessagingTemplate.convertAndSend("/topic/campaigns/created", registeredCampaignDTO);

        return registeredCampaignDTO;
    }

    @Override
    @Transactional
    public AppCampaignDTO editCampaign(AppEditCampaignDTO editCampaignDTO) {
        AppCampaign campaign = campaignRepository.findById(editCampaignDTO.getId()).orElseThrow(
                () -> new CampaignNotFoundException(String.format("Campaign with id %s not found", editCampaignDTO.getId()))
        );

        AppAccount emerald_account = appAccountService.getEmeraldAccount();
        emerald_account.setBalance(emerald_account.getBalance() + campaign.getCampaign_fund() - editCampaignDTO.getCampaign_fund());
        appAccountService.editEmeraldAccount(emerald_account);

        campaign.setName(editCampaignDTO.getName());
        campaign.setKeywords(editCampaignDTO.getKeywords());
        campaign.setBid_amount(editCampaignDTO.getBid_amount());
        campaign.setCampaign_fund(editCampaignDTO.getCampaign_fund());
        campaign.setStatus(editCampaignDTO.isStatus());
        campaign.setTown(editCampaignDTO.getTown());
        campaign.setRadius(editCampaignDTO.getRadius());

        AppCampaign editedCampaign = campaignRepository.save(campaign);
        AppCampaignDTO editedCampaignDTO  = campaignMapper.mapAppCampaignToAppCampaignDTO(editedCampaign);

        simpMessagingTemplate.convertAndSend("/topic/campaigns/edited", editCampaignDTO);

        return editedCampaignDTO;
    }

    @Override
    @Transactional
    public void deleteCampaign(int id) {
        System.out.println(id);
        AppCampaign campaign = campaignRepository.findById(id).orElseThrow(
                () -> new CampaignNotFoundException(String.format("Campaign with id %s not found", id))
        );
        AppCampaignDTO deletedCampaignDTO = campaignMapper.mapAppCampaignToAppCampaignDTO(campaign);

        AppAccount emerald_account = appAccountService.getEmeraldAccount();
        emerald_account.setBalance(emerald_account.getBalance() + campaign.getCampaign_fund());
        appAccountService.editEmeraldAccount(emerald_account);

        campaignRepository.delete(campaign);

        simpMessagingTemplate.convertAndSend("/topic/campaigns/deleted", deletedCampaignDTO);
    }

    @Override
    public List<AppCampaignDTO> getCampaignList() {
        return campaignMapper.mapAppCampaignListToAppCampaignDTOList((List<AppCampaign>) campaignRepository.findAll());
    }
}
