package rest;


import com.google.gson.reflect.TypeToken;
import dao.LoginDao;
import dao.StudentDao;
import dto.StudentLoginDto;
import entity.LoginEntity;
import entity.ProgressEntity;
import entity.StudentEntity;
import lombok.extern.jbosslog.JBossLog;
import rest.configuration.path.RestPath;
import utils.JsonUtil;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.Serializable;
import java.util.Optional;

@Path(RestPath.REST_LOGIN)
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
@JBossLog
public class StudentRest implements Serializable {


    @Inject
    private StudentDao studentDao;

    @GET
    @Path(RestPath.SAVE)
    public Response restValidateLogin(String jsonBody) {
        try {
            System.out.println("jsonLogin: "+jsonBody);
            LoginEntity loginEntity = getLoginEntity(jsonBody, true);
            studentDao.persist(loginEntity);
            return Response.ok(true).build();
        } catch (Exception e) {
            // log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }




    public LoginEntity getLoginEntity(String jsonBody, boolean b) {
        TypeToken<StudentLoginDto> typeToken = new TypeToken<StudentLoginDto>() {};
        StudentLoginDto studentLoginDto = JsonUtil.fromJson(jsonBody, typeToken);
        StudentEntity studentEntity = StudentEntity.build(studentLoginDto.getFullname(), studentLoginDto.getAge());
        return LoginEntity.build(studentLoginDto.getLogin(), studentLoginDto.getPassword(), studentEntity);
    }
}
