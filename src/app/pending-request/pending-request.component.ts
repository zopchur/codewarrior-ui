import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { TaskApproveDialogComponent } from './task-approve-dialog/task-approve-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Constants } from '../constants/constants';
import { TenantService } from '../services/tenant.service';

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.scss']
})
export class PendingRequestComponent implements OnInit, AfterViewInit {
  dataSource: any;
  displayedColumns: any;
  filterFormControl: any = new FormControl('', []);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  constants = Constants;

  constructor(private loaderService: LoaderService, public dialog: MatDialog, private router: Router,
    private tenantService: TenantService) { }

  ngOnInit(): void {
    this.displayedColumns = ['firstName', 'lastName', 'mobileNo', 'emailId', 'orgName', 'action'];
    this.dataSource = new MatTableDataSource(this.tenantService.pendingRequestList);
  }

  reviewRequest(row: any) {
    const dialogRef = this.dialog.open(TaskApproveDialogComponent, {
      data: row,
      width: '500px',
      height: '436px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result === 'approve' || result === 'reject') {
        this.tenantService.getTenant().subscribe((response: any) => {
          this.dataSource = new MatTableDataSource(this.tenantService.pendingRequestList);
        });

      }
    });

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
