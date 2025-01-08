import logo from "@/assets/svg/logo-takeat.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useContext } from "react";
import { RestaurantContext } from "@/context/restaurant/restaurant.context";

export function Header() {
  const { restaurant, logout } = useContext(RestaurantContext);

  return (
    <header className="header">
      <section className="header__content wrapper">
        <h1 className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </h1>
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
            <Link to={`/login`}>Login</Link>
          )}
        </p>
      </section>
    </header>
  );
}
