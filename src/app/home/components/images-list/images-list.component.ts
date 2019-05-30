import { Component, OnInit } from '@angular/core';
import {BaseApiService} from '../../../core/providers/http/base-api.service';
import {Image} from '../../../core/models/image';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.sass']
})
export class ImagesListComponent implements OnInit {
  listImages: Image = [];
  keys: string;
  isLoaded = false;

  constructor(private apiService: BaseApiService) { }

  ngOnInit() {
    this.apiService.getImages().subscribe((data: Image) => {
      this.listImages = data;
      debugger;
      this.keys = data.headers.get('X-Custom-Header');
    });
  }

}
