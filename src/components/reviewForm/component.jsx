import { Button } from "../button/component";
import { Rating } from "../rating/components";
import { useReducer } from "react";

function reducer(state, { type, payload }) {
  switch (type) {
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
  text: "",
  rating: 1,
};

export const ReviewForm = ({
  initialValue = DEFAULT_FORM_VALUES,
  onClickSave,
  onClickCancel,
}) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const onDefaultClickCancel = () => dispatch({ type: "setDefault" });

  if (!onClickCancel) {
    onClickCancel = onDefaultClickCancel;
  }

  return (
    <div>
      <div>
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
        <Button onClick={() => onClickSave(form)}>Save</Button>
        <Button onClick={onClickCancel}>Cancel</Button>
      </div>
    </div>
  );
};
