package rest;


import dao.LoginDao;
import entity.LoginEntity;
import entity.ProgressEntity;
import entity.StudentEntity;
import lombok.extern.jbosslog.JBossLog;
import rest.configuration.path.RestPath;

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
public class LoginRest implements Serializable {


    @Inject
    private LoginDao loginDao;

    @GET
    @Path(RestPath.VALIDATE)
    public Response restValidateLogin(@QueryParam(RestPath.USERNAME) String login,
                                      @QueryParam(RestPath.PASSWORD) String password) {
        try {
            Optional<LoginEntity> userEntity = loginDao.validateUser(login, password);
            return Response.ok(userEntity.isPresent()).build();
        } catch (Exception e) {
//           log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }

    @GET
    @Path(RestPath.GET_STUDENT)
    public Response getPersonByUserName(@QueryParam(RestPath.USERNAME) String login) {
        try {
            Optional<StudentEntity> studentOpt = loginDao.getStudentByUserName(login);
            if (studentOpt.isPresent()) {
                return Response.ok(studentOpt.get()).build();
            } else {
                return Response.status(Response.Status.NOT_FOUND).build();
            }
        } catch (Exception e) {
//           log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }
}
