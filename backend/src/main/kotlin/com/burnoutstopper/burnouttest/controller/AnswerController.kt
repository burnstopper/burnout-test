package com.burnoutstopper.burnouttest.controller

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.model.SaveResponse
import com.burnoutstopper.burnouttest.service.AnswerService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*


@CrossOrigin
@RestController
@RequestMapping("/answer")
class AnswerController @Autowired constructor(private val service: AnswerService) {

    //TODO Authorization Header can be empty or null
    @PostMapping("/save-answer")
    fun saveAnswer(
        @RequestHeader(name = "Authorization", required = false, defaultValue = "") token: String,
        @RequestBody answer: Answer
    ): SaveResponse {
        return service.saveAnswer(token, answer)
    }

    @GetMapping("/respondent")
    fun getRespondentAnswer(@RequestHeader("Authorization") token: String): Answer = service.getRespondentAnswer(token)

    @GetMapping("/all")
    fun getAllAnswers(): List<Answer> = service.getAllAnswers()
}
