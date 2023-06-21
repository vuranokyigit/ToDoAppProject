package TechCareerFYV.data.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Entity
@Table(name = "todotable")
public class ToDoEntity extends BaseEntity implements Serializable {
    public static final Long serialVersionUID = 1L;


    @Column(name="header", columnDefinition = "varchar(255) don't enter default 'header'")
    private String header;
    @Column(name="content",columnDefinition = "varchar(255) don't enter default 'content'")
    private String content;

}
