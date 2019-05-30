// interface IUser {
//   id: string;
//   username: string;
//   name?: string;
//   first_name?: string;
//   last_name?: string;
//   profile_image?: {
//     small?: string;
//     medium?: string;
//     large?: string;
//   };
//   total_likes?: number;
//   total_photos?: number;
// }
export class User  {
  constructor(
    id: string,
    username: string,
    firstName?: string,
    lastName?: string,
    name?: string,
    profileImage?: { small: string; medium: string; large: string },
    totalLikes?: number,
    totalPhotos?: number
  ) {}
}
