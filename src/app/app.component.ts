import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  crud: Array<any>;
  displayJson: boolean;
  log: Array<any>;
  logShow: boolean;


  constructor(private _dataService: DataService) {
    this._dataService.getCrud()
      .subscribe(res => {
        this.crud = res;
        // this.crud = this.crud[0];
        console.log('new crud', this.crud);
      });
  }
  showJson() {
    this.displayJson = !this.displayJson;
  }

  addLog() {
    console.log(this.log);
  }

  logDisplay() {
    this.logShow = true;
  }

}

