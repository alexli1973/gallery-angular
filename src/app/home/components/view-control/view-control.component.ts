import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-view-control',
  templateUrl: './view-control.component.html',
  styleUrls: ['./view-control.component.scss']
})
export class ViewControlComponent implements OnInit {
  imagesQty: number [] = [3, 6, 9, 18];
  imagePerPage: number;
  @Output() qtyChanged: EventEmitter<number> = new EventEmitter();
 // @Output() qtyDefault: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
   // this.qtyDefault.emit(3);
  }

  selectedQty(qty) {
    console.log(qty);
    this.imagePerPage = qty;
    this.qtyChanged.emit(qty);
  }

}
