import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import{Article}  from '../article.model'
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  
  articleForm: FormGroup;
  _id = '';
  myid = '';
  articleId = '';
  intentId = '';
  summary = '' ;
  description = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private route: ActivatedRoute, private api: ArticleService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getArticle(this.route.snapshot.params['id']);
    this.articleForm = this.formBuilder.group({
      'articleId' : [null, Validators.required],
      'intentId' : [null, Validators.required],
      'summary' : [null, Validators.required],
      'description' : [null, Validators.required]
    });
  }

  getArticle(id:any){
    this.api.getArticle(id).subscribe((data: any) => {
      for(data of data){
        this.myid = data.articleId
        this._id = data._id;
        this.articleForm.setValue({
        articleId: data.articleId,
        intentId: data.intentId,
        summary: data.summary,
        description: data.description,
        
      });
    }
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.updateArticle(this._id, this.articleForm.value)
      .subscribe((res: any) => {
          const id = res.articleId;
          this.isLoadingResults = false;
          this.router.navigate(['/articles']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }



  articleDetails() {
    this.router.navigate(['/article-details/', this.myid]);
  }

}
