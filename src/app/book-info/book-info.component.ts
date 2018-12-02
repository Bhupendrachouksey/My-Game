import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  bookData:any;

  constructor() { }

  ngOnInit() {
    this.bookData= JSON.parse(sessionStorage.getItem("bookDetails"));
    console.log(this.bookData)
  }

}
