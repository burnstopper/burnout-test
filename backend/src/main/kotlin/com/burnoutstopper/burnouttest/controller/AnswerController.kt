package com.burnoutstopper.burnouttest.controller

import com.burnoutstopper.burnouttest.dto.AnswerRequest
import com.burnoutstopper.burnouttest.dto.ResultUserDto
import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.service.AnswerService
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import kotlin.reflect.jvm.internal.impl.load.kotlin.JvmType

@CrossOrigin
@RestController
@RequestMapping("/api/v1/answers")
class AnswerController @Autowired constructor(private val service: AnswerService) {

    @PostMapping
    fun saveAnswer(
        @RequestBody answerRequest: AnswerRequest,
    ): ResponseEntity<Map<String, Any>> {
        val (result, currenToken) = service.saveAnswer(answerRequest.token, answerRequest.answer)
        val dto = convertToDto(result)
        val response = mapOf("result" to dto, "token" to currenToken)
        return ResponseEntity(response, HttpStatus.OK)
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
