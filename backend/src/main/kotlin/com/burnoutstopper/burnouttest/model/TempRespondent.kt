package com.burnoutstopper.burnouttest.model

import jakarta.persistence.*
import org.hibernate.annotations.GenericGenerator

//TODO will be removed after integration with respondent microservice
@Entity
@Table(name = "temp_respondents")
data class TempRespondent(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,

    val token: String
)