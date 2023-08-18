package TechCareerFYV.controller.api.impl;

import TechCareerFYV.business.dto.ToDoDto;
import TechCareerFYV.business.service.IToDoGenericService;
import TechCareerFYV.controller.api.IToDoGenericApi;
import TechCareerFYV.error.ApiResult;
import TechCareerFYV.util.ReactURL;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Lombok
@RequiredArgsConstructor
@Log4j2



@RestController
@CrossOrigin(origins = ReactURL.REACT_URL) //cors( iki farkli portal arasinda haberlesmek istiyorsaniz cors yazmak zorundasiniz yoksa cors hatasi alirsiniz)
//Ornegin react icin localhost3000 kullaniyorum bu projede de 3333 kullaniyorum bu portlar arasindaki haberlesmeyi sagliyor
@RequestMapping("/todo/api/v1")
public class ToDoApiImpl implements IToDoGenericApi<ToDoDto> {
    //injection
    private final IToDoGenericService iToDoGenericService;
    //error
   private  ApiResult apiResult;
    @Override
    @GetMapping("/")
    public ResponseEntity<String> getRoot() {
        return ResponseEntity.ok("index");
    }
    //Speed, Delete All########
    // localhost:3333/todo/api/v1/speed/data(ayni sekilde postmanda send yapip 5 data olustugunu gorecegiz)
    @GetMapping("/speed/data")
    @Override
    public ResponseEntity<List<ToDoDto>> speedDataService() {
        return ResponseEntity.ok( iToDoGenericService.speedDataService());
    }//5 data add
    @GetMapping("/all/delete")
    @Override
    public ResponseEntity<String> allDeleteService() {
        return ResponseEntity.ok( iToDoGenericService.allDeleteService());
    }//all data delete
    @GetMapping("/app/information")
    @Override
    public ResponseEntity<String> appInformationService(HttpServletRequest request, HttpServletResponse response) {
        return ResponseEntity.ok( iToDoGenericService.appInformationService(request, response));
    }
    //Pageable################
    @Override
    public ResponseEntity<List> todoServiceAllList() {
        return null;
    }
    @Override
    public ResponseEntity<Page> todoServicePagination(int currentPage, int pageSize) {
        return null;
    }
    @Override
    public ResponseEntity<Page> todoServicePagination(Pageable pageable, Object o) {
        return null;
    }
    //Crud####################
    //Create
    //localhost:3333/todo/api/v1/create
    @Override
    @PostMapping("/create")
    public ResponseEntity<?> todoServiceCreate(@Valid @RequestBody ToDoDto toDoDto) {
        return ResponseEntity.ok( iToDoGenericService.todoServiceCreate(toDoDto));
    }
    //List
    //localhost:3333/todo/api/v1/list (bu uri i postmanda send edecegiz testini yapmak icin)
    @Override
    @GetMapping(value = "/list")
    public ResponseEntity<List<ToDoDto>> todoServiceList() {
        return ResponseEntity.ok(iToDoGenericService.todoServiceAllList());
    }
    //Find
    @Override
    @GetMapping({"/find", "/find/{id}" })
    public ResponseEntity<?> todoServiceFindById( @PathVariable(name = "id", required = false) Long id) {
        if (id==null){
            log.error("ToDo api come null pointer exception");
            throw new NullPointerException(id+"ToDo api come null data");
        }if (id==0){
            log.error("ToDo api 0 badrequest geldi");
            //int status, String error, String message, String path
            apiResult = new ApiResult(400, "bad Request", " bad Request", "/todo/api/v1/find/0");
            return ResponseEntity.ok(apiResult);
        }
        return ResponseEntity.ok((ToDoDto) iToDoGenericService.todoServiceFindById(id));
    }
    //Delete
    @Override
    @DeleteMapping({"/delete", "/delete/{id}" })
    public ResponseEntity<?> todoServiceDeleteById( @PathVariable(name = "id", required = false) Long id) {
        return ResponseEntity.ok(iToDoGenericService.todoServiceDeleteById(id));
    }
    @Override
    @PutMapping({"/update", "/update/{id}" })
    public ResponseEntity<?> todoServiceUpdateById(
            @PathVariable(name = "id", required = false) Long id,
            @Valid @RequestBody ToDoDto toDoDto) {
        toDoDto.setId(id);
        return ResponseEntity.ok(iToDoGenericService.todoServiceUpdateById(id,toDoDto));
    }
}
