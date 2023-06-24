package TechCareerFYV.business.service.impl;

import TechCareerFYV.bean.ModalMapperBean;
import TechCareerFYV.business.dto.ToDoDto;
import TechCareerFYV.business.service.IToDoGenericService;
import TechCareerFYV.data.entity.ToDoEntity;
import TechCareerFYV.data.repository.IToDoRepository;
import TechCareerFYV.exception.ResourceNotFoundException;
import io.swagger.v3.oas.annotations.servers.Server;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.rmi.NotBoundException;
import java.util.ArrayList;
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

        return modalMapperBean.modelMapperMethod().map(toDoEntity, ToDoDto.class);//sen bana entity ver ben sana tododto veriyim.
    }
    @Override
    public ToDoEntity DtoToEntity(ToDoDto toDoDto) {

        return modalMapperBean.modelMapperMethod().map(toDoDto, ToDoEntity.class);//sen bana dto ver ben sana entity vereyim.
    }
    //###########Crud#########///
    //Create
    @Transactional //Create, Delete, Update
    @Override
    public ToDoDto todoServiceCreate(ToDoDto toDoDto) {
        if (toDoDto!=null){
            //kayit
            ToDoEntity toDoEntityModelSaver=DtoToEntity(toDoDto);
            ToDoEntity toDoEntity= iToDoRepository.save(toDoEntityModelSaver);
            //kaydettikten sonra
            toDoDto.setId(toDoEntity.getId());
            toDoDto.setSystemDate(toDoDto.getSystemDate());
        } else if (toDoDto==null) {
            throw new NotFoundException("ToDoDto does not exist");
        }
        return toDoDto;
    }
    //List
    @Override
    public List<ToDoDto> todoServiceList() {
        //elemanlarin sirali gecisini sagla
        Iterable<ToDoEntity> toDoEntityIterable=iToDoRepository.findAll();
        List<ToDoDto> list = new ArrayList<>();
        //her bir elemana for ile eris
        for (ToDoEntity entity: toDoEntityIterable){
            ToDoDto toDoDto = EntityToDto(entity);
            list.add(toDoDto);
        }
        //listi dondur
        return list;
    }
    //Find
    @Override
    public ToDoDto todoServiceFindById(Long id) {
        ToDoEntity toDoEntity=null;
        if (id!=null){
             toDoEntity= iToDoRepository.findById(id).orElseThrow(
                    ()->{
                        return new ResourceNotFoundException((id+ "nolu id bulunamadi"));
                    }
            );//optional istedigi icin orElseThrow() from optional lib. eklemesi yaptik
            //orElseThrow()-> veri varsa veriyi yoksa belirledigim throwu gonder
        }else if (id==null){
            throw new NotFoundException(id+" ToDoDto is null");
        }

        return EntityToDto(toDoEntity);
    }
    //Delete
    @Transactional //Create, Delete, Update
    @Override
    public ToDoDto todoServiceDeleteById(Long id) {
        //todoServiceFindById(Long id)->ilgili id yi yazdigimizda bize id donduruyor
         ToDoDto toDoDtoFindForDelete= todoServiceFindById(id);
         ToDoEntity toDoEntity =DtoToEntity(toDoDtoFindForDelete);
         iToDoRepository.delete(toDoEntity);
        return toDoDtoFindForDelete;
    }
    //Update
    @Transactional //Create, Delete, Update
    @Override
    public ToDoDto todoServiceUpdateById(Long id) {
        ToDoDto todoDtoFindForUpdate= todoServiceFindById(id);
        ToDoEntity toDoEntity =DtoToEntity(todoDtoFindForUpdate);
        if (toDoEntity!=null){
            toDoEntity.setId(todoDtoFindForUpdate.getId());
            toDoEntity.setHeader(todoDtoFindForUpdate.getHeader());
            toDoEntity.setContent(todoDtoFindForUpdate.getContent());
            iToDoRepository.save(toDoEntity);
            todoDtoFindForUpdate.setId(toDoEntity.getId());
            todoDtoFindForUpdate.setSystemDate(todoDtoFindForUpdate.getSystemDate());
        }
        return todoDtoFindForUpdate;
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