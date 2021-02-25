import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rk-footer',
  templateUrl: './footer.container.html',
  styleUrls: ['./footer.container.scss']
})
export class FooterContainer {

  faHeart = faHeart;

  constructor() { }

}
