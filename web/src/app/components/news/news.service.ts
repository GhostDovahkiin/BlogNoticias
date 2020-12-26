import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = 'http://localhost:3001';

  constructor(private snackbar: MatSnackBar, private httpClient: HttpClient) {
    //
  }

  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(news: News): Observable<News> {
    return this.httpClient.post<News>(this.baseUrl + '/news', news);
  }
}
