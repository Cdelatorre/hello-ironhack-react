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
      arrCards: arrIconCard,
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
        arrCards: arrIconCard,
      });
    }, 2000);
  };

  handleDeleteCard = (id) => {
    const newCards = this.state.arrCards.filter((card) => card.id !== id);

    this.setState({
      arrCards: newCards,
      showCards: !!newCards.length,
    });
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
            <div className="icons-row row mb-4">
              {this.state.arrCards.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
                  >
                    <IconCard
                      onDelete={(event) => this.handleDeleteCard(card.id)}
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
