package com.burnoutstopper.burnouttest.util

import com.burnoutstopper.burnouttest.model.Respondent
import org.springframework.web.client.RestTemplate

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