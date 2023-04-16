//Ce fichier a pour but de gérer les données qui seront affichées dans le composant
//Soit par la création de classes
//Soit par un service qui appelle une API pour récupérer les données, ou pour gérer l'authentification et l'autorisation

//On déclare une classe avec ses propriétés
export class SharedSpot {
    id!:number;
    title!: string;             
    createdDate!: Date;   
    likes!: number;  
    imageURL!: string;
}