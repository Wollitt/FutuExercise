package com.example.FutuExercise.model;

import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="CAMPAIGNS")
public class AppCampaign {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "keywords")
    private String keywords;

    @Column(name = "bid_amount")
    private float bid_amount;

    @Column(name = "campaign_fund")
    private float campaign_fund;

    @Column(name = "status")
    private boolean status;

    @Column(name = "town")
    private String town;

    @Column(name = "radius")
    private float radius;
}
