import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Global} from "../models/hiv1.model";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getHivFile(hivNumber: string): Observable<Global> {
    return this.http.get<Global>('/assets/json/hivfrenchresistance'+hivNumber+'.json');
  }
}

