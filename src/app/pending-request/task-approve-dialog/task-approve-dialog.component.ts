import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import { MatSnackBar } from '@angular/material/snack-bar';
import { TenantService } from 'src/app/services/tenant.service';

@Component({
  selector: 'app-task-approve-dialog',
  templateUrl: './task-approve-dialog.component.html',
  styleUrls: ['./task-approve-dialog.component.scss']
})
export class TaskApproveDialogComponent implements OnInit {

  dataSource: any[] = [];
  displayedColumns: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<TaskApproveDialogComponent>,
    public datepipe: DatePipe, private _snackBar: MatSnackBar, private tenantService: TenantService) { }

  ngOnInit(): void {
    ['firstName', 'lastName', 'mobileNo', 'emailId', 'orgName', 'action'];
    this.displayedColumns = ['label', 'value'];
    for (let i in this.data) {
      let obj;
      switch (i) {
        case 'firstName':
          obj = {
            label: 'First Name', value: this.data[i]
          };
          break
        case 'lastName':
          obj = {
            label: 'Last Name', value: this.data[i]
          };
          break;
        case 'mobileNo':
          obj = {
            label: 'Mobile No.', value: this.data[i]
          };
          break;
        case 'emailId':
          obj = {
            label: 'Email Id', value: this.data[i]
          }
          break;
        case 'orgName':
          obj = {
            label: 'Organization Name', value: this.data[i]
          }
          break;
      }
      if (obj)
        this.dataSource.push(obj);
    }
  }

  reject() {
    this.tenantService.rejectRequest(this.data.orgName).subscribe({
      next: (success) => {
        if (success) {
          let snackBarRef = this._snackBar.open('Request rejected successfully.', 'Close', {
            duration: 3000
          });
        } else {
          let snackBarRef = this._snackBar.open('There is something went wrong. Please try after sometime', 'Close', {
            duration: 3000
          });
        }
        this.dialogRef.close('reject');
      },
      error: (error) => {
        let snackBarRef = this._snackBar.open('There is something went wrong. Please try after sometime', 'Close', {
          duration: 3000
        });
        this.dialogRef.close();
      }
    });
  }

  approve() {
    this.tenantService.approveRequest(this.data).subscribe({
      next: (success) => {
        if (success) {
          let snackBarRef = this._snackBar.open('Request approved successfully.', 'Close', {
            duration: 3000
          });
          this.dialogRef.close('approve');
        } else {
          let snackBarRef = this._snackBar.open('There is something went wrong. Please try after sometime', 'Close', {
            duration: 3000
          });
          this.dialogRef.close('approve');
        }
      },
      error: (error) => {
        let snackBarRef = this._snackBar.open('There is something went wrong. Please try after sometime', 'Close', {
          duration: 3000
        });
        this.dialogRef.close();
      }
    });
  }

}
