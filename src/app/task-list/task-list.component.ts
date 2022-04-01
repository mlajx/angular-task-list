import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskInput = '';
  taskList: Array<String> = [];

  constructor() {
  }

  addItem() {
    if (!this.taskInput.trim().length) {
      return;
    }

    this.taskList.push(this.taskInput);
    this.taskInput = '';
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  removeItem(index: number) {
    this.taskList.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  clearItems() {
    this.taskList = [];
    this.taskInput = '';
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  ngOnInit(): void {
    this.taskList = JSON.parse(localStorage.getItem('taskList') ?? '');
  }

}
