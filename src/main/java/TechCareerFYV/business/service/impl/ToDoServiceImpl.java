package TechCareerFYV.business.service.impl;

import TechCareerFYV.bean.ModalMapperBean;
import TechCareerFYV.business.dto.ToDoDto;
import TechCareerFYV.business.service.IToDoGenericService;
import TechCareerFYV.data.entity.ToDoEntity;
import TechCareerFYV.data.repository.IToDoRepository;
import TechCareerFYV.exception.BadRequestException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.ArrayList;
import java.util.List;

// Lombok
@RequiredArgsConstructor // Injection
@Log4j2
// Asil is yukunu yapan yer
@Service
public class ToDoServiceImpl implements IToDoGenericService<ToDoDto, ToDoEntity> {
    private final ModalMapperBean modalMapperBean; // Dependency Injection
    private final IToDoRepository iToDoRepository; // Database

    // Model Mapper
    @Override
    public ToDoDto EntityToDto(ToDoEntity toDoEntity) {
        return modalMapperBean.modelMapperMethod().map(toDoEntity, ToDoDto.class); // Entity to DTO
    }

    @Override
    public ToDoEntity DtoToEntity(ToDoDto toDoDto) {
        return modalMapperBean.modelMapperMethod().map(toDoDto, ToDoEntity.class); // DTO to Entity
    }

    // CRUD

    // Create
    @Transactional // Create, Delete, Update
    @Override
    public ToDoDto todoServiceCreate(ToDoDto toDoDto) {
        if (toDoDto != null) {
            // Save
            ToDoEntity toDoEntityModelSaver = DtoToEntity(toDoDto);
            ToDoEntity toDoEntity = iToDoRepository.save(toDoEntityModelSaver);

            // After save
            toDoDto.setId(toDoEntity.getId());
            toDoDto.setSystemDate(toDoDto.getSystemDate());
        } else if (toDoDto == null) {
            throw new NotFoundException("ToDoDto does not exist");
        }
        return toDoDto;
    }

    // List
    @Override
    public List<ToDoDto> todoServiceList() {
        Iterable<ToDoEntity> toDoEntityIterable = iToDoRepository.findAll();
        List<ToDoDto> list = new ArrayList<>();

        for (ToDoEntity entity : toDoEntityIterable) {
            ToDoDto toDoDto = EntityToDto(entity);
            list.add(toDoDto);
        }
        return list;
    }

    // Find
    @Override
    public ToDoDto todoServiceFindById(Long id) {
        ToDoEntity toDoEntity = null;
        if (id != null) {
            toDoEntity = iToDoRepository.findById(id).orElseThrow(() ->
                    new BadRequestException(id + " nolu id bulunamadi")
            );
        } else if (id == null) {
            throw new BadRequestException("ToDoDto is null");
        }
        return EntityToDto(toDoEntity);
    }

    // Delete
    @Transactional // Create, Delete, Update
    @Override
    public ToDoDto todoServiceDeleteById(Long id) {
        ToDoDto toDoDtoFindForDelete = todoServiceFindById(id);
        ToDoEntity toDoEntity = DtoToEntity(toDoDtoFindForDelete);
        iToDoRepository.delete(toDoEntity);
        return toDoDtoFindForDelete;
    }

    // Update
    @Transactional // Create, Delete, Update
    @Override
    public ToDoDto todoServiceUpdateById(Long id, ToDoDto todoDto) {
        ToDoEntity toDoEntity = DtoToEntity(todoServiceFindById(id));
        if (toDoEntity != null) {
            toDoEntity.setId(id);
            toDoEntity.setHeader(todoDto.getHeader());
            toDoEntity.setContent(todoDto.getContent());
            iToDoRepository.save(toDoEntity);
            todoDto.setId(toDoEntity.getId());
            todoDto.setSystemDate(todoDto.getSystemDate());
        }
        return EntityToDto(toDoEntity);
    }

    @Override
    public ToDoDto todoServiceCheckBox(Long id) {
        return null;
    }


    // Pageable

    @Override
    public List<ToDoDto> todoServiceAllList() {
        Iterable<ToDoEntity> toDoEntityPage = iToDoRepository.findAll();
        List<ToDoDto> list = new ArrayList<>();

        for (ToDoEntity entity : toDoEntityPage) {
            ToDoDto toDoDto = EntityToDto(entity);
            list.add(toDoDto);
        }

        return list;
    }

    @Override
    public Page<ToDoEntity> todoServicePagination(int currentPage, int pageSize) {
        return null;
    }

    @Override
    public Page<ToDoEntity> todoServicePagination(Pageable pageable, ToDoDto toDoDto) {
        return null;
    }

    // Profile

    @Override
    public List<ToDoDto> speedDataService() {
        List<ToDoDto> list = new ArrayList<>();

        for (int i = 1; i <= 10; i++) {
            ToDoDto toDoDto = ToDoDto.builder()
                    .header("header " + i)
                    .content("content " + i)
                    .build();
            todoServiceCreate(toDoDto);
            list.add(toDoDto);
        }

        return list;
    }

    @Override
    public String allDeleteService() {
        iToDoRepository.deleteAll();
        log.info("Deleted");
        return "Deleted";
    }

    @Override
    public String appInformationService(HttpServletRequest request, HttpServletResponse response) {
        String URIInfo = request.getRequestURI();
        String localhostInfo = request.getLocalAddr();
        String sessionInfo = request.getSession().toString();
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(URIInfo).append(" ").append(localhostInfo).append(" ").append(sessionInfo);
        return stringBuilder.toString();
    }
}
