import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import misGatitos from './Gatitosinfo';

function Gatospropiedades(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="boton warning btn-lg" onClick={handleShow}>
        Quiero más info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Características del michi</Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <div className='imagesize' >
            <div >
              <p> Género: {misGatitos[props.index].género}</p>
              <p> Carácter: {misGatitos[props.index].carácter}</p>



            </div>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Gatospropiedades;

