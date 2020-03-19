import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    this.loading = true;
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    };
    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        this.todos.push(todo);
        this.todoTitle = '';
        this.loading = false;
      });
  }

  fetchTodos() {
    this.loading = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      });
  }

  removeTodo(id: number) {
    this.loading = true;
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.loading = false;
      });
  }
}
