import { Component, OnInit } from '@angular/core';


export class Todo {
  constructor(
    public id: number,
    public description: String,
    public isDone: boolean
  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  todos = [
    new Todo(1, 'Learn Angular', false),
    new Todo(2, 'Learn Spring Boot', true),
    new Todo(3, 'Visit Places', false)
  ]

  // todos = [
  //   {id: 1, description: 'Learn Angular'},
  //   {id: 2, description: 'Learn Spring Boot'},
  //   {id: 3, description: 'Visit Places'}
  // ]

  ngOnInit(): void {
  }

}
