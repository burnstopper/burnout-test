package com.burnoutstopper.burnouttest.controller

import Answer
import com.burnoutstopper.burnouttest.dto.ResultUserDto
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.service.AnswerService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@CrossOrigin
@RestController
@RequestMapping("/api/v1/answers")
class AnswerController @Autowired constructor(private val service: AnswerService) {

    @PostMapping
    fun saveAnswer(
        @CookieValue("token", required = false) token: String,
        @RequestBody answer: Answer
    ): ResponseEntity<ResultUserDto> {
        val (result, currenToken) = service.saveAnswer(token, answer)
        val dto = convertToDto(result)
        val headers = HttpHeaders()
        headers.add("token", currenToken)
        return ResponseEntity(dto, HttpStatus.OK)
    }

    //TODO get last (100) answers

    private fun convertToDto(result: Result): ResultUserDto {
        return ResultUserDto(
            exhaustion = result.exhaustion,
            depersonalization = result.depersonalization,
            reduction = result.reduction,
            integralIndex = result.integralIndex
        )
    }
}
