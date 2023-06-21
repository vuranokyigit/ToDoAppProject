package TechCareerFYV.business;

import TechCareerFYV.audit.AuditingAwareBaseDto;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.io.Serializable;
//Lombok
@Data
@AllArgsConstructor
@NoArgsConstructor
@Log4j2

public class ToDoDto extends AuditingAwareBaseDto implements Serializable {
    public static final Long serialVersionUID = 1L;

    @NotEmpty(message = "Header cannot be null")
    @Size(min = 10, message = "Title must be at least 10 characters.")
    private String header;
    @NotEmpty(message = "Content cannot be null")
    @Size(max = 50, message = "Content must be at least 50 characters.")
    private String content;
}
