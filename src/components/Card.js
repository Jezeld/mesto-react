import React from "react";
import "../index.css";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="place">
      <button type="button" className="place__urn"></button>
      <img
        src={card.link}
        alt={card.name}
        className="place__image"
        onClick={handleClick}
      />
      <div className="place__name">
        <h2 className="place__title">{card.name}</h2>
        <div className="place__box">
          <button type="button" className="place__like"></button>
          <h2 className="place__number-likes">{card.likes.length}</h2>
        </div>
      </div>
    </article>
  );
}

export { Card };
