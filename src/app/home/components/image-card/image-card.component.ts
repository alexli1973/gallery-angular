import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../../../core/models/image';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() image: Image;

  constructor() { }

  ngOnInit() {
  }

}
