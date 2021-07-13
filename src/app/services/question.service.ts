import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private httpClient: HttpClient) {}

  public getQuestionsOfQuiz(qid) {
    return this.httpClient.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  //add question
  public addQuestion(question) {
    return this.httpClient.post(`${baseUrl}/question/`, question);
  }

  //delete question
  public deleteQuestion(questionId){
    return this.httpClient.delete(`${baseUrl}/question/${questionId}`);
  }

  public getQuestionsOfQuizForTest(qid) {
    return this.httpClient.get(`${baseUrl}/question/quiz/${qid}`);
  }

}

