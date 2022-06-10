import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaths } from '../urls';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(private readonly http: HttpClient) { }

  rejectedRequestList = [];
  pendingRequestList = [];
  approveRequestList = [];

  addTenant(payload: any): Observable<any> {
    const url = ApiPaths.addTenant;
    return new Observable(observer => this.http.post<any>(url, payload).subscribe({
      next: (response) => {
        observer.next(response);
        observer.complete();
      },
      error: (err) => observer.error(err)
    }));
  }


  getTenant(): Observable<any> {
    const url = ApiPaths.getTenant;
    return new Observable(observer => this.http.get<any>(url).subscribe({
      next: (response) => {
        this.filterList(response);
        observer.next(response);
        observer.complete();
      },
      error: (err) => observer.error(err)
    }));
  }


  verifyOrgName(orgName: string): Observable<any> {
    const url = ApiPaths.verifyTenantByOrg + orgName;
    return new Observable(observer => this.http.get<any>(url).subscribe({
      next: (response) => {
        observer.next(response);
        observer.complete();
      },
      error: (err) => observer.error(err)
    }));
  }

  approveRequest(payload: any): Observable<any> {
    const url = ApiPaths.approveRequest + payload.orgName;
    return new Observable(observer => this.http.patch<any>(url, payload).subscribe({
      next: (response) => {
        observer.next(response);
        observer.complete();
      },
      error: (err) => observer.error(err)
    }));
  }

  rejectRequest(orgName: string): Observable<any> {
    const url = ApiPaths.rejectRequest + orgName;
    return new Observable(observer => this.http.patch<any>(url, {}).subscribe({
      next: (response) => {
        observer.next(response);
        observer.complete();
      },
      error: (err) => observer.error(err)
    }));
  }

  filterList(response: any) {
    this.rejectedRequestList = response.filter((item: any) => item.status === 'Rejected');
    this.approveRequestList = response.filter((item: any) => item.status === 'Approved');
    this.pendingRequestList = response.filter((item: any) => item.status === 'Pending');


  }

}
