package com.burnoutstopper.burnouttest.model

import jakarta.persistence.*
import org.hibernate.annotations.GenericGenerator

@Entity
@Table(name = "temp_respondents")
data class TempRespondent(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Int? = null ,

    val token: String
)