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

const Modal = ({ handleClose, show, children }) => {
  return (
    <Div show={show}>
      <Section>
        {children}
        <ButtonClose onClick={handleClose}>X</ButtonClose>
        <Label style={{padding: "0px 0px 0px 100px"}}>Digite a localização</Label>
        <FieldLocation type="text" placeholder="Digite a localização "/>
        <Label>Digite um título</Label>
        <FieldName type="text" placeholder="Digite um título "/>
        <Label>Digite a descrição</Label>
        <FieldText type="text" placeholder="Digite uma descrição "></FieldText>
        <ButtonProblem onClick={handleClose}>Relatar problema</ButtonProblem>
      </Section>
    </Div>
  );
};

export default Modal;
