import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    const url = 'http://localhost:8081/question/allRecentQuestion';
    return this.http.get(url);
  }
}
