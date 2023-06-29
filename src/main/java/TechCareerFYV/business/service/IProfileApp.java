package TechCareerFYV.business.service;

import TechCareerFYV.business.dto.ToDoDto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.util.List;

public interface IProfileApp {
    // Add all data
    public List<ToDoDto> speedDataService();

    //Delete all data
    public String allDeleteService();

    //App info
    public String appInformationService(HttpServletRequest request, HttpServletResponse response);

}
