package TechCareerFYV.business.dto;

import TechCareerFYV.audit.AuditingAwareBaseDto;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.io.Serializable;
//Lombok
@Data  @AllArgsConstructor  @NoArgsConstructor @Builder  @Log4j2

public class ToDoDto extends AuditingAwareBaseDto implements Serializable {
    public static final Long serialVersionUID = 1L;

    @NotEmpty(message = "{todo.header.validation.constraints.NotNull.message}")
    @Size(min = 4, message = "{todo.header.least.validation.constraints.NotNull.message}")
    private String header;
    @NotEmpty(message = "{todo.content.validation.constraints.NotNull.message}")
    @Size(max = 50, message = "{todo.content.least.validation.constraints.NotNull.message}")
    private String content;
    private Boolean checkBox;
}
