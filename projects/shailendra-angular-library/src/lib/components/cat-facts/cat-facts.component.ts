import { Component } from '@angular/core';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'lib-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.css'],
})
export class CatFactsComponent {
  catFacts: any;

  constructor(private catService: CatService) {
    this.getRandonCatFacts();
  }

  getRandonCatFacts() {
    this.catFacts = this.catService.getCatFact().subscribe((cat) => {
      this.catFacts = cat;
    });
  }
}
