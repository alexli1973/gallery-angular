import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})

export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalImages: string;
  @Input() imagesPerPage: number;
  @Output() selectedPage: EventEmitter<number> = new EventEmitter();
  totalPages: number;
  currentPage: number;
  maxPages = 10;
  startPage: number;
  endPage: number;


  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.totalPages = Math.ceil(Number(this.totalImages) / this.imagesPerPage);
  }

  setPage(page) {
    this.selectedPage.emit(page);
    this.currentPage = page;
  }

  paginationService(maxPages, totalPages) {
    if(cu)
  }


}
