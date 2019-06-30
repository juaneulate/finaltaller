import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { BaseService } from '../base/base.service';
var CursosService = /** @class */ (function (_super) {
    tslib_1.__extends(CursosService, _super);
    function CursosService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.videos = [
            { code: 1, url: 'https://www.youtube.com/embed/PivCddhY_Io', id: 'PivCddhY_Io' },
            { code: 2, url: 'https://www.youtube.com/embed/I7cyVg90J0I', id: 'I7cyVg90J0I' },
            { code: 3, url: 'https://www.youtube.com/embed/QrX-rZ-M3bQ', id: 'QrX-rZ-M3bQ' },
            { code: 4, url: 'https://www.youtube.com/embed/-JRR_rAmgmo', id: '-JRR_rAmgmo' },
            { code: 5, url: 'https://www.youtube.com/embed/ZV3nwLDvf1U', id: 'ZV3nwLDvf1U' },
            { code: 6, url: 'https://www.youtube.com/embed/aBHLZWY7bDs', id: 'aBHLZWY7bDs' },
            { code: 7, url: 'https://www.youtube.com/embed/fPirRGYxYDQ', id: 'fPirRGYxYDQ' },
            { code: 8, url: 'https://www.youtube.com/embed/LdF2RcelRg0', id: 'LdF2RcelRg0' },
            { code: 9, url: 'https://www.youtube.com/embed/ZMKJApsjLpw', id: 'ZMKJApsjLpw' },
        ];
        _this.controllerUrl = 'course/';
        return _this;
    }
    CursosService.prototype.getVideo = function (id) {
        var result;
        this.videos.forEach(function (video) {
            if (video.code === id) {
                result = video;
            }
        });
        return result;
    };
    CursosService.prototype.getRecomendados = function (office, RRSS, navegador, email) {
        // Initialize Params Object
        var params = {
            office: office,
            RRSS: RRSS,
            navegador: navegador,
            email: email
        };
        return this.http.get(this.getFullUrl() + 'get-student', params, {});
    };
    CursosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HTTP])
    ], CursosService);
    return CursosService;
}(BaseService));
export { CursosService };
//# sourceMappingURL=cursos.service.js.map