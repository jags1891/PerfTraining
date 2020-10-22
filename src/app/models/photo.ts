export class Photo {
  url: string;
  type: PhotoType;
}

enum PhotoType {
  Front,
  Back,
  Side
}
