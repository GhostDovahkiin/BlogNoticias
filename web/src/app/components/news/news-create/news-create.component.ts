import { Router } from '@angular/router';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {
  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    //
  }

  createNews(): void {
    this.newsService.showMessage('Nova notícia cadastrada!');
  }

  cancel(): void {
    this.router.navigate(['/news']);
  }
}
