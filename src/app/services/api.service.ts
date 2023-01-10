import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UpdateRestaurantComponent } from '../update-restaurant/update-restaurant.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //variable

  search = new BehaviorSubject("")
 
  //dependancy injection

  constructor(private api:HttpClient) { }

  //userdefined function

  //to get all restaurant list api call-

  getRestaurantsList(){
    //use http request get - make api call to http://localhost:3000/restaurants
    //get() - HttpClient class - HttpClientModule library
    return this.api.get('http://localhost:3000/restaurants')
  }

  //2. get a single restaurant detail from api

  viewRestaurant(restId:any){
    return this.api.get('http://localhost:3000/restaurants/'+restId)
  }

  //3. to add new restaurant details
  addRestaurant(newRestaurant:any){
    return this.api.post('http://localhost:3000/restaurants/',newRestaurant)
  }

    //4 to update particular restaurant
    updateRestaurant(restId:any,updatedrestId:any){
      return this.api.put('http://localhost:3000/restaurants/'+restId,updatedrestId)
    }

    //5. delete restaurant
    deleteRestaurant(restId:any){
      return this.api.delete('http://localhost:3000/restaurants/'+restId)
    }

}

