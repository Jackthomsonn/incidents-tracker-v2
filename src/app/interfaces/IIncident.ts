import { IPoint } from './IPoint'

export interface IIncident {
  description: string
  end: string
  incidentId: number
  lastModified: string
  point: IPoint
  roadClosed:
  false
  severity: number
  source: number
  start: string
  toPoint: IPoint
  type: number
  verified: boolean
  __type: string
}
