import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService} from '../article.service'
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

   
  articleForm: FormGroup;
  articleId:'';
  intentId = '';
  summary = '';
  description: string = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  
  constructor(private router: Router, private route: ActivatedRoute,  private api: ArticleService, private formBuilder: FormBuilder) { }



  ngOnInit(): void {
      this.articleForm = this.formBuilder.group({
        'articleId' : [null, Validators.required],
        'intentId' : [null, Validators.required],
        'summary' : [null, Validators.required],
        'description' : [null, Validators.required]
      });

  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addArticle(this.articleForm.value)
      .subscribe((res: any) => {
          const id = res.articleId;
          this.isLoadingResults = false;
          this.router.navigate(['/article-details/', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }



}
