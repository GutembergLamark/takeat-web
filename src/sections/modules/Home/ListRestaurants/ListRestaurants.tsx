/* eslint-disable @typescript-eslint/no-unused-vars */

import "./ListRestaurants.scss";

export function ListRestaurants(props: ModuleProps) {
  const { fields } = props;

  return (
    <section className="l-restaurants wrapper">
      <h2>{fields?.title}</h2>
    </section>
  );
}
