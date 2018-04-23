import { LoaderServiceProvider } from './../../services/loader/loader.service';
import { IIncident } from './../../interfaces/IIncident'
import { TrackerServiceProvider } from './../../services/tracker/tracker.service'
import { Component, OnInit } from '@angular/core'
import * as GMaps from 'gmaps'
import { IIncidentsServiceResponse } from '../../interfaces/IIncidentsServiceResponse'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  public map: GMaps
  public mapBlur: boolean
  public searchLocation: string
  public estimatedIncidents: number

  constructor(
    private trackerServiceProvider: TrackerServiceProvider,
    private loaderServiceProvider: LoaderServiceProvider) { }

  public focusSearchBar() {
    this.mapBlur = true
  }

  public unFocusSearchBar() {
    this.mapBlur = false
  }

  public getIncidentsForLocation() {
    this.loaderServiceProvider.showLoader.next(true)
    this.trackerServiceProvider.getIncidents(this.searchLocation).subscribe((incidents: IIncidentsServiceResponse) => {
      this.trackerServiceProvider.estimatedTotal.next(incidents.estimatedTotal)
      this.trackerServiceProvider.incidents.next(incidents.resources)

      incidents.resources.map(incident => {
        this.map.setCenter(incident.point.coordinates[0], incident.point.coordinates[1])
        this.map.zoomIn(10)

        this.map.addMarker({
          lat: incident.point.coordinates[0],
          lng: incident.point.coordinates[1]
        })

        this.mapBlur = false

        this.loaderServiceProvider.showLoader.next(false)
      })
    })
  }

  private determineSeverityMarkerIconToUse(incident: IIncident) {
    switch (incident.severity) {
      case 1:
        return '../../assets/images/marker-green.png'
      case 2:
        return '../../assets/images/marker-blue.png'
      case 3:
        return '../../assets/images/marker-orange.png'
      case 4:
        return '../../assets/images/marker-pink.png'
      default:
        return '../../assets/images/marker-purple.png'
    }
  }

  ngOnInit() {
    this.map = new GMaps({
      disableDefaultUI: true,
      el: '#map',
      lat: -12.043333,
      lng: -77.028333
    })

    this.trackerServiceProvider.incidentLocation.subscribe(location => {
      this.map.setCenter(location.coordinates[0], location.coordinates[1])
      this.map.zoomIn(10)
    })
  }
}
