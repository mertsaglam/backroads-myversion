import React from "react";
import Title from "./Title";
import TourCard from "./TourCard";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="our" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, name, info, image, date, country, days, price } = tour;

          return (
            <TourCard
              key={id}
              name={name}
              info={info}
              image={image}
              date={date}
              country={country}
              days={days}
              price={price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
