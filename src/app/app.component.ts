import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AcNotification, AcEntity, ActionType } from 'angular-cesium';

// degrees for israel [4386128.9677113, 3071200.56679332, 3453958.6411779]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  UrlA = 'http://www.angular-cesium.com/graphql';
  UrlB = '/assets/mock.json';
  planes$: Observable<AcNotification>;

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
      position: Cesium.Cartesian3.fromRadians(0.575958653158129, 0.610865238198015, 0)
    },
    actionType: ActionType.ADD_UPDATE
  };

  planeB: AcNotification = {
    id: '0',
    entity: {
      name: 'sec name',
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
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.getDataFromServer(this.UrlB);
    this.getMockField();
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
}
