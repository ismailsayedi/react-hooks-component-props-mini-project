import React from "react";

function ReadTime({ minutes }) {
  const renderEmojis = (count, emoji) => {
    return Array.from({ length: count }).map((_, index) => (
      <span key={index}>{emoji}</span>
    ));
  };

  const renderReadTime = (minutes) => {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return (
        <>
          {renderEmojis(coffeeCups, "☕️")}
          {" "}
          {minutes} min read
        </>
      );
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return (
        <>
          {renderEmojis(bentoBoxes, "🍱")}
          {" "}
          {minutes} min read
        </>
      );
    }
  };

  return <>{renderReadTime(minutes)}</>;
}

export default ReadTime;
