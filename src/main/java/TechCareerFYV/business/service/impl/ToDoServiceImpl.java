package TechCareerFYV.business.service.impl;

import TechCareerFYV.bean.ModalMapperBean;
import TechCareerFYV.business.dto.ToDoDto;
import TechCareerFYV.business.service.IToDoGenericService;
import TechCareerFYV.data.entity.ToDoEntity;
import TechCareerFYV.data.repository.IToDoRepository;
import io.swagger.v3.oas.annotations.servers.Server;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service //Asil is yukunu yapan yer

//Lombok
@RequiredArgsConstructor//injection
@Log4j2


public class ToDoServiceImpl implements IToDoGenericService <ToDoDto, ToDoEntity>{

    //final: 1-)field: sabit 2-)Metoda: override edemezsin 3-)class extends yapamasin
    //final:field verdiginizde zorunlu olarak biz constructor olusmasini istiyoruz
    private final ModalMapperBean modalMapperBean;
    //Database islemleri icin
    private final IToDoRepository iToDoRepository;

    //###########Model Mapper#########///
    @Override
    public ToDoDto EntityToDto(ToDoEntity toDoEntity) {
        return null;
    }

    @Override
    public ToDoEntity DtoToEntity(ToDoDto toDoDto) {
        return null;
    }

    //###########Crud#########///
    //Create
    @Transactional //Create, Delete, Update
    @Override
    public ToDoDto todoServiceCreate(ToDoDto toDoDto) {
        return null;
    }
    //List
    @Override
    public List<ToDoDto> todoServiceList() {
        return null;
    }
    //Find
    @Override
    public ToDoDto todoServiceFindById(Long id) {
        return null;
    }
    //Delete
    @Transactional //Create, Delete, Update
    @Override
    public ToDoDto todoServiceDeleteById(Long id) {
        return null;
    }
    //Update
    @Transactional //Create, Delete, Update
    @Override
    public ToDoDto todoServiceUpdateById(Long id) {
        return null;
    }
    //###########Pageable#########///
    @Override
    public List<ToDoDto> todoServiceAllList() {
        return null;
    }

    @Override
    public Page<ToDoEntity> todoServicePagination(int currentPage, int pageSize) {
        return null;
    }

    @Override
    public Page<ToDoEntity> todoServicePagination(Pageable pageable, ToDoDto toDoDto) {
        return null;
    }


    //###########Profile#########///
    @Override
    public String speedDataService() {
        return null;
    }

    @Override
    public String allDeleteService() {
        return null;
    }

    @Override
    public String appInformationService(HttpServletRequest request, HttpServletResponse response) {
        return null;
    }
}