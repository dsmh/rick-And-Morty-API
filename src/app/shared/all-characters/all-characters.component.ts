import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';
@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent implements OnInit {

  allCharacters: any;


  constructor(
    private randmService: RickAndMortyService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.randmService.getAllCharacters().then( (res: any) => {
      this.allCharacters = res;
      console.log (this.allCharacters);
    });
  }

  async openModal(data: any) {
    const modal = await this.modalController.create({
    component: CharacterDetailComponent,
    componentProps: { character: data }
    });
    return await modal.present();
   }

}
