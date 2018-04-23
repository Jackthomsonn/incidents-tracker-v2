import { IIncidentsServiceResponse } from './../../interfaces/IIncidentsServiceResponse'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { IIncident } from '../../interfaces/IIncident'
import { IPoint } from '../../interfaces/IPoint'

@Injectable()
export class TrackerServiceProvider {
  public estimatedTotal: Subject<number> = new Subject<number>()
  public incidents: Subject<Array<IIncident>> = new Subject<Array<IIncident>>()
  public incidentLocation: Subject<IPoint> = new Subject<IPoint>()

  constructor(private http: HttpClient) { }

  public getIncidents(location: string): Observable<any> {
    return this.http.get('https://incidents-tracker.herokuapp.com/api/location/' + location)
  }
}
