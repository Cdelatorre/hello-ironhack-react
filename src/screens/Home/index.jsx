import React from "react";
import Header from "../../components/misc/Header";
import IconCard from "../../components/misc/IconCard";
import Navbar from "../../components/misc/Navbar";
import { arrIconCard } from "../../utils/data/home-data";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <div className="custom-container mt-4">
        <div className="icons-row row">
          {arrIconCard.map((card) => {
            return (
              <div
                key={card.id}
                className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
              >
                <IconCard
                  title={card.title}
                  img={card.imgSrc}
                  body={card.body}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
