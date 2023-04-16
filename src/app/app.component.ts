import { Component, OnInit } from '@angular/core';
import { SharedSpot } from './models/shared-spot.model';
import { Photograph } from './models/photographer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  { //pour initialiser des propriétés comme il faut -> implémenter OnInit
  
/*INITIALISATION DES TABLEAUX DE DONNEES*/

  sharedSpot!: SharedSpot[];
  ngOnInit(){ /*on initialise la donnée grâce à la méthode ngOnInit, implémenté par l'interface OnInit*/
      }


}
