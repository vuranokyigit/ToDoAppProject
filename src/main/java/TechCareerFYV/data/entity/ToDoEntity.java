package TechCareerFYV.data.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
// LOMBOK
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "todo")
public class ToDoEntity extends BaseEntity implements Serializable {
    public static final Long serialVersionUID = 1L;
    //THIS IS THE PRIVATE PROPERTIES
    //HEADER
    @Column(name = "header",columnDefinition = "varchar(255) default 'header CANNOT BE NULL'")
    private String header;
    //CONTENT
    @Column(name = "content",columnDefinition = "varchar(255) default 'content CANNOT BE NULL'")
    private String content;
    //CHECKBOX


}
