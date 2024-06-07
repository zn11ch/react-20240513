import React, { useId } from "react";
export const Rating = ({ initialValue, maxRating = 5, onChange }) => {
  const inputId = useId();
  return (
    <div>
      {Array.from({ length: maxRating }, (_, index) => index + 1).map(
        (value) => (
          <React.Fragment key={value}>
            <label htmlFor={`${inputId}-${value}`}>{value}</label>
            <input
              id={`${inputId}-${value}`}
              type="radio"
              name={inputId}
              value={value}
              onChange={onChange}
              checked={initialValue === value}
            />
          </React.Fragment>
        ),
      )}
    </div>
  );
};
