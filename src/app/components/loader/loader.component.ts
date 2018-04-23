import { LoaderServiceProvider } from './../../services/loader/loader.service'
import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {
  public shouldShowLoader: boolean

  constructor(private loaderServiceProvider: LoaderServiceProvider) {
  }

  ngOnInit() {
    this.loaderServiceProvider.showLoader.subscribe(shouldShow => {
      this.shouldShowLoader = shouldShow
    })
  }
}
