import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Question } from './../models/question';
import { map } from 'rxjs/operators'

@Injectable()
export class QuestionsService {
    constructor(private http: HttpClient) { }

    public getQuestions(): Observable<Question[]> {
        return this.http.get<{ questions: Question[] }>('/assets/questions.json').pipe(
            map(response => response.questions),
        );
    }
}