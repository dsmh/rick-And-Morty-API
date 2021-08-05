import { Component, OnInit, Input } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(randmService: RickAndMortyService) { }

  ngOnInit() {}

}
