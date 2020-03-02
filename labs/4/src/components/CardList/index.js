import React from "react";
import Card from "../Card/";
import data from "../../data.json";

class CardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {cards: data.cards};
  }

  removeCard = (event) => {
    let cardInfo = event.target.getAttribute("cardInfo");
    let currentCards = this.state.cards;
    let newCards = currentCards.filter((card) => {
      return card.title !== cardInfo;
    });
    this.setState({cards:newCards});
  }

  render(){
    return(
      <div>
        {
          this.state.cards.map((card,index) => {
            return <Card 
              key = {index}
              title = {card.title}
              content = {card.content}
              dataClick = {this.removeCard}
            />
          })
        }
      </div>
    );
  }
}

export default CardList;