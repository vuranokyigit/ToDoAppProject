package TechCareerFYV.audit;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.userdetails.User;

import java.io.Serializable;
import  java.util.Date;
import java.util.Optional;

//Lombok
@Getter
@Setter
abstract public class AuditingAwareBaseDto implements Serializable {
    //Serializing
public static final Long serialVersionUID = 1L;

//    public Date getUpdatedDate() {
//        return updatedDate;
//    }
//
//    public Date getCreatedDate() {
//        return createdDate;
//    }

    //Global
    private Long id;//id
    @Builder.Default//use whatever the current default time is
    private Date  systemDate=new Date(System.currentTimeMillis()); //date
    //Auditing
    @JsonIgnore
    protected String createdUser= String.valueOf("vuranok");
    @JsonIgnore
    protected Date createdDate =systemDate;

    @JsonIgnore
    protected String updatedUser=String.valueOf("vuranok");;

    @JsonIgnore
    protected Date updatedDate= systemDate;

}
