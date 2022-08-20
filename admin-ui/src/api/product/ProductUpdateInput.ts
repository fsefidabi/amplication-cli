import { UserUpdateManyWithoutProductsInput } from "./UserUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  customer?: UserUpdateManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
};
