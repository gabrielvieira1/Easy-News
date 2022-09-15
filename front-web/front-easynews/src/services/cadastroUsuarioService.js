import { React } from 'react';
import api from '../services/api'

function cadastrarUsuario(object){
    const res = api.post("/signup", object);
}

export{
    cadastrarUsuario
}