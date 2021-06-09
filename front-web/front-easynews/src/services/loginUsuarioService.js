import { React } from 'react';
import api from '../services/api'

function logarUsuario(object){
    const res = api.post("login", object);
}

export{
    logarUsuario
}