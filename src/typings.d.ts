/* SystemJS module definition */
declare var module: NodeModule
interface NodeModule {
  id: string
}

declare module 'gmaps'
declare var gmaps: GMaps
interface GMaps {
  addMarker: Function,
  setCenter: Function,
  geocode: any,
  lat: number
  lng: number,
  zoomIn: (zoomLevel) => {}
}
