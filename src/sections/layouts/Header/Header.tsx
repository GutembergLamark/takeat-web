import logo from "@/assets/svg/logo-takeat.svg";
import cart from "@/assets/svg/cart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RestaurantContext } from "@/context/restaurant/restaurant.context";
import { Button } from "@/components/general";
import "./Header.scss";
import { CartContext } from "@/context/cart/cart.context";

export function Header() {
  const { restaurant, logout } = useContext(RestaurantContext);
  const { cartProducts } = useContext(CartContext);

  return (
    <header className="header">
      <section className="header__content wrapper">
        <h1 className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </h1>
        <div className="header__cart">
          <Link to="/cart">
            <img src={cart} alt="Carrinho" />
          </Link>
          {!!cartProducts?.length && <span>{cartProducts?.length}</span>}
        </div>
        <p className="header__name">
          {restaurant?.username ? (
            <>
              <span>
                Olá,{" "}
                <Link to={`/restaurant/${restaurant?.id}/dashboard`}>
                  {restaurant?.username?.split(" ")[0]}
                </Link>
              </span>
              <span>
                <button onClick={() => logout()}>Sair</button>
              </span>
            </>
          ) : (
            <Button
              type="link"
              styleType="default"
              linkProps={{ to: `/login` }}
              color="red"
            >
              Login
            </Button>
          )}
        </p>
      </section>
    </header>
  );
}
