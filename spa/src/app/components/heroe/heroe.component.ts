import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {
  heroe:any={};
  constructor(private _activatedRoute: ActivatedRoute,
    private _HeroesService: HeroesService) { 
    this._activatedRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.heroe = this._HeroesService.getHeroe(params['id']);
      console.log(this.heroe)


    })
  }
  
 

}
