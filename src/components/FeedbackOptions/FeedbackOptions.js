import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map((key) => (
        <button type="button" name={key} key={key} onClick={onLeaveFeedback}>
          {key}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
