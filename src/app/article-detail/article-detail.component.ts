import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})


export class ArticleDetailComponent implements OnInit { 
  article :Article[] = []
  isLoadingResults = true;

  constructor(private api:ArticleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getArticleDetails(this.route.snapshot.params['id']);
  }
   

  getArticleDetails(id: any) {
    this.api.getArticle(id)
      .subscribe((data: any) => {
        this.article = data;
        this.isLoadingResults = false;
      });
  }

  
  deleteArticle(id: any) {
    this.isLoadingResults = true;
    this.api.deleteArticle(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/articles']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }



}
