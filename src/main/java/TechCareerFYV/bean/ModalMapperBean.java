package TechCareerFYV.bean;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//##Modal Mapper  'bridge'
@Configuration
public class ModalMapperBean {

    @Bean
    public ModelMapper modelMapperMethod(){
        return  new  ModelMapper();
    }
}
