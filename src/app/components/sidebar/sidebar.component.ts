import { TrackerServiceProvider } from './../../services/tracker/tracker.service'
import { Component, OnInit } from '@angular/core'
import { IIncident } from '../../interfaces/IIncident'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  public estimatedTotal: number
  public incidents: Array<IIncident>

  constructor(private trackerServiceProvider: TrackerServiceProvider) {
    this.trackerServiceProvider.estimatedTotal.subscribe(total => {
      this.estimatedTotal = total
    })

    this.trackerServiceProvider.incidents.subscribe(incidents => {
      this.incidents = incidents
    })
  }

  public goToIncident(incident: IIncident) {
    this.trackerServiceProvider.incidentLocation.next({
      type: incident.point.type,
      coordinates: incident.point.coordinates
    })
  }

  public determineSeverityOfIncident(incident: IIncident) {
    switch (incident.severity) {
      case 1:
        return 'Low Impact'
      case 2:
        return 'Minor'
      case 3:
        return 'Moderate'
      case 4:
        return 'Serious'
      default:
        return 'N/A'
    }
  }

  public determineTypeOfAccident(incident: IIncident) {
    switch (incident.type) {
      case 1:
        return 'Accident'
      case 2:
        return 'Congestion'
      case 3:
        return 'DisabledVehicle'
      case 4:
        return 'MassTransit'
      case 5:
        return 'Miscellaneous'
      case 6:
        return 'OtherNews'
      case 7:
        return 'PlannedEvent'
      case 8:
        return 'RoadHazard'
      case 9:
        return 'Construction'
      case 10:
        return 'Alert'
      case 11:
        return 'Weather'
      default:
        return 'N/A'
    }
  }

  ngOnInit() {
  }
}
