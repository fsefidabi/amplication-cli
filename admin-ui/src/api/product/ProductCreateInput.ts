import { UserCreateNestedManyWithoutProductsInput } from "./UserCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  customer?: UserCreateNestedManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
};
