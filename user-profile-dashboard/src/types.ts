export interface User {
  name: { first: string; last: string };
  email: string;
  phone: string;
  picture: { large: string };
  location: { street: { number: number; name: string }, city: string, country: string };
  dob: { date: string };
}
