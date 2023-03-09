import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ErrorLog } from '../error-log';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-error-log',
  templateUrl: './error-log.component.html',
  styleUrls: ['./error-log.component.scss'],
  providers:  [ ApiService ]
})
export class ErrorLogComponent implements OnInit {
  displayedColumns  :  string[] = ['id', 'ApplicationErrorLevel', 'errorMsg', 'errorStackTrace', 'IPAddress', 'Port', 'ApplicationName', 'ApplicationVersion'];
  @ViewChild(MatPaginator) paginator:any = MatPaginator;
  //dataSource : ErrorLog[] = [];
  dataSource: MatTableDataSource<ErrorLog> = new MatTableDataSource<ErrorLog>();
  errorLog : ErrorLog | undefined ; //{};
  constructor(private apiService: ApiService) { }

  public ngOnInit() {
    console.log('Subscribing to datasource...')
    this.apiService.getErrorlogs().subscribe((result)=>{   
          this.dataSource.data  =  result; //.sort(sortFn());
          this.dataSource.data.sort(sortFn());
          this.dataSource.paginator = this.paginator;
          console.log(result)
    })};
  

  selectErrorLog(errorLog: ErrorLog){
    this.errorLog = errorLog;
  }
}
function sortFn(): ((a: ErrorLog, b: ErrorLog) => number) | undefined {
  return (a, b) => {
    
    if (a.id && b.id) {
      if (a.id > b.id) {
        return -1;
      }
      if (a.id < b.id) {
        return 1;
      }
    }
    return 0;
  };
}

