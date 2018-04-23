import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class LoaderServiceProvider {
  public showLoader: Subject<boolean> = new Subject<boolean>()
}
