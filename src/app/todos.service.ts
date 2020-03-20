import {HttpClient} from '@angular/common/http';
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
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo);
  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder888.typicode.com/todos?_limit=2')
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
