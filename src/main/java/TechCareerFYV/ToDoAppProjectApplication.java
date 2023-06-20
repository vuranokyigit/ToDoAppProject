package TechCareerFYV;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import java.util.TimeZone;

//@EnableJpaAuditing(auditorAwareRef = "auditorAwareMethod")

@SpringBootApplication(exclude = {
		//SecurityAutoConfiguration.class,
		org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
		org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class
}
)

//@SpringBootApplication
public class ToDoAppProjectApplication {
@PostConstruct
	public void init(){TimeZone.setDefault(TimeZone.getTimeZone("Europe/Istanbul")); }

	public static void main(String[] args) {

		//Disables headless JOptionPane
		System.setProperty("java.awt.headless", "false");

		SpringApplication.run(ToDoAppProjectApplication.class, args);


	}

}
