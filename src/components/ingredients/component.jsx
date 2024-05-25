export const Ingredients = ({ ingredients }) => {
  return (
    !!ingredients?.length > 0 && (
      <div>
        <div>Ingredients:</div>
        <ul className="ingredients">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    )
  );
};
