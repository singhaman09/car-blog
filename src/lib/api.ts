import { Post, User, CarSpecs } from '@/types';


const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${API_BASE}/posts`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function getPost(id: string): Promise<Post> {
  const res = await fetch(`${API_BASE}/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

export async function getUser(id: number): Promise<User> {
  const res = await fetch(`${API_BASE}/users/${id}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

export const mockCarSpecs = (id: number): CarSpecs => {
  const specs = [
    { modelYear: '2024', fuelType: 'Electric', topSpeed: '250 km/h', price: '$45,000', category: 'EV' },
    { modelYear: '2023', fuelType: 'Hybrid', topSpeed: '220 km/h', price: '$35,000', category: 'Hybrid' },
    { modelYear: '2024', fuelType: 'Gasoline', topSpeed: '280 km/h', price: '$65,000', category: 'Luxury' },
    { modelYear: '2023', fuelType: 'Diesel', topSpeed: '200 km/h', price: '$28,000', category: 'SUV' },
  ];
  return specs[id % specs.length];
};