import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {

  listPingPong :AnalyserOptions;
  count : number = 0;
  errorMessage : string;
  invalidCount = false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  doPingPong(){
    this.listPingPong = null;
    if(this.count == 0){
      this.invalidCount = true;
      this.errorMessage = 'la cantidad debe ser mayor a 0';
    }else{
      this.errorMessage = '';
      this.invalidCount = false;
      let url = environment.pingPongAction + this.count;
      this.http.get(url).subscribe(data => {
        this.listPingPong = data;
      });
    }
  }

}
