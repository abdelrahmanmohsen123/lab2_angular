import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrls: ['./my-second-component.component.css']
})
export class MySecondComponentComponent {
  // @Input('message') newMessage?:String
  // @Output('alert') newAlert = new EventEmitter<String>()
  

  constructor(){
    // this.newAlert.emit('hello alert')
  }
}
