import Product from "@/@core/domain/entities/product/Product";
import { IProduct } from "@/@core/domain/entities/product/Product.types";
import ListProducts from "@/@core/domain/usecases/listProducts/listProducts.usecase";
import { restaurantGateway } from "@/@core/infra/gateways/restaurant/RestaurantHttp.gateway";
import { useEffect, useState } from "react";
import { ListOfProductsProps } from "./ListRestaurant.types";
import { Card } from "@/components/general";

export default function ListOfProducts({ id }: ListOfProductsProps) {
  const [products, setProducts] = useState<Array<IProduct>>([]);

  const listProducts = new ListProducts(restaurantGateway);

  useEffect(() => {
    (async () => {
      const data = await listProducts.execute(id);

      const formatedProducts = data.products.map((product: IProduct) => {
        const newProduct = new Product(
          product.id,
          product.name,
          product.description,
          product.value,
          product.canceled_at,
          product.createdAt,
          product.updatedAt,
          product.restaurant_id
        );

        return newProduct;
      });

      setProducts(formatedProducts.map((product: Product) => product.toJSON()));
    })();
  }, []);

  return (
    <div className="l-restaurant__products">
      {products?.length ?? 0 > 0
        ? products?.map((product) => {
            return (
              <Card
                key={`product-item-${product.id}`}
                id={product?.id}
                name={product?.name}
                description={product?.description}
                value={product?.value}
              />
            );
          })
        : null}
    </div>
  );
}
