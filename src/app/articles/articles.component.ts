import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  displayedColumns: string[] = ['intentId', 'summary', 'detail'];
  data: Article[] = [];
  isLoadingResults = true;

  constructor(private http:HttpClient,private api: ArticleService) { 
  
  }

  

  ngOnInit(): void {
    this.api.getArticles()
    .subscribe((res: any) => {
      this.data = res;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });


  }

}
