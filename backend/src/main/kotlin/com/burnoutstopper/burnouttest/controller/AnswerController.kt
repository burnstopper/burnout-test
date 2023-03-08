package com.burnoutstopper.burnouttest.controller

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.dto.ResultUserDto
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.service.AnswerService
import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletResponse
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
        @CookieValue("token", required = false, defaultValue = "") token: String,
        @RequestBody answer: Answer,
        response: HttpServletResponse
    ): ResponseEntity<ResultUserDto> {
        val (result, currenToken) = service.saveAnswer(token, answer)
        val dto = convertToDto(result)
        val cookie = Cookie("token", currenToken)
        cookie.maxAge = 7 * 24 * 60 * 60 // expires in 7 days
        cookie.secure = true
        cookie.isHttpOnly = true
        cookie.path = "/"
        response.addCookie(cookie)
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
