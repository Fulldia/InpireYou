import { Component, OnInit } from '@angular/core';
import { SharedPicture } from './models/shared-picture.model';
import { SharedSpot } from './models/shared-spot.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  { //pour initialiser des propriétés comme il faut -> implémenter OnInit
/*DECLARATION DES VARIABLES*/  
  myPicture!: SharedPicture;
  myOtherPicture!: SharedPicture;
  mySpot!: SharedSpot;

/*INITIALISATION DES VARIABLES*/
ngOnInit(){ /*on initialise la donnée grâce à la méthode ngOnInit, implémenté par l'interface OnInit*/
this.myPicture = new SharedPicture('Couché de Soleil Arcachon',
                                    "Vendredi soir, couché de soleil exceptionnel, j'ai utilisé mon Canon R5 couplé à mon RF 24-105mm. Pur régal.",
                                    new Date(),
                                    7,
                                    'https://bateliers-arcachon.com/wp-content/uploads/2018/10/le_cote_d_argent_un_projet_une_innovation.jpg')

this.myOtherPicture = new SharedPicture('Paysage',
                                    "Paysage après ma balade habituelle, j'ai utilisé mon Canon R5 couplé à mon RF 24-105mm. Pur régal.",
                                    new Date(),
                                    7,
                                    'https://ericheymans.b-cdn.net/wp-content/uploads/2012/08/dawn-field-grass-164025.jpg')

                                  ;
this.mySpot = new SharedSpot('Spot Ville',
                              new Date(),
                              23,
                              'https://static.vecteezy.com/ti/vecteur-libre/p3/2920438-abstract-city-map-seamless-pattern-roads-navigation-gps-use-for-pattern-fills-surface-textures-web-page-background-wallpaper-vector-illustration-gratuit-vectoriel.jpg'
                               );     
}}
