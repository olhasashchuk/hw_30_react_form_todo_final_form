import {useDispatch, useSelector} from "react-redux";
import {ListItem} from "./ListItem.jsx";
import selectors from "../../engine/todo/selectors.js";
import {useEffect} from "react";
import { getData } from "../../engine/todo/thunks.js";

export function List() {
    const items = useSelector(selectors.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <>
            <br/>
            <h1>Todos</h1>
            {
                items.length === 0
                ? <span>No data</span>
                : (
                    <ul className="list">
                        {items.map(item => <ListItem key={item.id} id={item.id} text={item.text}/>)}
                    </ul>
                )
            }

        </>
    )
}