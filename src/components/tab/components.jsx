export const Tab = ({ title, onClick, isActive, className }) => {
  return (
    <button onClick={onClick} disabled={isActive} className={className}>
      {title}
    </button>
  );
};
