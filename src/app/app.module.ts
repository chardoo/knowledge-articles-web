import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CLoginComponent } from './c-login/c-login.component';
import { ArticlesComponent } from './articles/articles.component';
import {LoggedInGuard} from './logged-in.guard'
import {AuthServiceService} from './auth-service.service';
import { ArticleFormComponent } from './article-form/article-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import{MatFormFieldModule} from '@angular/material/form-field';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from './logout/logout.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    CLoginComponent,
    ArticlesComponent,
    ArticleFormComponent,
    ArticleDetailComponent,
    LogoutComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NgbModule
  ],
  providers: [AuthServiceService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
