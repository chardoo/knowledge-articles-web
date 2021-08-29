import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CLoginComponent} from './c-login/c-login.component';
import {ArticlesComponent} from './articles/articles.component'
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import {ArticleEditComponent}   from './article-edit/article-edit.component'
import {LoggedInGuard} from './logged-in.guard'
const routes: Routes = [
  

  { path: 'login',
    component:CLoginComponent,
    data: { title: 'Login' },
  },

  { path: '',
    redirectTo:'/articles',
    pathMatch:'full'
   },

  {
     path: 'articles',
     component: ArticlesComponent,
     data: { title: 'Get Articles' },
     canActivate: [ LoggedInGuard ]
  },

  { path :'article-add',
    component: ArticleFormComponent,
    data: { title: 'Add Articles' },
    canActivate: [ LoggedInGuard],
  },

  { path :'article-details/:id',   
  component: ArticleDetailComponent,
  data: { title: 'Article Details' },
  canActivate: [ LoggedInGuard],
  },
  {
    path: 'article-edit/:id',
    component: ArticleEditComponent,
    data: { title: 'Edit Article' },
    canActivate:[LoggedInGuard]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
