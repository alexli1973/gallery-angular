import {Component, Input, OnInit} from '@angular/core';
import {BaseApiService} from '../../../core/providers/http/base-api.service';
import {Image} from '../../../core/models/image';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {
  // params to request
  pageNumber = '1';
  perPage: string;
  curPage: string;

  listImages: Image = [];
  totalImages: string;
  isLoaded = false;
  errLoad = false;
  errStatus: {};

  constructor(private apiService: BaseApiService) { }

  ngOnInit() {
    this.perPage = '9';
    this.dataLoading();
  }

  trackById(image) {
    return image.id;
  }

  qtyChangedHandler($event) {
    this.perPage = $event;
    this.dataLoading(this.curPage, $event);
  }

  selectedPage(curPage) {
    this.curPage = curPage;
    this.dataLoading(curPage, this.perPage);
  }

  dataLoading(curPage = '1', perPage = '9') {
    return  this.apiService.responseData(curPage, perPage).subscribe(resp => {
      this.listImages = resp.body;
      this.totalImages = resp.headers.get('x-total');
      this.isLoaded = true;
      },
      error => {
        this.errStatus = {...error};
        this.isLoaded = true;
        this.errLoad = true;
      }
    );
  }

}
