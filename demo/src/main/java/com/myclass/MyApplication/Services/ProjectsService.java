package com.myclass.MyApplication.Services;

import com.myclass.MyApplication.Domain.Project;
import com.myclass.MyApplication.Repository.ProjectsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectsService {

    private final Logger log = LoggerFactory.getLogger(ProjectsService.class);

    @Autowired
    public ProjectsRepository pr;

//    //public ProjectsService(ProjectsRepository projectsRepository) {
//        this.pr = projectsRepository;
//    }

    public List<Project> getAll(){
        try {
            List<Project> projects = pr.findAll();
//            List<Project> projects = pr.getAllProjects();
//            log.info(projects.toString());
            return projects;
        } catch (Exception e) {
            System.err.println("An error occurred while fetching projects: " + e.getMessage());
            return null;
        }
    }

    public boolean addProject(String pname, String imageId, String description, String link)
    {

        try{
            //pr.save(p);
            Project project = new Project();
            project.setName(pname);
            project.setImageID(imageId);
            project.setDesc(description);
            project.setLink(link);
            pr.save(project);

           // pr.add( p.getName(),p.getImageID() );
        }
        catch(Exception e){
            e.printStackTrace();
            return false;
        }

        return true;

    }
}
