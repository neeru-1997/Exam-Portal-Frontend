import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories = [
    {
      cId: 23,
      title: 'Programmming',
    },
    {
      cId: 23,
      title: 'Programmming',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
