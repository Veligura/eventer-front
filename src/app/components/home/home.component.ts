import { Component, OnInit } from '@angular/core';
import CONST from '../../constants/constants';
import {ActivatedRoute} from '@angular/router'
import {Event, Member, Author} from '../../models/models';
import {EventService} from '../../services/event.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EventService]
 })
export class HomeComponent implements OnInit {
 event: any={};
 editable: boolean= true;

 constructor(
   private router: ActivatedRoute,
   private getService: EventService
   )
 
 {
    router.params.subscribe(parmas=>console.log(parmas))
  }

  ngOnInit() {

  }


  
  userForm(event){
    this.event= event;
    this.editable=false;
    this.getService.get(event)
    
}
edit(){
  this.editable=true;
}

}
