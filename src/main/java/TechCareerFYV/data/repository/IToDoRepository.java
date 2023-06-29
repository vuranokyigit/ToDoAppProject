package TechCareerFYV.data.repository;
//gerekli mi bi bak buraya!!!!!!
import TechCareerFYV.data.entity.ToDoEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface IToDoRepository extends CrudRepository<ToDoEntity, Long> {
    //DELIVERED QUERY
    ToDoEntity findByHeader(String header);
    //QUERY
    @Query("select t from ToDoEntity t")
    List<ToDoEntity> myToDoList();
}
