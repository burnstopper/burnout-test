package com.burnoutstopper.burnouttest.model

import jakarta.persistence.*
import org.hibernate.annotations.GenericGenerator

//TODO will be removed after integration with respondent microservice
@Entity
@Table(schema = "respondent", name = "respondents")
data class TempRespondent(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null,

    val token: String
)