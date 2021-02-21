import { Component } from '@angular/core';
import { ExcelService } from './excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-to-excel';
  constructor(private excelService: ExcelService) {

  }
  onFileChange(event: any) {
    const fileToLoad = event.target.files[0];
    const fileReader = new FileReader();
    const self = this;
    fileReader.onload = function (fileLoadedEvent: any) {
      const textFromFileLoaded: any = fileLoadedEvent.target.result;
      const json = JSON.parse(textFromFileLoaded);
      console.log('JSON : ', json);
      self.excelService.exportAsExcelFile(json, 'Leads')
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
  }
}
