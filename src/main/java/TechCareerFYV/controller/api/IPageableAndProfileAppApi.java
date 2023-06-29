package TechCareerFYV.controller.api;

import TechCareerFYV.business.dto.ToDoDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IPageableAndProfileAppApi<D> {
    // Add all data
    public ResponseEntity<List<ToDoDto>> speedDataService();
    //Delete all data
    public ResponseEntity<String> allDeleteService();
    //App info
    public ResponseEntity<String> appInformationService(HttpServletRequest request, HttpServletResponse response);
    //Pageable
    //list pageable structure
    public ResponseEntity<List<D>> todoServiceAllList();
    //list page and page size
    public ResponseEntity <Page<D>> todoServicePagination(int currentPage, int pageSize);
    //List page and pageable
    public  ResponseEntity <Page<D>> todoServicePagination(Pageable pageable, D d);
}


