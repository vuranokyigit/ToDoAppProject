package TechCareerFYV.error;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.extern.log4j.Log4j2;

import java.util.Date;
import java.util.Map;
//Lombok
@Data
//The @Data annotation automatically creates all the standard methods of the class (getter, setter, toString, equals, hashCode, etc.). This allows you to define classes in a shorter and cleaner way.
@AllArgsConstructor
@Builder
//The @Builder annotation is used to make the object creation process easier. By adding the @Builder annotation above the class, a nested class is created that implements the builder pattern. This ensures a readable and chained structure during object creation.
@Log4j2
//The @Log4j2 annotation ensures that the class has a Log4j 2 generated logger object. In this way, you can easily perform logging operations in the classroom.
@JsonInclude(JsonInclude.Include.NON_NULL)
//Let the backend show the full data on the frontend

public class ApiResult {
    private int status;
    private String error;
    private  String message;
    private  String path;
    private Date createdDate;
    private Map<String, String> validationErrors;

    public ApiResult(){
    }
    public ApiResult(int status, String error, String message, String path){
        this.status = status;
        this.error = error;
        this.message = message;
        this.path = path;

    }
    public ApiResult(int status, String message, String path){
        this.status = status;
        this.message = message;
        this.path = path;

    }

}
