package rest;


import com.google.gson.reflect.TypeToken;
import dao.StudentDao;
import dto.StudentLoginDto;
import entity.LoginEntity;
import entity.StudentEntity;
import lombok.extern.jbosslog.JBossLog;
import rest.configuration.path.RestPath;
import utils.JsonUtil;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.Serializable;

@Path(RestPath.REST_STUDENT)
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
@JBossLog
public class StudentRest implements Serializable {


    @Inject
    private StudentDao studentDao;

    @POST
    @Path(RestPath.SAVE)
    public Response restSave(String jsonBody) {
        try {
            //System.out.println("jsonLogin: "+jsonBody);
            StudentEntity studentEntity = getStudentEntity(jsonBody);
            studentDao.persist(studentEntity);
            return Response.ok(true).build();
        } catch (Exception e) {
            // log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }

    public StudentEntity getStudentEntity(String jsonBody) {
        TypeToken<StudentLoginDto> typeToken = new TypeToken<StudentLoginDto>() {};
        StudentLoginDto studentLoginDto = JsonUtil.fromJson(jsonBody, typeToken);
        LoginEntity loginEntity = LoginEntity.build(studentLoginDto.getLogin(), studentLoginDto.getPassword());
        return StudentEntity.build(studentLoginDto.getFullname(), studentLoginDto.getAge(), loginEntity);
    }
}
