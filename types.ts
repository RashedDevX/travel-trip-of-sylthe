
export interface TourPackage {
  id: string;
  title: string;
  location: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  type: 'Domestic' | 'International';
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  packageCount: number;
}
