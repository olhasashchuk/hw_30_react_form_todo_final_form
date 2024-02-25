
import { Button } from "./Button.jsx";
import { useDispatch } from "react-redux";
import { deleteData } from "../../engine/todo/thunks.js";
export function ListItem(props) {
    const dispatch = useDispatch();
    const { id, text } = props;
    const removeItem = ()=> {
        dispatch (deleteData(id));
    }
    return (
        <li className="list_component">
            <input id={id} className="form-check-input" type="checkbox" />
            <label
                htmlFor={id}
                className="list_component_text"
            >
                {text}
            </label>
            <Button onClick={removeItem}>Remove</Button>
        </li>
    )
}