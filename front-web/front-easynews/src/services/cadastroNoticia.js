import { React } from 'react';
import api from '../services/api'

async function cadastrarNoticia(object){
    await api.post("/home/posts", object);
}

async function buscarNoticia(){
    const res = await api.get("/home/posts");
    return res.data;
}

export{
    cadastrarNoticia,
    buscarNoticia
}