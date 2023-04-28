import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:any='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  pieChart(){
   this.title ='pieChart'
   this.router.navigate(['/chart',this.title])

  }

  barChart(){
    this.title ='barChart'
    this.router.navigate(['/chart',this.title])

  }


}
