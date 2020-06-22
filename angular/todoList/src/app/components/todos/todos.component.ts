import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  // Use to import servises
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {this.todos = todos});
  }

  deleteTodo(todo:Todo) {
    // return all the todos that dont have the delete todo id on UI
    this.todos = this.todos.filter(t => t.id != todo.id);
    // service
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    
    // service
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    });
  }

}
