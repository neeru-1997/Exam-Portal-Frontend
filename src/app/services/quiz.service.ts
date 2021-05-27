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
}
