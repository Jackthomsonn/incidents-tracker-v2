import { Component, OnInit } from '@angular/core'
import { TrackerServiceProvider } from '../../services/tracker/tracker.service'

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})

export class TrackerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
