package selinaldemo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class demo2 {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		WebDriver dr3=new ChromeDriver();
		dr3.get("https://www.demoblaze.com");
	dr3.findElement(By.id("signin2")).click();
	Thread.sleep(2000);
	dr3.findElement(By.id("sign-username")).sendKeys("akshay");
	Thread.sleep(2000);
	dr3.findElement(By.id("sign-password")).sendKeys("akshay@123");
	Thread.sleep(2000);
	dr3.findElement(By.className("btn btn-secondary")).click();
	}

}
