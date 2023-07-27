package com.myclass.MyApplication.Domain;

import jakarta.persistence.*;

@Entity
@Table(name= "project_table")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    Long id;

    @Column(name = "PName")
    String Name;

    @Column(name = "ImageID")
    String ImageID;

    @Column(name = "Description")
    String Desc;

    @Column(name = "Link")
    String Link;

    @Column(name = "img")
    byte[] img;

    public byte[] getImg() {
        return img;
    }

    public void setImg(byte[] img) {
        this.img = img;
    }

    public String getDesc() {
        return Desc;
    }

    public void setDesc(String desc) {
        Desc = desc;
    }

    public String getLink() {
        return Link;
    }


    public void setLink(String link) {
        Link = link;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getImageID() {
        return ImageID;
    }

    public void setImageID(String imageID) {
        ImageID = imageID;
    }
}
