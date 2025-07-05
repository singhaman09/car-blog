export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  description: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface CarSpecs {
  modelYear: string;
  fuelType: string;
  topSpeed: string;
  price: string;
  category: string;
}
