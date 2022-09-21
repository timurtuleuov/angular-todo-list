import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: string[] = [''];
  isAdd = false;
  isDel = false;
  constructor() { }
   }
  openAdd(){
    this.isAdd = !this.isAdd;
  }
  openDel(){
    this.isDel = !this.isDel;
  }
  
  ngOnInit(){
    this.todoList = ['помыть кошачьи миски'];
  }
  todoAdd(opt: string){
    this.todoList.unshift(opt);
    return false;
  }
  todoDel(opt: string){
    for (let i =0; i<this.todoList.length; i++){
        if (this.todoList[i] == opt){
          this.todoList.splice(i, 1);
          break;
        }
    }
  }
}
