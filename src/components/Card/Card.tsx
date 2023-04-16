export interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type CardProps = {
  card: ICard;
};

import React, { Component } from "react";
import "./Card.less";

class Card extends Component<CardProps, object> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const { brand, title, thumbnail, description, price } = this.props.card;

    return (
      <div className={"card"}>
        <span>{brand}</span>
        <h3>{title}</h3>
        <img src={thumbnail} alt={`${brand} ${title}`} />
        <span className={"card-description"}>{description}</span>
        <span>{`${price} USD`}</span>
      </div>
    );
  }
}

export default Card;
