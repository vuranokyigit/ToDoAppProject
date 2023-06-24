package TechCareerFYV.controller.api;

import TechCareerFYV.business.dto.ToDoDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IToDoGenericApi<D> extends IPageableAndProfileAppApi {
    //root
    //Spring MVC(Thymleaf)
    public ResponseEntity<String> getRoot();

    //CRUD
    //Create
    public ResponseEntity<?> todoServiceCreate(D d);

    //List
    public ResponseEntity<List<D>> todoServiceList();

    //Find (ben sana bi id veriyim o id ye gore bilgileri bul)
    public ResponseEntity<?> todoServiceFindById(Long id);

    //Delete
    public ResponseEntity<?> todoServiceDeleteById(Long id);

    // Update
    public ResponseEntity<?> todoServiceUpdateById(Long id, ToDoDto toDoDto);

}