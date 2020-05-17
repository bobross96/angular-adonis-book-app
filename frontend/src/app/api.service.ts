import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Book } from './book';



//for post 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

// connection to backend is done via proxy
const apiUrl = "/api/books";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  book : Book
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //read more on rxjs library for this part (pipe and other shit)
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(apiUrl)
      .pipe(
        tap(() => console.log('fetched books')),
        catchError(this.handleError('getBooks', []))
      );
  }

  getBook(id : number): Observable<Book> {
    const url = `${apiUrl}/${id}`
    return this.http.get<Book>(url)
      .pipe(
        tap(() => console.log('fetched book')),
        catchError(this.handleError<Book>(`getBook id=${id}`))
      )
  }

  addBook(book : Book) : Observable<Book> {
    return this.http.post<Book>(apiUrl,book,httpOptions)
      .pipe(
        tap((book : Book) => console.log(`added book ${book.title}`)),
        catchError(this.handleError<Book>('addBook'))
      )
  }

  updateBook(book : Book, id : number) : Observable<Book> {
    const url = `${apiUrl}/${id}`
    return this.http.patch<Book>(url,book,httpOptions)
    .pipe(
      tap((book : Book) => console.log(`added book ${book.title}`)),
      catchError(this.handleError<Book>('updateBook'))
    )
  }

  deleteBook(id : number) : Observable<Book> {
    const url = `${apiUrl}/${id}`
    return this.http.delete<Book>(url)
    .pipe(
      tap(() => console.log('deleted book')),
      catchError(this.handleError<Book>('deleteBook'))
    )
  }









  constructor( private http : HttpClient) { }
}



