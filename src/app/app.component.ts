import { Component, OnInit } from '@angular/core';
import { MarvellousService } from './marvellous.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  batchDetails : any;
  msg : any;

  constructor(private obj : MarvellousService)
  {

  }

  ngOnInit() // implements OnInit interface
  {
     
  }

  getData()
  {
    this.obj.getBatches().subscribe(data => {
      this.batchDetails = data;
    });
  }
}
