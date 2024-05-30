interface ImageType {
  original: string;
  thumbnail: string;
}

interface ColorType {
  name: string;
  value: string;
}

interface ProductDetailType {
  id: number;
  images: ImageType[];
  image: string;
  title: string;
  description: string;
  rating: number;
  currentPrice: number;
  previousPrice?: number;
  discount?: number;
  // colors: string[];
  colors: ColorType[];

  sizes: string[];
  quantity?: number;
}
