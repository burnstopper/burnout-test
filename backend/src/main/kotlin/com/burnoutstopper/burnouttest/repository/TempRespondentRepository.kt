package com.burnoutstopper.burnouttest.repository

import com.burnoutstopper.burnouttest.model.TempRespondent
import org.springframework.data.jpa.repository.JpaRepository

interface TempRespondentRepository : JpaRepository<TempRespondent, Int>{
    fun findByToken(token: String): TempRespondent
}