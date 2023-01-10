import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent implements OnInit {

  //property
  restName = 'List Of Restaurants'
  restaurantList:any = []

// to holad search term
  searchTerm = ""

 //dependency injection
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    //apiservice call - to get all restaurant list - Asynchronous function
    this.apiService.getRestaurantsList()
    .subscribe((result)=>{
      this.restaurantList = result
      console.log(this.restaurantList);
      
    } )

    //to get search term from api service
    this.apiService.search.subscribe((data)=>{
      console.log(data);
      this.searchTerm = data
      
    })
  }

}
