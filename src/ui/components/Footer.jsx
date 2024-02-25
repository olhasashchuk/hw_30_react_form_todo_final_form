import {Button} from "./Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../engine/todo/selectors.js"
import {clearAllItems} from "../../engine/todo/thunks.js";

export function Footer () {
    const items = useSelector(selectors.items)
    const dispatch = useDispatch();

    const onClear = () => {
        dispatch(clearAllItems())
    }

    return (
        <div className="d-flex justify-content-between">
            <span>Count: {items.length}</span>
            <Button onClick={onClear}>Clear</Button>
        </div>
    )
}