package com.burnoutstopper.burnouttest.util

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.AnswerType
import com.burnoutstopper.burnouttest.model.Respondent
import org.springframework.web.client.RestTemplate
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.repository.TempRespondentRepository
import org.apache.catalina.core.ApplicationContext
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import kotlin.math.sqrt

object Utils {

    private const val HOST_URL = "http://localhost:8081"

    fun createRespondent(): Respondent {

        val restTemplate = RestTemplate()
        val respondent =
            restTemplate.postForObject("${HOST_URL}/create-respondent", null, Respondent::class.java)
        return respondent!!
    }

    fun getRespondentId(accessToken: String): Int {
        //TODO remove Berear
        val restTemplate = RestTemplate()
        val id = restTemplate.getForObject(
            "${HOST_URL}/get-respondent",
            Int::class.java,
            mapOf("token" to accessToken)
        )
        return id!!
    }

}