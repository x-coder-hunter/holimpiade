- pour faire un onchange, importer FormsModule dans le fichier ts
  exple: <input [(ngModel)]='filter' />

- pour faire un onclick
  exple: <input (click)='function_called(arg)' />

- Pour utiliser la boucle for:
exple:
<div *ngFor="let item of items">{{item?.name}}</div>
