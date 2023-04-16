import { Component, OnInit } from '@angular/core';
import { SharedPicture } from '../models/shared-picture.model';
import { SharedPictureService } from '../services/shared-picture.service';

@Component({
  selector: 'app-shared-picture-list',
  templateUrl: './shared-picture-list.component.html',
  styleUrls: ['./shared-picture-list.component.scss']
})
export class SharedPictureListComponent implements OnInit {

  sharedPicture!: SharedPicture[];

  //Importer un service dans un component ! via une propriété
  constructor(private sharedPictureService: SharedPictureService){ 
  }

  ngOnInit(){ /*on initialise la donnée grâce à la méthode ngOnInit, implémenté par l'interface OnInit*/
  this.sharedPicture = this.sharedPictureService.getAllPictures();    
      }
}
