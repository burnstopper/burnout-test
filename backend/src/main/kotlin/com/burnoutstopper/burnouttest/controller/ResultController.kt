package com.burnoutstopper.burnouttest.controller

import com.burnoutstopper.burnouttest.dto.ResultRecentDto
import com.burnoutstopper.burnouttest.dto.ResultDto
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.service.ResultService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/api/v1/results")
class ResultController @Autowired constructor(private val service: ResultService) {
    @GetMapping
    fun getRecentResults(
        @RequestHeader("Authorization", required = false) authorizationHeader: String, //TODO change to required = true
        @RequestParam("from") fromTimestamp: Long
    ): ResponseEntity<List<ResultRecentDto>> {
        val results = service.getRecentResults(fromTimestamp).parallelStream().map { convertToRecentResultDto(it) }.toList()
        return ResponseEntity(results, HttpStatus.OK)
    }

    @GetMapping("/{id}")
    fun getResultById(@PathVariable("id") id: Int): ResponseEntity<ResultDto> {
        val result = service.getResult(id)
        if (result == null) {
            return ResponseEntity(null, HttpStatus.NOT_FOUND)
        }
        val dto = convertToResultDto(result)
        return ResponseEntity(dto, HttpStatus.OK)
    }

    @GetMapping
    fun getResultsByCookie(@CookieValue("token", required = true) token: String) : ResponseEntity<List<ResultDto>> {
        val results = service.getResults(token).parallelStream().map { convertToResultDto(it) }.toList()
        return ResponseEntity(results, HttpStatus.OK)
    }

    private fun convertToResultDto(result: Result): ResultDto {
        return ResultDto(
            respondentId = result.respondentId,
            dataTime = result.dateTime.toEpochSecond(),
            emotionalExhaustion = result.exhaustion,
            depersonalization = result.depersonalization,
            reductionOfProfessionalism = result.reduction,
            burnoutP = result.integralIndex,
            quizId = result.quizId
        )
    }

    private fun convertToRecentResultDto(result: Result): ResultRecentDto {
        return ResultRecentDto(
            resultId = result.id,
            respondentId = result.respondentId,
            dateTime = result.dateTime.toEpochSecond(),
            quizId = result.quizId
        )
    }
}