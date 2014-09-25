package com.erol.twitter;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@SuppressWarnings("deprecation")
@RunWith(Cucumber.class)
@Cucumber.Options(
		format = {"pretty", "html:target/html/"},
		features = "src/test/resource"
		)

public class RunnerTest {


}
