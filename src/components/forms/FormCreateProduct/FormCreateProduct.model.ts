import CreateProduct from "@/@core/domain/usecases/createProduct/createProduct.usecase";
import { DataCreateProduct } from "@/@core/infra/gateways/restaurant/Restaurant.gateway.types";
import { restaurantGateway } from "@/@core/infra/gateways/restaurant/RestaurantHttp.gateway";
import { getCookie } from "@/utils/functions";
import { useState } from "react";
import { FormCreateProductProps } from "./FormCreateProduct.types";

export default function useFormCreateProductModel({
  closeModal,
}: FormCreateProductProps) {
  const [values, setValues] = useState<DataCreateProduct>(
    {} as DataCreateProduct
  );
  const [errors, setErrors] = useState<
    Partial<Omit<DataCreateProduct, "value"> & { value: string }>
  >({} as Partial<Omit<DataCreateProduct, "value"> & { value: string }>);

  const authorization = getCookie("takeat_authorization");

  const createProduct = new CreateProduct(restaurantGateway);

  async function onSubmit() {
    const data = await createProduct.execute(values, authorization);

    if (data?.errors) {
      return setErrors(data?.errors);
    }

    if (data?.data?.id) {
      setErrors({});
      return closeModal();
    }

    setErrors({});
    return closeModal();
  }

  return { setValues, onSubmit, errors };
}
