interface StatsType {
  title: string;
  subtitle: string;
}

interface ProductType {
  id: number;
  image: string;
  description: string;
  rating: number;
  currentPrice: number;
  previousPrice?: number;
  discount?: number;
}

interface DressStyleType {
  id: number;
  style: string;
  image_large: string;
  image_mobile: string;
}

interface TestimonialType {
  id: string;
  name: string;
  rating: number;
  description: string;
  verified_customer: boolean;
}

interface CardType {
  id: string;
  card_type: string;
  name: string;
  rating: number;
  description: string;
  verified_customer: boolean;
  posted_date?: string;
  icon?: string;
}
