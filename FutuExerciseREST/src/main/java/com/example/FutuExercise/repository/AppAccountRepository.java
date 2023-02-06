package com.example.FutuExercise.repository;

import com.example.FutuExercise.model.AppAccount;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppAccountRepository extends CrudRepository<AppAccount, Integer> {
}
