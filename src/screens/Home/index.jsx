import React, { Component } from "react";
import Button from "../../components/misc/Button";
import Header from "../../components/misc/Header";
import IconCard from "../../components/misc/IconCard";
import Loader from "../../components/misc/Loader";
import Navbar from "../../components/misc/Navbar";
import { arrIconCard } from "../../utils/data/home-data";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showCards: false,
    };
  }

  fetchCards = () => {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        loading: false,
        showCards: true,
      });
    }, 2000);
  };

  render() {
    return (
      <div className="Home">
        <Navbar />
        <Header />
        <div className="custom-container mt-4">
          {this.state.loading && <Loader />}
          {!this.state.showCards ? (
            !this.state.loading && (
              <Button onClickFn={this.fetchCards}>Fetch cards</Button>
            )
          ) : (
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
          )}
        </div>
      </div>
    );
  }
}

export default Home;
