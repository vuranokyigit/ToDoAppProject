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
    private Long id;//id
    @Builder.Default//use whatever the current default time is
    private Date  systemDate=new Date(System.currentTimeMillis());//date
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
