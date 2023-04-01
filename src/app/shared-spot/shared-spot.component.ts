import { Component, Input } from '@angular/core';
import { SharedSpot } from '../models/shared-spot.model';

@Component({
  selector: 'app-shared-spot',
  templateUrl: './shared-spot.component.html',
  styleUrls: ['./shared-spot.component.scss']
})
export class SharedSpotComponent {
  @Input() sharedSpot!: SharedSpot;
  buttonText!:string;
  btn: any;
  isPrimary = false;
  isSecondary = true;


  /*INITIALISATION DES VARIABLES*/
  ngOnInit(){ /*on initialise la donnée grâce à la méthode ngOnInit, implémenté par l'interface OnInit*/
    this.buttonText="J'aime";
  }

  /*METHODES ASSOCIES AU COMPOSANT*/
  spotLike(){
    /*si pictureLike n'est pas cliqué, on incrémente*/
    if (this.buttonText === "J'aime"){    
      this.sharedSpot.likes++;
      this.buttonText="Je n'aime plus";   
      this.isPrimary = !this.isPrimary;
      this.isSecondary = !this.isSecondary;   
    }
    /*si pictureLike est déjà cliqué, on décrémente*/
    else{    
      this.sharedSpot.likes--;
      this.buttonText="J'aime";
      this.isPrimary = !this.isPrimary;
      this.isSecondary = !this.isSecondary;
    }

  }
 
}

