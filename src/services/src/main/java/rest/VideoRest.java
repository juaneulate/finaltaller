package rest;


import dao.VideoDao;
import entity.VideoEntity;
import lombok.extern.jbosslog.JBossLog;
import rest.configuration.path.RestPath;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.Serializable;
import java.util.List;

@Path(RestPath.REST_VIDEO)
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
@JBossLog
public class VideoRest implements Serializable {


    @Inject
    private VideoDao videoDao;

    @GET
    @Path(RestPath.LIST)
    public Response restGetVideoList(@QueryParam(RestPath.CHAPTER) int chapter) {
        try {
            List<VideoEntity> courseListFree = videoDao.findAllByChapterId(chapter);
            return Response.ok(courseListFree).build();
        } catch (Exception e) {
            // log.error(e);
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(e.getMessage()).build();
        }
    }


}
