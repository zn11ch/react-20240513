import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dishes/selectors"

export const CartItem = ({ item, value }) => {

    const dish = useSelector((state) => selectDishById(state, item))

return (
    <div>
        {dish.name} - {dish.price*value} - {value}
    </div>

)
}