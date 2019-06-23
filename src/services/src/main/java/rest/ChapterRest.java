package rest;


import dao.ChapterDao;
import entity.ChapterEntity;
import entity.CourseEntity;
import lombok.extern.jbosslog.JBossLog;
import rest.configuration.path.RestPath;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.Serializable;
import java.util.List;

@Path(RestPath.REST_CHAPTER)
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
@JBossLog
public class ChapterRest implements Serializable {


    @Inject
    private ChapterDao chapterDao;

    @GET
    @Path(RestPath.LIST)
    public Response restGetCharperList(@QueryParam(RestPath.COURSE) int course) {
        try {
            List<ChapterEntity> chapterEntityList = chapterDao.findAllByCourseId(course);
            return Response.ok(chapterEntityList).build();
        } catch (Exception e) {
            // log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }


}
