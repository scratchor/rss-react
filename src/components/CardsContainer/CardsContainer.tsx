import React, { Component } from "react";
import Card, { ICard } from "../Card/Card";
import "./CardContainer.less";

type CardsContainerProps = {
  products: ICard[];
};

class CardsContainer extends Component<CardsContainerProps, object> {
  constructor(props: CardsContainerProps) {
    super(props);
  }
  render() {
    return (
      <div className={"card-container"}>
        {this.props.products.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    );
  }
}

export default CardsContainer;
