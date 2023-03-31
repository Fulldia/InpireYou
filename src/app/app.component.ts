import { Component, OnInit } from '@angular/core';
import { SharedPicture } from './models/shared-picture.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  { //pour initialiser des propriétés comme il faut -> implémenter OnInit
/*DECLARATION DES VARIABLES*/  
  myPicture!: SharedPicture;

/*INITIALISATION DES VARIABLES*/
ngOnInit(){ /*on initialise la donnée grâce à la méthode ngOnInit, implémenté par l'interface OnInit*/
this.myPicture = new SharedPicture('Couché de Soleil Arcachon',
                                    "Vendredi soir, couché de soleil exceptionnel, j'ai utilisé mon Canon R5 couplé à mon RF 24-105mm. Pur régal.",
                                    new Date(),
                                    7,
                                    'https://bateliers-arcachon.com/wp-content/uploads/2018/10/le_cote_d_argent_un_projet_une_innovation.jpg')

};
}
