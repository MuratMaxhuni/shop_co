interface ColorType {
  name: string;
  value: string;
}

interface FiltersType {
  categoryTitle: string[];
  priceRange: number;
  colors: ColorType[];
  sizes: string[];
  dressStyle: string[];
}
