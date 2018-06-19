import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AcNotification, AcEntity, ActionType, CesiumService } from 'angular-cesium';
import { ViewChild, ElementRef } from '@angular/core';
import { RectangleDrawerService } from 'angular-cesium/src/angular-cesium/services/drawers/rectangle-dawer/rectangle-drawer.service';

// degrees for israel [4386128.9677113, 3071200.56679332, 3453958.6411779]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RectangleDrawerService]
})
export class AppComponent implements OnInit, AfterViewInit {

  // @ViewChild('myCanvas') myCanvas: ElementRef;
  // public context: CanvasRenderingContext2D;
  title = 'app';
  UrlA = 'http://www.angular-cesium.com/graphql';
  UrlB = '/assets/mock.json';
  planes$: Observable<AcNotification>;
  colorBLue = Cesium.Color.LIGHTSKYBLUE;
  colorGreen = Cesium.Color.GREEN;

  // planeA: AcNotification = {
  //   id: '1',
  //   entity: {
  //     name: 'first name',
  //     position: {
  //       lat: 33,
  //       long: 33,
  //       alt: 0,
  //       __typename: 'Position'
  //     }
  //   },
  //   actionType: ActionType.ADD_UPDATE
  // };

  // planeB: AcNotification = {
  //   id: '0',
  //   entity: {
  //     name: 'sec name',
  //     position: {
  //       lat: 33,
  //       long: 33,
  //       alt: 0,
  //       __typename: 'Position'
  //     }
  //   },
  //   actionType: ActionType.ADD_UPDATE
  // };


   planeA: AcNotification = {
    id: '1',
    entity: {
      name: 'first name',
      myField: 'just my field a',
      image: '/assets/smiley.jpg',
      position: Cesium.Cartesian3.fromRadians(0.575958653158129, 0.610865238198015, 0)
    },
    actionType: ActionType.ADD_UPDATE
  };

  planeB: AcNotification = {
    id: '0',
    entity: {
      name: 'sec name',
      myField: 'just my field b',
      position: Cesium.Cartesian3.fromRadians(0.575958653158129, 0.610865238198015, 0)
    },
    actionType: ActionType.ADD_UPDATE
  };

  // planeB: AcNotification = {
  //   id: 0,
  //   name: 'sec name',
  //   position: {
  //     alt: 0,
  //     lat: -22.7997,
  //     long: 59.4767,
  //     __typename: 'Position',
  //     actionType: 'ADD_UPDATE'
  //   }
  // };
  trackArray = [this.planeA, this.planeB];

  // entity = new AcEntity({
  //   id: 0,
  //   name: 'click me',
  //   position: Cesium.Cartesian3.fromRadians(2, 1.5)
  // });

  // entityB = new AcEntity({
  //   id: 1,
  //   name: 'click me too',
  //   position: Cesium.Cartesian3.fromRadians(1, 0.5)
  // });

  // entArr: AcEntity[] = [this.entity, this.entityB];
  // , private rectangleDrawerService: RectangleDrawerService
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.getDataFromServer(this.UrlB);
    // this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    // console.log(' this.context =' + this.context.canvas.textContent);
    // this.context.canvas.textContent = 'go go go ';
    this.getMockField();
    // this.rectangleDrawerService.add();
  }
  // getDataFromServer(Url: string) {
  //   console.log(' getDataFromServer Url =' + Url);
  //   this.http.get(Url).subscribe(res => {
  //     // this.planes$ = Observable.from(res.list);
  //     this.planes$ =  res.list;
  //     console.log(' this.planes$ = ' + JSON.stringify(this.planes$));
  //   });
  // }

  getMockField() {
    console.log(' this.trackArray =' + this.trackArray);

    this.planes$ = Observable.from(this.trackArray);
  }

  activateRecService() {
    // document.getElementById('sec-canvas') = this.cesiumService.getCanvas();
  }

  ngAfterViewInit(): void {

    // console.log('after this.context =' + this.context.canvas.textContent);

  }
}
