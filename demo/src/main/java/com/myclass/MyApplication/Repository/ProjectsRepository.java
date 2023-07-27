package com.myclass.MyApplication.Repository;

import com.myclass.MyApplication.Domain.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectsRepository extends JpaRepository<Project, Long>{

   @Query(value="SELECT * FROM PROJECTTABLE",nativeQuery = true)
    List<Project> getAllProjects();



    @Query(value  = "INSERT INTO ProjectTable (pname, imageid) VALUES (?, ?)",nativeQuery = true)
    void add(@Param("PName") String PName,@Param("ImageID") String ImageID );

}
