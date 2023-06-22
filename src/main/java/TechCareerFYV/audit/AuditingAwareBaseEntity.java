package TechCareerFYV.audit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import java.util.Date;

//Lombok
@Data

//Super Class
@MappedSuperclass
@JsonIgnoreProperties(value = {"created_date,updated_date"},allowGetters = true)
abstract public class AuditingAwareBaseEntity {
//Who added?
    @CreatedBy
    @Column(name = "created_user")
    protected String createdUser;
//Who added when?
    @CreatedDate
    @Column(name = "created_date")
    protected Date createdDate;
//Who updated?
    @LastModifiedBy
    @Column(name = "updated_user")
    protected String updatedUser;
//Who updated when?
    @LastModifiedDate
    @Column(name = "updated_date")
    protected Date updatedDate;

}
