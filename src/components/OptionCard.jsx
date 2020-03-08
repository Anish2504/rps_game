import React from "react";

const OptionCard = ({options}) => {
  return (
    <div>
      <div class="content">
        <div class="image">
          <img src={options.image} />
        </div>
        <h3>{options.name}</h3>
        <button id="optionbutton">{options.button}</button>
      </div>
    </div>
  );
};
export default OptionCard;