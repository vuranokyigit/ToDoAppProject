package TechCareerFYV.business.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IToDoGenericService <D,E> extends IProfileApp {

    //Model Mapper
    public D EntityToDto(E e);
    public E DtoToEntity(D d);

//CRUD
    //Create
    public D todoServiceCreate(D d);

    //List
    public List<D> todoServiceList();

    //Find (ben sana bi id veriyim o id ye gore bilgileri bul)
    public D todoServiceFindById(Long id);

    //Delete
    public D todoServiceDeleteById(Long id);

    // Update
    public D todoServiceUpdateById(Long id);

//Pageable
    //list pageable structure
public  List<D> todoServiceAllList();
//list page and page size
public Page<E> todoServicePagination(int currentPage, int pageSize);
//List page and pageable
public  Page<E> todoServicePagination(Pageable pageable, D d);

}
