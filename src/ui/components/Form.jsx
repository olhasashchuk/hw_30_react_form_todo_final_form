import { Form, Field } from 'react-final-form'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../engine/todo/selectors.js";
import { setData } from "../../engine/todo/thunks.js";
import InputText from "./InputText.jsx";

function todoText (props) {
    const { handleSubmit, valid} = props;
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                <Field
                    component={InputText}
                    name="text_input"
                    type="text"
                    placeholder="Input text"
                    inputProps={{ 'aria-label': 'Input text' }}
                    sx={{ ml: 1, flex: '1 1 100%'}}
                />
                <Button variant="contained" type="submit" disabled={!valid}>
                    Send
                </Button>
            </div>
        </form>
    )
}

const validateText = (values) => {
    const errors = {};
    if (!values.text_input || values.text_input.length<5 ) {
        errors.text_input="Minimum 5 letters required"
    }
    return errors
}


export function TodoForm() {
    const dispatch = useDispatch()
    const items = useSelector(selectors.items)
    const onSubmit = (values)=> {
        dispatch(setData(values, items));
    }

    return (
        <Form
            validate={validateText}
            onSubmit={onSubmit}
            render = {todoText}
        />
    )
}

