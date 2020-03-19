import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {Todo, TodosService} from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private todoService: TodosService) {}
  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    this.loading = true;
    this.todoService.addTodo({
      title: this.todoTitle,
      completed: false
    }).subscribe(todo => {
        this.todos.push(todo);
        this.todoTitle = '';
        this.loading = false;
      });
  }

  fetchTodos() {
    this.loading = true;
    this.todoService.fetchTodos()
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      });
  }

  removeTodo(id: number) {
    this.loading = true;
    this.todoService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.loading = false;
      });
  }
}
