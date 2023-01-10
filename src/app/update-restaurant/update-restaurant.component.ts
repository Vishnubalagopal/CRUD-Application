import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {

  restId:any;
  restDetails:any;
  constructor( private activatedRoute:ActivatedRoute,private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((result:any)=>{
      this.restId = result['id']
      console.log(this.restId);      
    })
    //2. fetch details of restaurant id
    this.apiService.viewRestaurant(this.restId)
    .subscribe((result)=>{
      this.restDetails = result
      console.log( this.restDetails);
      
      
    })
  }

  //update restaurant

  updateRestaurant(form:any){
   
    let updateRestDetails = {
      id:form.value.id,
      name:form.value.rName,
      neighborhood: form.value.neighbourhood,
      photograph: form.value.photograph,
      address: form.value.rAddress,
      latlng: {
        lat:form.value.lat,
        lng: form.value.lng
      },
      cuisine_type: form.value.rCusine,
      operating_hours: {
        Monday: form.value.Monday,
        Tuesday: form.value.Tuesday,
        Wednesday: form.value.Wednesday,
        Thursday: form.value.Thursday,
        Friday: form.value.Friday,
        Saturday: form.value.Saturday,
        Sunday: form.value.Sunday
      },
      reviews:[
        {
          name:form.value.rvname,
          date:form.value.date,
          rating:form.value.rating,
          comments:form.value.comments
        }
      ]

    }

    console.log(updateRestDetails);
    
    this.apiService.updateRestaurant(this.restId,updateRestDetails)
    .subscribe((data)=>{
      alert('Updated Successfully')
      this.router.navigateByUrl('')
      
      
    })
    
  }

}
