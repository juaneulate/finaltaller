import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { FirstTimeGuard } from './guards/firstTime/first-time.guard';
var routes = [
    { path: '', redirectTo: 'base', pathMatch: 'full' },
    { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
    { path: 'base', loadChildren: './pages/base/base/base.module#BasePageModule', canActivate: [FirstTimeGuard, AuthGuard] },
    { path: 'tutorial', loadChildren: './pages/slider/main/main.module#MainSliderPageModule' },
    { path: 'questions', loadChildren: './pages/base/questions/questions/questions.module#QuestionsPageModule' },
    { path: 'logout', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './pages/register/register/register.module#RegisterPageModule' },
    { path: 'course', loadChildren: './pages/base/course/detail/course.detail.module#CourseDetailPageModule' },
    { path: 'temario', loadChildren: './pages/base/temario/temario/temario.module#TemarioPageModule' },
    { path: 'cursos', loadChildren: './pages/base/curso/curso/curso.module#CursoPageModule' },
    { path: 'acercade', loadChildren: './pages/base/temario/acercade/acercade/acercade.module#AcercadePageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map