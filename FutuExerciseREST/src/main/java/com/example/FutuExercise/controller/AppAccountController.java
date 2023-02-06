package com.example.FutuExercise.controller;

import com.example.FutuExercise.model.AppAccount;
import com.example.FutuExercise.service.definition.AppAccountService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("api/account")
@CrossOrigin(origins = "http://localhost:4200")
public class AppAccountController {

    private AppAccountService accountService;

    @GetMapping
    public AppAccount getAccount() {
        return accountService.getEmeraldAccount();
    }
}
