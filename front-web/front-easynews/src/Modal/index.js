import {Div, Section, Button} from "../Modal/style";

const Modal = ({ handleClose, show, children }) => {
      return (
      <Div show={show}>
        <Section>
          {children}
          <Button type="button" onClick={handleClose}>
            Close
          </Button>
        </Section>
      </Div>
    );
  };

  export default Modal;