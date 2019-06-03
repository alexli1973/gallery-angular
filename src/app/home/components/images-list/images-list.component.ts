import { Component, OnInit } from '@angular/core';
import {BaseApiService} from '../../../core/providers/http/base-api.service';
import {Image} from '../../../core/models/image';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.sass']
})
export class ImagesListComponent implements OnInit {

  // params to request
  pageNumber = '1';
  perPage = '3';

  listImages: Image = [];
  totalImages: string;
  isLoaded = false;
  errLoad = false;
  errStatus: {};

  constructor(private apiService: BaseApiService) { }

  ngOnInit() {
    this.apiService.responseData(this.pageNumber, this.perPage).subscribe(resp => {
      debugger;
      this.listImages = resp.body;
      this.totalImages = resp.headers.get('x-total');
      this.isLoaded = true;
      },
      error => {
        this.errStatus = {...error};
        this.isLoaded = true;
        this.errLoad = true;
      }
      // (err: HttpErrorResponse) => {
      //   console.log(err.error);
      //   console.log(err.name);
      //   console.log(err.message);
      //   console.log(err.status);
      //   this.errStatus = err.status;
      //   this.isLoaded = true;
      // }
    );
  }

  trackById(index: number, image: Image): number {
    return image.id;
  }

}
