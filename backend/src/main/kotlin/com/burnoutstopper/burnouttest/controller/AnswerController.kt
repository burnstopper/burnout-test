package com.burnoutstopper.burnouttest.controller

import com.burnoutstopper.burnouttest.dto.ResultUserDto
import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.service.AnswerService
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/api/v1/answers")
class AnswerController @Autowired constructor(private val service: AnswerService) {

    @PostMapping
    fun saveAnswer(
        @RequestHeader("token", required = false, defaultValue = "") token: String,
        @RequestBody answer: Answer,
        response: HttpServletResponse
    ): ResponseEntity<ResultUserDto> {
        val (result, currenToken) = service.saveAnswer(token, answer)
        val dto = convertToDto(result)
        response.addHeader("token", currenToken)
        return ResponseEntity(dto, HttpStatus.OK)
    }

    private fun convertToDto(result: Result): ResultUserDto {
        return ResultUserDto(
            dateTime = result.dateTime,
            exhaustion = result.exhaustion,
            depersonalization = result.depersonalization,
            reduction = result.reduction,
            integralIndex = result.integralIndex
        )
    }
}
