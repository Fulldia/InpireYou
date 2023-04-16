import { Component, OnInit } from '@angular/core';
import { Photograph } from '../models/photographer.model';
import { PhotographerService } from '../services/photographer.service';
@Component({
  selector: 'app-photographer-list',
  templateUrl: './photographer-list.component.html',
  styleUrls: ['./photographer-list.component.scss']
})
export class PhotographerListComponent implements OnInit{
    photographer!: Photograph[];
  
    //Importer un service dans un component ! via une propriété
    constructor(private photographerService: PhotographerService){ 
    }
  
    ngOnInit(){ /*on initialise la donnée grâce à la méthode ngOnInit, implémenté par l'interface OnInit*/
    this.photographer = this.photographerService.getAllPhotographers();    
        }
}
