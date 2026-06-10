import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

interface BibleResult { reference: string; text: string; }
interface QuizQuestion {
  id: string;
  question: string;
  excerpt: string;
  options: string[];
  answerIndex: number;
}

@Component({
  selector: 'app-bible',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bible.component.html',
  styleUrls: ['./bible.component.scss'],
})
export class BibleComponent implements OnInit {
  query = '';
  results: BibleResult[] = [];
  classics: BibleResult[] = [];
  selected: BibleResult | null = null;
  loading = false;
  quiz: QuizQuestion[] = [];
  quizIndex = 0;
  quizScore = 0;
  quizAnswer: number | null = null;
  quizFinished = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<BibleResult[]>(`${environment.apiBase}/bible/classics`).subscribe({
      next: v => this.classics = v,
    });
  }

  search() {
    if (this.query.trim().length < 2) return;
    this.loading = true;
    this.http.get<BibleResult[]>(`${environment.apiBase}/bible/search?q=${encodeURIComponent(this.query)}`).subscribe({
      next: r => { this.results = r; this.loading = false; },
      error: () => this.loading = false,
    });
  }

  select(v: BibleResult) { this.selected = v; }
  clearSelected() { this.selected = null; }

  startQuiz() {
    this.http.get<QuizQuestion[]>(`${environment.apiBase}/bible/quiz?count=5`).subscribe({
      next: questions => {
        this.quiz = questions;
        this.quizIndex = 0;
        this.quizScore = 0;
        this.quizAnswer = null;
        this.quizFinished = false;
      },
    });
  }

  answerQuiz(index: number) {
    if (this.quizAnswer !== null) return;
    this.quizAnswer = index;
    if (index === this.quiz[this.quizIndex].answerIndex) this.quizScore++;
  }

  nextQuizQuestion() {
    if (this.quizIndex + 1 >= this.quiz.length) {
      this.quizFinished = true;
      return;
    }
    this.quizIndex++;
    this.quizAnswer = null;
  }

  closeQuiz() {
    this.quiz = [];
    this.quizFinished = false;
  }
}
