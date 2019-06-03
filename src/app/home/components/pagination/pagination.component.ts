import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})

export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalImages: string;
  @Input() imagesPerPage: number;
  totalPages: number;

  constructor() { }

  ngOnInit() {
      // = Math.ceil(Number(this.totalImages));
  }
  ngOnChanges() {
    this.totalPages = Math.ceil(Number(this.totalImages) / this.imagesPerPage);
  }


}
