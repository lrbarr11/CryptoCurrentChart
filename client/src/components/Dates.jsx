import React from 'react'
import {useState} from 'react'
import {Button, Modal, Form, Row, Col} from "react-bootstrap"

class Dates extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleShow  = this.handleShow.bind(this)
    }

    
    
     handleClose() {
         this.setState({
             show: false
         })
     }

     handleShow() {
         this.setState({
             show: true
         })
     }

    render() {
        return (
        <>
        <Button onClick={this.handleShow}>Date Range</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Input Date Range</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>From: </Form.Label>
                            <Form.Control type="date" placeholder="From" />
                        </Col>
                        <Col>
                            <Form.Label>To: </Form.Label>
                            <Form.Control type="date" placeholder="To" />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={this.handleClose}>Cancel</Button>
                <Button variant="primary" onClick={this.handleClose}>Submit</Button>
            </Modal.Footer>
        </Modal>
        </>
        )
    }
};

export default Dates;