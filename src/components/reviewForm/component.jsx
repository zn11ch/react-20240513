import { Button } from "../button/component";
import { Rating } from "../rating/components";
import { useCallback, useReducer } from "react";

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
  user: "a304959a-76c0-4b34-954a-b38dbf310360",
};

export const ReviewForm = ({
  initialValue = DEFAULT_FORM_VALUES,
  onClickSave,
  onClickCancel,
}) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const onDefaultClickCancel = useCallback(
    () => dispatch({ type: "setDefault" }),
    [],
  );

  if (!onClickCancel) {
    onClickCancel = onDefaultClickCancel;
  }

  const handleClick = useCallback(() => {
    onClickSave(form);
    dispatch({ type: "setDefault" });
  }, [form, onClickSave]);

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
        <Button onClick={handleClick} disabled={form.text === ""}>
          Save
        </Button>
        <Button onClick={onClickCancel}>Cancel</Button>
      </div>
    </div>
  );
};
