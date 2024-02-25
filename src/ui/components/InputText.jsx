import {TextField} from "@mui/material";
export function InputText(props) {
    const { input, meta } = props;
    return (
        <>
            {meta.error && meta.touched ? (
                <TextField
                    error
                    id="outlined-error-helper-text"
                    label="Enter text"
                    helperText={meta.error}
                    variant="outlined"
                    value={input.value}
                    onChange={input.onChange}
                    sx={{ flex: 1, margin: '10px' }}
                />
            ) : (
                <TextField
                    sx={{ flex: 1, margin: '10px'}}
                    id="standard-basic"
                    variant="outlined"
                    value={input.value}
                    onChange={input.onChange}
                    {...input}
                />
            )}
        </>
    );
}
export default InputText;