import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }
  getDetails(){
    return [
    {name:'Sravan',Id:12},
    {name:'Rahil',Id:30},
    {name:'Giri',Id:15},
    {name:'Naveen',Id:37},
    {name:'Rikshith',Id:17},
    {name:'Vamshi',Id:1},
    {name:'Hrishikesh',Id:32},
    {name:'Praneeth',Id:5},
    {name:'Vishal',Id:2},
    {name:'Tharun',Id:23}
    ];
  }
}
