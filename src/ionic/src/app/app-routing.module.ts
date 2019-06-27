import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'base', loadChildren: './pages/base/base/base.module#BasePageModule' },
  { path: 'tutorial', loadChildren: './pages/slider/main/main.module#MainSliderPageModule' },
  { path: 'logout', loadChildren: './pages/slider/main/main.module#MainSliderPageModule' },
  { path: 'register', loadChildren: './pages/register/register/register.module#RegisterPageModule' },
  { path: 'course', loadChildren: './pages/base/course/detail/course.detail.module#CourseDetailPageModule' },
  { path: 'temario', loadChildren: './pages/base/temario/temario/temario.module#TemarioPageModule' },
  { path: 'cursos', loadChildren: './pages/base/curso/curso/curso.module#CursoPageModule' },
  { path: 'acercade', loadChildren: './pages/base/temario/acercade/acercade/acercade.module#AcercadePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
