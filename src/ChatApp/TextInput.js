import React from 'react'
import TextField from '@mui/material/TextField'
import {useTheme} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


export const TextInput = (props) => {
    const theme = useTheme();
    const useStyles = makeStyles(() => (
        {
            wrapForm: {
                display: "flex",
                justifyContent: "center",
                width: "95%",
                margin: `${theme.spacing(0)} auto`
            },
            wrapText: {
                width: "100%",
                marginRight: '12px !important'
            },
            button: {
                marginLeft: 12,
            },
        }
    ))

    const classes = useStyles();
    const [value, setValue] = React.useState('');
    return (
        <>
            <form
                className={classes.wrapForm}
                noValidate
                autoComplete="off"
                onSubmit={(e) => props.sendMessage(value, e)}>
                <TextField
                    id="standard-text"
                    label="Send Message"
                    className={classes.wrapText}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button variant="contained" color="primary" className={classes.button} type="submit">
                    <SendIcon/>
                </Button>
            </form>
        </>
    )
};