import { Component, Input, OnInit } from '@angular/core';
import { Photograph } from '../models/photographer.model';

@Component({
  selector: 'app-photograph',
  templateUrl: './photograph.component.html',
  styleUrls: ['./photograph.component.scss']
})
export class PhotographComponent implements OnInit {
  @Input() photographers!: Photograph; //input décorateur qui va permettre d'injecter le modèle dans le component et utiliser l'object dans le parent app.component

  buttonText!:string;

  /*INITIALISATION DES VARIABLES*/
  ngOnInit(){ /*on initialise la donnée grâce à la méthode ngOnInit, implémenté par l'interface OnInit*/
    this.buttonText="Suivre";
  }

  /*METHODES ASSOCIES AU COMPOSANT*/
  photographFollower(){
    /*si pictureLike n'est pas cliqué, on incrémente*/
    if (this.buttonText === "Suivre"){    
      this.photographers.follower++;
      this.buttonText="✔️"; 
   
    }
    /*si pictureLike est déjà cliqué, on décrémente*/
    else{    
      this.photographers.follower--;
      this.buttonText="Suivre";
    }
  } 
}
