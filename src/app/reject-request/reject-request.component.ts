import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Constants } from '../constants/constants';
import { LoaderService } from '../loader/loader.service';
import { TenantService } from '../services/tenant.service';

@Component({
  selector: 'app-reject-request',
  templateUrl: './reject-request.component.html',
  styleUrls: ['./reject-request.component.scss']
})
export class RejectRequestComponent implements OnInit, AfterViewInit {

  dataSource: any;
  displayedColumns: any;
  filterFormControl: any = new FormControl('', []);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  constants = Constants;

  constructor(private loaderService: LoaderService, private router: Router, private tenantService: TenantService) { }

  ngOnInit(): void {
    this.displayedColumns = ['firstName', 'lastName', 'mobileNo', 'emailId', 'orgName'];
    this.dataSource = new MatTableDataSource(this.tenantService.rejectedRequestList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goBackToHome() {
    this.router.navigate(['/dashboard']);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setTimeout(() => {
      this.loaderService.isLoading.next(false);
    }, 0);
  }

}
