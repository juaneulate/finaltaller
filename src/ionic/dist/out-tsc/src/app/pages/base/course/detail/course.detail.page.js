import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { CursosService } from 'src/app/services/cursos/cursos.service';
var CourseDetailPage = /** @class */ (function () {
    function CourseDetailPage(activatedRoute, youtube, dom, curssoService) {
        this.activatedRoute = activatedRoute;
        this.youtube = youtube;
        this.dom = dom;
        this.curssoService = curssoService;
        this.pathImages = 'assets/cursos/';
        this.section = '';
        this.details = [];
        this.showVideo = false;
        this.icon = '';
    }
    CourseDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.id = JSON.parse(params.id);
            _this.section = params.section;
            _this.details = [
                { title: _this.section + ' 1', duration: '6m54s' },
                { title: _this.section + ' 2', duration: '4m1s' },
                { title: _this.section + ' 3', duration: '6m34s' },
                { title: _this.section + ' 4', duration: '7m2s' },
                { title: _this.section + ' 5', duration: '8m35s' },
                { title: _this.section + ' 6', duration: '13m9s' },
                { title: _this.section + ' 7', duration: '52m21ss' },
                { title: _this.section + ' 8', duration: '26m9s' },
            ];
            _this.video = _this.curssoService.getVideo(_this.id);
            _this.showVideo = true;
        });
    };
    CourseDetailPage.prototype.fullScreen = function () {
        this.youtube.openVideo(this.video.id);
    };
    CourseDetailPage.prototype.secureUrl = function (url) {
        var result = this.dom.bypassSecurityTrustResourceUrl(url);
        console.log(result);
        return result;
    };
    CourseDetailPage.prototype.getVideo = function (id) {
        var resultPath = this.pathImages + '';
        switch (id) {
            case 1:
            case 5:
                resultPath += 'course_one.gif';
                break;
            case 2:
            case 6:
                resultPath += 'course_two.gif';
                break;
            case 3:
            case 7:
                resultPath += 'course_three.gif';
                break;
            case 4:
            case 8:
                resultPath += 'course_four.gif';
                break;
            default:
                resultPath += 'course_five.gif';
                break;
        }
        console.log(id);
        return resultPath;
    };
    CourseDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-course-detail',
            templateUrl: './course.detail.page.html',
            styleUrls: ['./course.detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            YoutubeVideoPlayer,
            DomSanitizer,
            CursosService])
    ], CourseDetailPage);
    return CourseDetailPage;
}());
export { CourseDetailPage };
//# sourceMappingURL=course.detail.page.js.map