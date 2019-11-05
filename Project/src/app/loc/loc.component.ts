import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loc',
  templateUrl: './loc.component.html',
  styleUrls: ['./loc.component.css']
})
export class LocComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;

  isTracking = false;

  currentLat: any;
  currentLong: any;

  ngOnInit() {
    
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;
    // this.getAddress(this.currentLat,this.currentLong)
    // var latlon = position.coords.latitude + "," + position.coords.longitude;
  
    // var img_url = "http://maps.google.com/maps/api/js";
  
    //   document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }
  
}

