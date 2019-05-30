import {User} from './user';
import {Urls} from './urls';

//
// interface IImage {
//   id: string;
//   created_at: string;
//   updated_at: string;
//   width: number;
//   height: number;
//   likes: number;
//   user: User;
//   description?: string;
//   alt_description?: string;
//   color?: string;
//   categories?: string;
// }

export class Image {
  constructor(
    id: string,
    createdAt: string,
    updatedAt: string,
    width: number,
    height: number,
    likes: number,
    user: User,
    urls: Urls,
    description?: string,
    altDescription?: string,
    color?: string,
    categories?: string
  ) {}
}
