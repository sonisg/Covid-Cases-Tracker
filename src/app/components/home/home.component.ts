import { Component, OnInit } from '@angular/core';
import { globalDataSummary } from 'src/app/models/globalData';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalConfirmed =0;
  totalRecovered =0;
  totalDeaths =0;
  totalActive=0;
  globalData: globalDataSummary[] = [];
  constructor(private dataService: DataServiceService) { }
  
  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe(
      {
        next: (result)=>{
          console.log(result);
          this.globalData = result;
          result.forEach(
            cs=>
            { if(!Number.isNaN(cs.confirmed)){
              this.totalActive+= cs.active;
              this.totalConfirmed+=cs.confirmed;
              this.totalRecovered+=cs.recovered;
              this.totalDeaths+=cs.deaths;
            }
                
            }
          )
        }
      }
    );
  }

}

