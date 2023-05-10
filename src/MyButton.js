import Button from '@mui/material/Button';
import * as React from 'react';

export default function MyButton(props){

    return(
        <Button variant="outlined">{props.name}</Button>
    )

}