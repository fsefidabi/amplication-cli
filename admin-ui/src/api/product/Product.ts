import { User } from "../user/User";

export type Product = {
  createdAt: Date;
  customer?: Array<User>;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
