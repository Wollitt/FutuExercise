package com.example.FutuExercise.repository;

import com.example.FutuExercise.model.AppCampaign;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppCampaignRepository extends CrudRepository<AppCampaign, Integer> {
}
