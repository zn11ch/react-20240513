import { Rating } from "../rating/components";
import { useReducer } from "react";

function reducer(state, { type, payload }) {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "setDefault":
      return DEFAULT_FORM_VALUES;
    default:
      return state;
  }
}

const DEFAULT_FORM_VALUES = {
  name: "",
  text: "",
  rating: 1,
};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUES);


  return (
    <div>
      <div>
        <div>
          <span>Name </span>
          <input
            type="text"
            value={form.name}
            onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
            }
          />
        </div>
        <div>
          <span>Text </span>
          <input
            type="text"
            value={form.text}
            onChange={(event) =>
              dispatch({ type: "setText", payload: event.target.value })
            }
          />
        </div>
        <Rating
          initialValue={form.rating}
          onChange={(event) => {
            dispatch({
              type: "setRating",
              payload: Number(event.target.value),
            });
          }}
        />
        <button onClick={() => dispatch({ type: "setDefault" })}>Submit</button>
      </div>
    </div>
  );
};
