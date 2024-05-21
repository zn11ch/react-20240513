export const Ingredients = ({ ingredients }) => {
  return (
    <>
      <div>Ingredients:</div>
      <ul className="ingredients">
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </>
  );
};
