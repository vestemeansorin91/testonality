import { Answer } from './answer';

export interface Question {
    question: string;
    options: Answer[];
}