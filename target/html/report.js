$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginFeature.feature");
formatter.feature({
  "id": "this-is-login-feature-for-twitter",
  "description": "",
  "name": "This is login feature for twitter",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "this-is-login-feature-for-twitter;login-twitter-with-valid-credentials",
  "description": "",
  "name": "Login twitter with valid credentials",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I navigate to twitter",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I try to login with valid credentials",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "I should see that I logged in successfully",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "StepsForLogin.shouldGoTwitter()"
});
formatter.result({
  "duration": 13497465624,
  "status": "passed"
});
formatter.match({
  "location": "StepsForLogin.loginWithValidCredentials()"
});
formatter.result({
  "duration": 4768432868,
  "status": "passed"
});
formatter.match({
  "location": "StepsForLogin.verifyLogin()"
});
formatter.result({
  "duration": 54237752,
  "status": "passed"
});
formatter.after({
  "duration": 207221894,
  "status": "passed"
});
formatter.scenario({
  "id": "this-is-login-feature-for-twitter;searching-given-username",
  "description": "",
  "name": "Searching given username",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I navigate to twitter",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I try to login with valid credentials",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "I search \"erolstt\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I should see \"serhat\" in the search result",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "StepsForLogin.shouldGoTwitter()"
});
formatter.result({
  "duration": 10465268159,
  "status": "passed"
});
formatter.match({
  "location": "StepsForLogin.loginWithValidCredentials()"
});
formatter.result({
  "duration": 4355073136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "erolstt",
      "offset": 10
    }
  ],
  "location": "StepsForLogin.searchUser(String)"
});
formatter.result({
  "duration": 1974411201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "serhat",
      "offset": 14
    }
  ],
  "location": "StepsForLogin.verifySearchedUser(String)"
});
formatter.result({
  "duration": 53392318,
  "status": "failed",
  "error_message": "org.junit.ComparisonFailure: expected:\u003c@[serha]t\u003e but was:\u003c@[erolst]t\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.erol.twitter.StepsForLogin.verifySearchedUser(StepsForLogin.java:61)\r\n\tat ✽.Then I should see \"serhat\" in the search result(loginFeature.feature:12)\r\n"
});
formatter.after({
  "duration": 241890658,
  "status": "passed"
});
formatter.scenario({
  "id": "this-is-login-feature-for-twitter;sending-tweet",
  "description": "",
  "name": "Sending tweet",
  "keyword": "Scenario",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I navigate to twitter",
  "keyword": "Given ",
  "line": 15
});
formatter.step({
  "name": "I try to login with valid credentials",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "I tweet \"Some tweets\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I should see \"Some tweets\" on my stream",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "location": "StepsForLogin.shouldGoTwitter()"
});
formatter.result({
  "duration": 9481532814,
  "status": "passed"
});
formatter.match({
  "location": "StepsForLogin.loginWithValidCredentials()"
});
formatter.result({
  "duration": 3967058451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some tweets",
      "offset": 9
    }
  ],
  "location": "StepsForLogin.shouldPostTweet(String)"
});
formatter.result({
  "duration": 740854286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some tweets",
      "offset": 14
    }
  ],
  "location": "StepsForLogin.verifySendingTweet(String)"
});
formatter.result({
  "duration": 5743421804,
  "status": "passed"
});
formatter.after({
  "duration": 235098110,
  "status": "passed"
});
});