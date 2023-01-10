import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  id:any;
  neighbourhood:any;
  photograph:any;
  Monday:any;
  Tuesday:any;
  Wednesday:any;
  Thursday:any;
  Friday:any;
  Saturday:any;
  Sunday:any;
  RestaurantName:any;
  rAddress:any;
  rCusine:any;
  rvname:any;
  date:any;
  rating:any;
  comments:any;
  lat:any;
  lng:any;

  
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  addProduct(){

    let newRestaurant = {
      id:this.id,
      name:this.RestaurantName,
      neighborhood: this.neighbourhood,
      photograph: this.photograph,
      address: this.rAddress,
      latlng: {
        lat:this.lat,
        lng: this.lng
      },
      cuisine_type: this.rCusine,
      operating_hours: {
        Monday: this.Monday,
        Tuesday: this.Tuesday,
        Wednesday: this.Wednesday,
        Thursday: this.Thursday,
        Friday: this.Friday,
        Saturday: this.Saturday,
        Sunday: this.Sunday
      },
      reviews:[
        {
          name:this.rvname,
          date:this.date,
          rating:this.rating,
          comments: this.comments
        }
      ]
    }
    console.log(newRestaurant);
    this.api.addRestaurant(newRestaurant)
    .subscribe(()=>{
      alert('Restaurant details added successfully')
      this.router.navigateByUrl('')
    })
    

  }

}
