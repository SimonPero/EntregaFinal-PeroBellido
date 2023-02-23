import { Button } from "react-bootstrap"
import "./Counter.css"
const Counter = ({ count, setCount, max }) => {
    const onAdd = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }
    const onSubstract = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className="counter">
                <Button onClick={onAdd} variant="primary">+</Button>
                <p>{count}</p>
                <Button onClick={onSubstract} variant="primary">-</Button>
        </div>
    )
}

export default Counter