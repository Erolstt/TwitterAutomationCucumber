package com.erol.twitter;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepsForLogin {
	
	WebDriver driver = null;
	//WebDriverWait wait = new WebDriverWait(driver, 10);
	
	@After 
	public void tearDown(){
		driver.quit();
	}

	@Given("^I navigate to twitter$")
	public void shouldGoTwitter() {
	    driver = new FirefoxDriver();
	    driver.navigate().to("https://twitter.com/");
	}

	@When("^I try to login with valid credentials$")
	public void loginWithValidCredentials(){
	    driver.findElement(By.id("signin-email")).sendKeys("automateduserme");
	    driver.findElement(By.id("signin-password")).sendKeys("123456test");
	    //driver.findElement(By.cssSelector(".submit.btn.primary-btn.flex-table-btn.js-submit")).click();
	    driver.findElement(By.id("signin-password")).submit();
	}

	@Then("^I should see that I logged in successfully$")
	public void verifyLogin(){
	    Assert.assertEquals("Something went wrong with the user :(", "automateduserme",
	    		driver.findElement(By.cssSelector(".u-linkComplex-target")).getText());
	
	}
	
	@When("^I search \"(.*?)\"$")
	public void searchUser(String userName){
		
		WebDriverWait wait = new WebDriverWait(driver, 10);
		driver.findElement(By.id("search-query")).sendKeys(userName);
		driver.findElement(By.cssSelector("button[type=submit].nav-search")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("a[data-nav=\"users\"]")));
		driver.findElement(By.cssSelector("a[data-nav=\"users\"]")).click();
	    
		
	}

	@Then("^I should see \"(.*?)\" in the search result$")
	public void verifySearchedUser(String userName) {
		Assert.assertEquals("@"+userName, 
				driver.findElement(By.cssSelector(".username.js-action-profile-name")).getText());
		

	}
	
	@When("^I tweet \"(.*?)\"$")
	public void shouldPostTweet(String someTweets) throws Throwable {
	   WebElement tweetBox = driver.findElement(By.id("tweet-box-mini-home-profile"));
	   tweetBox.click();
	   tweetBox.sendKeys(someTweets);
	   driver.findElement(By.cssSelector(".btn.primary-btn.tweet-action.tweet-btn.js-tweet-btn")).click();
	   
	    
	}

	@Then("^I should see \"(.*?)\" on my stream$")
	public void verifySendingTweet(String someTweets) throws Throwable {
		assert driver
		.findElement(By.tagName("body"))
		.getText()
		.contains(someTweets);


	}
	
	@When("^I follow \"(.*?)\"$")
	public void followUser(String userName) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^I should see that \"(.*?)\" is followed by me$")
	public void verifyUserFollowed(String userName) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
	}

}
