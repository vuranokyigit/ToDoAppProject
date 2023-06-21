package TechCareerFYV.data.entity;

import TechCareerFYV.audit.AuditingAwareBaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;
//Lombok
@Getter
@Setter
@NoArgsConstructor

//JSON
@JsonIgnoreProperties(value = {"created_date, updated_date"}, allowGetters = true)//Don't follow this parameters
@EntityListeners(AuditingEntityListener.class)//auditing
@MappedSuperclass
public class BaseEntity extends AuditingAwareBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)//supported by postgre for param of AUTO
    private Long id;


    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp//go to the data I created and add database immediately
    private Date systemDate;
}