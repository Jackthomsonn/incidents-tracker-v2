import { IIncident } from './IIncident'

export interface IIncidentsServiceResponse {
  estimatedTotal: number
  resources: Array<IIncident>
}
