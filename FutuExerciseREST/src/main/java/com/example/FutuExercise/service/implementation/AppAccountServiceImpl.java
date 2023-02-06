package com.example.FutuExercise.service.implementation;

import com.example.FutuExercise.model.AppAccount;
import com.example.FutuExercise.repository.AppAccountRepository;
import com.example.FutuExercise.service.definition.AppAccountService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AppAccountServiceImpl implements AppAccountService {

    private AppAccountRepository appAccountRepository;

    @Override
    public AppAccount getEmeraldAccount() {
        return appAccountRepository.findById(1).orElseThrow();
    }

    @Override
    public void editEmeraldAccount(AppAccount appAccount) {
        appAccountRepository.save(appAccount);
    }
}
