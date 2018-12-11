import { Component } from '@angular/core';
import { DetailsService } from 'src/app/details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  details= [];
  temp=false;

    constructor(private detailsService : DetailsService ){}

getdetails(){
  this.details=this.detailsService.getDetails();
  this.temp=true;
}

}
