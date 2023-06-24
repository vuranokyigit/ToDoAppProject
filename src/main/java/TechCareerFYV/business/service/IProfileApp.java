package TechCareerFYV.business.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface IProfileApp {

    // Add all data
    public String speedDataService();


    //Delete all data
    public String allDeleteService();


    //App info
    public String appInformationService(HttpServletRequest request, HttpServletResponse response);

}
