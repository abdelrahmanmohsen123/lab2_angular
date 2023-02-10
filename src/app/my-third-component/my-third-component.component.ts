import { Component,EventEmitter,Input, Output, SimpleChange } from '@angular/core';
// import { DataService } from '../services/data.service';
@Component({
  selector: 'app-my-third-component',
  templateUrl: './my-third-component.component.html',
  styleUrls: ['./my-third-component.component.css'],
})
export class MyThirdComponentComponent {
// @Input('data') data ?:String
// @Input('test') test?: Number
// @Output('newData') newData = new EventEmitter()
// message = 'this is my message'
// dataa = {name:"name"}
// numberr = 123546.566
// myData = new Date()

// dataService = new DataService()
// constructor(private dataservices : DataService ){
//   this.newData.emit(5)
// }
ngOnInit():void{
  console.log('ngOnInit')
}
ngOnChange(changes : SimpleChange):void{
  console.log('ngOnChange',changes)
}

ngOnDestroy():void{
  console.log('ngOnDestroy')
}

// onClick(){
//   console.log(this.newData.emit(5))
// }

// getData(){
//   this.dataservices.getData()
// }

// setData(){
//   this.dataservices.setData()
// }


}
