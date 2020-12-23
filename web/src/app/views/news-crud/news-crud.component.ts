import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-crud',
  templateUrl: './news-crud.component.html',
  styleUrls: ['./news-crud.component.css']
})
export class NewsCrudComponent implements OnInit {
  constructor(private router: Router) {
    //
  }

  ngOnInit(): void {
    //
  }

  navigateToNewsCreate(): void {
    this.router.navigate(['/news/create']);
  }
}
