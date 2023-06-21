package TechCareerFYV.audit;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import  java.util.Date;
//Lombok
@Getter
@Setter
abstract public class AuditingAwareBaseDto implements Serializable {
    //Serializing
public static final Long serialVersionUID = 1L;
    //Global
    private Long id;
    @Builder.Default
    private Date  systemDate=new Date(System.currentTimeMillis());


    //Auditing
    @JsonIgnore
    protected String createdUser;
    @JsonIgnore
    protected Date createdDate;
    @JsonIgnore
    protected String updateUser;
    @JsonIgnore
    protected Date updateDate;

}
