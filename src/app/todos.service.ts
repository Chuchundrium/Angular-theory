import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({providedIn: 'root'})
export class TodosService {
  constructor(private http: HttpClient) {}

  addTodo(newTodo: Todo): Observable<Todo> {
    const headers = new HttpHeaders({
      CustomHeader3: Math.random().toString(),
      CustomHeader4: '157'
    });
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo, {
      /* headers: new HttpHeaders({
         CustomHeader1: Math.random().toString(),
         CustomHeader2: '157'
       }), */
      headers,
    });
  }

  /* in url: data after ? (ex.: _limit=2) - this is query parameters
   instead of this:
                   'params: new HttpParams().set('_limit', '3')'
   or
                    let params = new HttpParams() ...
   */
  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '5');
    params = params.append('custom', 'anything');

    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      // params: new HttpParams().set('_limit', '3')
      params
    })
      .pipe(
        delay(500),
        catchError(error => {
          console.log('!!! Error: ', error.message);
          return throwError(error);
        })
      );
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    });
  }


}
