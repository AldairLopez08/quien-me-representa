import { Component } from '@angular/core';
import { Map, marker, tileLayer, LatLng, circle } from 'leaflet';

@Component({
  selector: 'app-mapa-vista',
  templateUrl: './mapa-vista.component.html',
  styleUrls: ['./mapa-vista.component.scss']
})
export class MapaVistaComponent {

  constructor() { }

  ngAfterViewInit():void{

    const map=new Map('map').setView([20.9459727, -101.2798874], 8);
    map.locate();
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 16,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // EVENTOS DEL MAPA
    
    map.on('click', (e:any)=>{ console.log('click', e.latlng)} );
    
    map.on('locationfound', (e:any)=> {
      const markerItem= marker(e.latlng).addTo(map).bindPopup("Mi ubicación");
      circle(e.latlng,{radius:e.accuracy, color:'red'}).addTo(map);
      map.fitBounds([
        [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
      ]);
    });

    map.on('locationerror', (e)=> alert('No se pudo obtener la localización'));

  }
}
