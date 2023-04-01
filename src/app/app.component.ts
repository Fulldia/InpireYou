import { Component, OnInit } from '@angular/core';
import { SharedPicture } from './models/shared-picture.model';
import { SharedSpot } from './models/shared-spot.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  { //pour initialiser des propriétés comme il faut -> implémenter OnInit
  
/*INITIALISATION DES TABLEAUX DE DONNEES*/
  sharedPicture!: SharedPicture[];
  sharedSpot!: SharedSpot[];
  
  ngOnInit(){ /*on initialise la donnée grâce à la méthode ngOnInit, implémenté par l'interface OnInit*/
        this.sharedPicture = [
                {
                title:"Couché de Soleil",
                description:"Vendredi soir, couché de soleil exceptionnel, j'ai utilisé mon Canon R5 couplé à mon RF 24-105mm. Pur régal.",
                createdDate: new Date(),
                likes: 7,
                imageURL: 'https://bateliers-arcachon.com/wp-content/uploads/2018/10/le_cote_d_argent_un_projet_une_innovation.jpg',
                location: 'Arcachon'},
                {
                title:"Paysage",
                description:"Paysage après ma balade habituelle, j'ai utilisé mon Canon R5 couplé à mon RF 24-105mm. Pur régal.",
                createdDate: new Date(),
                likes:7,
                imageURL: 'https://ericheymans.b-cdn.net/wp-content/uploads/2012/08/dawn-field-grass-164025.jpg',
                },
                {
                title:'Portrait',
                createdDate:new Date(),
                likes:18,
                imageURL:'https://apprendre-la-photographie.net/wp-content/uploads/2016/10/portrait-photo-bokeh-arriere-plan-flou-Christoph-Gellert.jpg'
                }
        ];

       this.sharedSpot = [
                {
                title:'Spot Ville',
                createdDate: new Date(),
                likes: 23,
                imageURL: 'https://static.vecteezy.com/ti/vecteur-libre/p3/2920438-abstract-city-map-seamless-pattern-roads-navigation-gps-use-for-pattern-fills-surface-textures-web-page-background-wallpaper-vector-illustration-gratuit-vectoriel.jpg'   
                },
                {
                title:'Forêt',
                createdDate: new Date(),
                likes: 3,
                imageURL: 'https://static.vecteezy.com/ti/vecteur-libre/p3/2920438-abstract-city-map-seamless-pattern-roads-navigation-gps-use-for-pattern-fills-surface-textures-web-page-background-wallpaper-vector-illustration-gratuit-vectoriel.jpg'   
                }
               ];
}
}
