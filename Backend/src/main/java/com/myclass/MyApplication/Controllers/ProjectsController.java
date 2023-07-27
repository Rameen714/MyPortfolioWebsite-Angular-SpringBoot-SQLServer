package com.myclass.MyApplication.Controllers;

import com.myclass.MyApplication.Domain.Project;
import com.myclass.MyApplication.Services.ProjectsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:4200"},methods = {RequestMethod.GET,RequestMethod.POST})

@RestController
@RequestMapping("/api/")
public class ProjectsController {

    private final Logger log = LoggerFactory.getLogger(ProjectsController.class);

    private final ProjectsService ps;

    public ProjectsController(ProjectsService ps){
        this.ps = ps;
    }


    @GetMapping("/projects")
    public Map<String, Object> getAllProjects(){

        Map<String, Object> resp = new HashMap<>();
        List<Project> allprojects = ps.getAll();
        for(Project p : allprojects){
            if(p.getImageID() != null)
            {
                byte[] decodedImageData = Base64.getDecoder().decode(p.getImageID());
                p.setImg(decodedImageData);

            }
        }

        resp.put("project", allprojects);
        return resp;
    }

    @PostMapping("/add")
    public boolean addProject(@RequestParam String pname, @RequestParam MultipartFile imageid, @RequestParam String desc, @RequestParam String link){

        log.error(pname + ' ' + imageid + ' ' + desc + ' ' + link);
        boolean result = false;
        try{
            byte[] imgbytes = imageid.getBytes();
            String base64Image = Base64.getEncoder().encodeToString(imgbytes);


            result = ps.addProject(pname, base64Image, desc,link);
        }
        catch(Exception e){
            e.printStackTrace();
        }

        return result;

    }
}
