import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private httpClient: HttpClient) {}

  public getAllQuizzes() {
    return this.httpClient.get(`${baseUrl}/quiz/`);
  }

  //add quiz
  public addQuiz(quiz) {
    return this.httpClient.post(`${baseUrl}/quiz/`, quiz);
  }

  //delete quiz
  public deleteQuiz(qId) {
    return this.httpClient.delete(`${baseUrl}/quiz/${qId}`);
  }

  //get a single quiz
  public getQuiz(qId) {
    return this.httpClient.get(`${baseUrl}/quiz/${qId}`);
  }

  //update quiz
  public updateQuiz(quiz) {
    return this.httpClient.put(`${baseUrl}/quiz/`, quiz);
  }
}
