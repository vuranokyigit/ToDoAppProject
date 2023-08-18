package TechCareerFYV.bean;

import TechCareerFYV.business.dto.ToDoDto;
import TechCareerFYV.business.service.impl.ToDoServiceImpl;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
@RequiredArgsConstructor
@Configuration
@Builder
@Data
public class CommandLineRunnerBean {

    private final ToDoServiceImpl toDoService;
//commandline runner da parametre olarak olusturabilirsin
    @Bean
    public CommandLineRunner commandLineRunnerMethod(){
        return args -> {
            List<ToDoDto> list = new ArrayList<>();
            //we can provide this area for default coming data to database
            toDoService.speedDataService();
        }; //end args
    } // end command Line Runner Method
} // end class

