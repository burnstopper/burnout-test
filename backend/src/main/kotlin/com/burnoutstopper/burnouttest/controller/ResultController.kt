package com.burnoutstopper.burnouttest.controller

import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.service.ResultService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:8080", "https://be95-83-242-179-144.eu.ngrok.io"])
@RestController
@RequestMapping("/result")
class ResultController @Autowired constructor(private val service: ResultService) {

    @GetMapping("/respondent")
    fun getRespondentResults(@RequestHeader("Authorization") token: String): Result =
        service.getRespondentResult(token)

    @GetMapping("/all")
    fun getAllResults(): List<Result> = service.getAllResults()
}