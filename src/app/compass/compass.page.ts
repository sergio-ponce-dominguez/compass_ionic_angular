import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  IonContent,
  IonFab,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-compass',
  templateUrl: 'compass.page.html',
  styleUrls: ['compass.page.scss'],
  imports: [
    IonFab,
    IonText,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    DecimalPipe,
  ],
})
export class CompassPage implements OnInit, OnDestroy {
  constructor(private platform: Platform) {}

  event: DeviceOrientationEvent | null = null;
  imageTransform = 'rotate(0deg)';

  ngOnInit(): void {
    this.platform.ready().then(() => {
      window.addEventListener('deviceorientationabsolute', this.handleEvent);
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('deviceorientationabsolute', this.handleEvent);
  }

  private handleEvent = (event: DeviceOrientationEvent): void => {
    this.event = event;
    if (event.alpha === null) {
      return;
    }
    this.imageTransform = `rotate(${event.alpha}deg)`;
  };
}
