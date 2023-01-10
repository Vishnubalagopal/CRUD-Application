import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurantList: any[],filterString:String,propName:any): any[] {
    const result:any=[]
    if(!restaurantList || filterString=='' || propName==''){
      return restaurantList
    }

    restaurantList.forEach((restaurant:any)=>{
      if(restaurant[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(restaurant)
        
      }
      
    })

    return result
  }

}
