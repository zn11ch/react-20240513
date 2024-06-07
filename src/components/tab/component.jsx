import { Button } from "../button/component";

export const Tab = ({title, onClick, isActive, className}) => {
    return (
        <Button onClick={onClick} disabled={isActive} className={className}>
          {title}
        </Button>
      );
}