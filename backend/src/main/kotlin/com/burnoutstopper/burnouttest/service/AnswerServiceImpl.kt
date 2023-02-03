package com.burnoutstopper.burnouttest.service

import com.burnoutstopper.burnouttest.model.Answer
import com.burnoutstopper.burnouttest.model.Respondent
import com.burnoutstopper.burnouttest.model.Result
import com.burnoutstopper.burnouttest.model.TempRespondent
import com.burnoutstopper.burnouttest.repository.AnswerRepository
import com.burnoutstopper.burnouttest.repository.TempRespondentRepository
import com.burnoutstopper.burnouttest.util.Utils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpEntity
import org.springframework.http.HttpMethod
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import org.springframework.web.client.exchange
import java.util.UUID

@Service
class AnswerServiceImpl @Autowired
constructor(
    private val repository: AnswerRepository,
    private val service: ResultService,
    private val tempRepo: TempRespondentRepository
) : AnswerService {

    override fun saveAnswer(token: String, answer: Answer): Pair<Result, String> {

        val respondent = if (token.isBlank()) {
            tempRepo.save(TempRespondent(token = UUID.randomUUID().toString()))
//            Utils.createRespondent() TODO uncomment
        } else {
//            val id = Utils.getRespondentId(token) TODO uncomment
            val id = tempRepo.findByToken(token).id
            TempRespondent(id, token)
        }
        answer.respondentId = respondent.id!!
        repository.save(answer)
        val result = service.calculateResult(answer)

        return result to respondent.token
    }

    override fun getAllAnswers(): List<Answer> = repository.findAll()

    override fun getRespondentAnswer(token: String): Answer {
        val id = tempRepo.findByToken(token).id!!
//        val id = Utils.getRespondentId(token) TODO uncomment
        return repository.findByRespondentId(id)
    }
}