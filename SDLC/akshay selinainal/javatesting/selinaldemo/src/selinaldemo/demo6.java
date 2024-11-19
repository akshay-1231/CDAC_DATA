package selinaldemo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class demo6 {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		WebDriver obj=new ChromeDriver();
		obj.get("https://www.jotform.com/42382403598964");

		obj.manage().window().maximize();

		obj.findElement(By.name("q3_name")).sendKeys("Akshay");

		obj.findElement(By.name("q4_email")).sendKeys("akshayprajapati424206@gmail.com");

		

		WebElement we = obj.findElement(By.id("input_7_month"));

		we.sendKeys("May");

		we.click();

		

		WebElement we1 = obj.findElement(By.id("input_7_day"));

		we1.sendKeys("12");

		we1.click();

		

		

		WebElement we2 = obj.findElement(By.id("input_7_year"));

		we2.sendKeys("1998");

		we2.click();

		

		obj.findElement(By.name("q5_address5[addr_line1]")).sendKeys("jamner");

		obj.findElement(By.name("q5_address5[addr_line2]")).sendKeys("jalgoan");

		obj.findElement(By.name("q5_address5[city]")).sendKeys("jalgaon");

		obj.findElement(By.name("q5_address5[state]")).sendKeys("Maharastra");

		obj.findElement(By.name("q5_address5[postal]")).sendKeys("424206");

		

		WebElement we3 = obj.findElement(By.name("q5_address5[country]"));

		we3.sendKeys("India");

		we3.click();

		

		obj.findElement(By.id("input_2")).click();
		
	}

}
