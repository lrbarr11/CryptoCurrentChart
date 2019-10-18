import React, {useState} from 'react'
import {Button, Modal, Form} from "react-bootstrap"

const Dates = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <Button onClick={handleShow}>Date Range</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Input Date Range</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Col>
                            <Form.Label>From: </Form.Label>
                            <Form.Control type="date" placeholder="From" />
                        </Form.Col>
                        <Form.Col>
                            <Form.Label>To: </Form.Label>
                            <Form.Control type="date" placeholder="To" />
                        </Form.Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={handleClose}>Submit</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default Dates