package TechCareerFYV.error;

import TechCareerFYV.util.ReactURL;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//LOMBOK
@Log4j2
@RequiredArgsConstructor

// from SpringBoot default error to customize
@RestController
@CrossOrigin(origins = ReactURL.REACT_URL)// @CrossOrigin(origins = "http://localhost:3000")
public class CustomErrorHandleWebRequest implements ErrorController {

    // INJECTION
    private final ErrorAttributes errorAttributes;


    // http://localhost:3333/error
    // from spring /error catch custom handle
    @RequestMapping("/error")
    public ApiResult handleError(WebRequest webRequest) {
        //ApiResult variable declare
        int status;
        String message, path;
        ApiResult apiResult;

        //Spring 2.3>=
        Map<String, Object> attributes = this.errorAttributes.getErrorAttributes(
                webRequest, ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE, ErrorAttributeOptions.Include.BINDING_ERRORS)
        ); //end attributes

        status = (int) attributes.get("status");
        message = (String) attributes.get("message");
        path = (String) attributes.get("path");
        apiResult = new ApiResult(status, path, message);

        //if attribute include apiResult
        if (attributes.containsKey("errors")) {
            List<FieldError> fieldErrorList = (List) attributes.get("errors");
            Map<String, String> validationMistake = new HashMap<>();
            for (FieldError fieldError : fieldErrorList) {
                validationMistake.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            apiResult.setValidationErrors(validationMistake);
        }
        return apiResult;
    } //end  handleError

}
