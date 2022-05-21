import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Employee } from "./employee";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getAllEmployee(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}`+`/employee`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/employee`, employee);
    }

    public updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {
      return this.http.put<Employee>(`${this.apiServerUrl}/employee/${employeeId}`, employee);
    }

    public deleteEmployee(employeeId: number | undefined): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/employee/${employeeId}`);
  }
}
