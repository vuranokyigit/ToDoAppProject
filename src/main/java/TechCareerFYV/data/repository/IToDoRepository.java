package TechCareerFYV.data.repository;

import TechCareerFYV.data.entity.ToDoEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IToDoRepository extends CrudRepository<ToDoEntity, Long> {

    //Delivered query
    ToDoEntity findByHeader(String header);

    //query
    @Query("select b from ToDoEntity b")
    List<ToDoEntity> myToDoList();


    //jpql

}
