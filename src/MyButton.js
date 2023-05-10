import Button from '@mui/material/Button';
import * as React from 'react';

const style = {
    "background-color": "black"
  }
  

export default function MyButton(props){

    return(
        <Button style={style} className='myButton' variant="contained">{props.name}</Button>
    )

}