import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.character);
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

}
