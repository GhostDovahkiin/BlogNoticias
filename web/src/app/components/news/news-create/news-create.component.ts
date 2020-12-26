import * as moment from 'moment';
import { Router } from '@angular/router';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {
  news: News = {
    authorId: 2,
    date: moment().format('L'),
    hour: moment().format('LT'),
    categoryId: 2,
    title: 'Axios - um cliente HTTP Full Stack',
    description:
      'Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js. É um projeto open source, disponível no Github, tem 77 mil stars e 7 mil forks! Muito utilizado e está sendo bem mantido pela comunidade.'
  };

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    //
  }

  createNews(): void {
    this.newsService.create(this.news).subscribe(() => {
      this.newsService.showMessage('Nova notícia cadastrada!');
      this.router.navigate(['/news']);
    });
  }

  cancel(): void {
    this.router.navigate(['/news']);
  }
}
