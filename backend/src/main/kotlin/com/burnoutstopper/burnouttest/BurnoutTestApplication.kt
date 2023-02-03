package com.burnoutstopper.burnouttest

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication


@SpringBootApplication
class BurnoutTestApplication

fun main(args: Array<String>) {
    runApplication<BurnoutTestApplication>(*args)
}
