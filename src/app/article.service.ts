import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Article} from './article.model'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private  apiUrl = 'https://knowledge-article-app-eaemo3kxbq-uc.a.run.app/service/articles/';
  constructor(private http:HttpClient) { }
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl)
      .pipe(
        tap(article => console.log('fetched articles')),
        catchError(this.handleError('getArticles', []))
      );
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Article>(url,httpOptions).pipe(
      tap(_ => console.log(`fetched article id=${id}`)),
      catchError(this.handleError<Article>(`getArticle id=${id}`))
    );
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, article, httpOptions).pipe(
      tap((art: any) => console.log(`added article w/ id=${art._id}`)),
      catchError(this.handleError<Article>('addArticle'))
    );
  }

  updateArticle(id: any, article: Article): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, article, httpOptions).pipe(
      tap(art => console.log(`updated article id=${id}`)
      
      ),
      
      catchError(this.handleError<any>('updateArticle'))
    );
  }

  deleteArticle(id: any): Observable<Article> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Article>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted article id=${id}`)),
      catchError(this.handleError<Article>('deleteArticle'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
