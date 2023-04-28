import { ChartService } from './../chart-service';
import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 title:any='';
  backgroundColor=["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"]
  constructor(private chartService:ChartService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      console.log(param)
      this.title=param['title'];
      console.log(this.title)
    })
    this.getChartData();
  
  }



  getChartData(){
    this.chartService.getChartData().subscribe(data=>{
      var countData=[];
      var labelData=[];
      console.log(data)
      if(data != null){
       
        for(let i=0; i<data.length; i++){
          labelData.push(data[i].label)
          countData.push(data[i].count)
         } 
         if(this.title =='pieChart'){
          this.RenderChart(labelData,countData,this.backgroundColor,'pie','pieChart');
         }
         if(this.title =='barChart'){

         } this.RenderChart(labelData,countData,this.backgroundColor,'bar','barChart');
          
        
    }}
    
)

}


RenderChart(labeldata:any,maindata:any,colordata:any,type:any,id:any) {
  const myChart = new Chart(id, {
    type: type,
    data: {
      labels: labeldata,
      datasets: [{
        label: 'Nil',
        data: maindata,
        backgroundColor: colordata,
        borderColor: [
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  


}

}
