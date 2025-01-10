import { mockedProduct } from "@/test/mocks";
import { CartContext } from "./cart.context";
import { providerRender } from "@/test/utils/render";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";

describe("Cart Provider", function () {
  describe("AddProduct()", async function () {
    test("Deve adicionar um produto ao carrinho", async function () {
      const { getByText } = providerRender(
        <CartContext.Consumer>
          {(context) => (
            <>
              <p>Size Cart: {context?.cartProducts.length}</p>
              <button onClick={() => context?.addProduct(mockedProduct)}>
                addProduct
              </button>
            </>
          )}
        </CartContext.Consumer>,
        {},
      );

      expect(getByText("Size Cart: 0")).toBeTruthy();

      await waitFor(() => {
        userEvent?.click(getByText("addProduct"));
        expect(getByText("Size Cart: 1")).toBeTruthy();
      });
    });
  });
  describe("RemoveProduct()", function () {
    test("Deve remover um produto do carrinho", async function () {
      const { getByText } = providerRender(
        <CartContext.Consumer>
          {(context) => (
            <>
              <p>Size Cart: {context?.cartProducts.length}</p>
              <button onClick={() => context?.removeProduct(mockedProduct)}>
                removeProduct
              </button>
            </>
          )}
        </CartContext.Consumer>,
        {},
      );

      expect(getByText("Size Cart: 1")).toBeTruthy();

      await waitFor(() => {
        userEvent?.click(getByText("removeProduct"));

        expect(getByText("Size Cart: 0")).toBeTruthy();
      });
    });
  });
  describe("UpdateAmountProduct()", function () {
    test("Deve atualizar o amount de um produto no carrinho", async function () {
      const { getByText } = providerRender(
        <CartContext.Consumer>
          {(context) => (
            <>
              <p>Size Cart: {context?.cartProducts.length}</p>
              <p>Amount Product Cart: {context?.cartProducts[0]?.amount}</p>
              <button onClick={() => context?.addProduct(mockedProduct)}>
                addProduct
              </button>
              <button
                onClick={() =>
                  context?.updateAmountProduct({ ...mockedProduct, amount: 5 })
                }
              >
                updateAmountProduct
              </button>
            </>
          )}
        </CartContext.Consumer>,
        {},
      );

      expect(getByText("Size Cart: 0")).toBeTruthy();
      expect(getByText("Amount Product Cart:")).toBeTruthy();

      await waitFor(() => {
        userEvent?.click(getByText("addProduct"));
        expect(getByText("Size Cart: 1")).toBeTruthy();
        expect(getByText("Amount Product Cart: 1")).toBeTruthy();
      });

      await waitFor(() => {
        userEvent?.click(getByText("updateAmountProduct"));
        expect(getByText("Amount Product Cart: 5")).toBeTruthy();
      });
    });
  });
});
