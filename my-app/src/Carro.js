import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './carro.css'
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  
export default function Carrito(){
    const classes = useStyles();

    return(
        <div className = 'cuerpo'>
            <header>
                Aqui estan su carrito
            </header>
            <body>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Filtro de Marca </InputLabel>
                <Select defaultValue="" id="grouped-select">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <ListSubheader>Category 1</ListSubheader>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <ListSubheader>Category 2</ListSubheader>
                    <MenuItem value={3}>Option 3</MenuItem>
                    <MenuItem value={4}>Option 4</MenuItem>
                </Select>
                </FormControl>

                <FormControl variant='filled' className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Lista productos</InputLabel>
                <Select defaultValue="" id="grouped-select">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <ListSubheader>Category 1</ListSubheader>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <ListSubheader>Category 2</ListSubheader>
                    <MenuItem value={3}>Option 3</MenuItem>
                    <MenuItem value={4}>Option 4</MenuItem>
                </Select>
                </FormControl>

            </body>
            <footer>
            <Button variant="contained">
                    <ShoppingCartIcon/>
                    Finalizar compra
                </Button>
            </footer>
        </div>

    );
}