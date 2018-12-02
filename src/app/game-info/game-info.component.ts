import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  fetchBookDetails:any;
  fetchBookSpecificData:any;

  constructor(
    private apiService:ApiServiceService,
    private router:Router) { }

  ngOnInit() {
    this.apiService.getApiData("books").subscribe(data=>{
      this.fetchBookDetails= data;
      console.log(this.fetchBookDetails);
    });
  }
fetchBookInfo(selectedBook){
  this.apiService.getApiData("books/" + selectedBook).subscribe(data=>{
    this.fetchBookSpecificData= data;
    sessionStorage.setItem("bookDetails", this.fetchBookSpecificData);
    //sessionStorage.setItem("bookDetails", JSON.stringify(this.fetchBookSpecificData));
    this.router.navigate(['/book-details']);
  });
}
}
