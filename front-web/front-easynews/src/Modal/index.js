import {useState, useCallback} from "react";
import {
  Div,
  Section,
  ButtonProblem,
  ButtonClose,
  FieldLocation,
  FieldName,
  FieldText,
  Label
} from "../Modal/style";
import { cadastrarNoticia } from "../services/cadastroNoticia";

const Modal = ({ handleClose, show, children }) => {
const [city, setCity] = useState("")
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")


  const submitHandler = useCallback(async () => {
    const noticia = {
      title: title,
      description: description
    }
     await cadastrarNoticia(noticia);
     window.location.reload();
      handleClose();
  },[description, handleClose, title]);

  return (
    <Div show={show}>
      <Section>
        {children}
        <ButtonClose onClick={handleClose}>X</ButtonClose>
        <Label style={{padding: "0px 0px 0px 100px"}}>Digite a localização</Label>
        <FieldLocation onChange={(e)=>setCity(e.target.value)} value={city} type="text" name="city" placeholder="Digite a localização "/>
        <Label>Digite um título</Label>
        <FieldName onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="title" placeholder="Digite um título "/>
        <Label>Digite a descrição</Label>
        <FieldText onChange={(e)=>setDescription(e.target.value)} value={description} type="text" name="description" placeholder="Digite uma descrição "></FieldText>
        <ButtonProblem onClick={submitHandler}>Relatar problema</ButtonProblem>
      </Section>
    </Div>
  );
};

export default Modal;
