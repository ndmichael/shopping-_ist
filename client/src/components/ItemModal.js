import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions'

const ItemModal = (props) => {
    // console.log(props)
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');

    const toggle = () => {
        setModal(!modal)
    }

    const changeHandler = (e) => {
        setName(
            e.target.value
        )
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newItem = {
            name
        }
        props.addItem(newItem)

        // clear local state
        // setName('');

        // Close modal
        toggle()
    }

    return (
        <div>
            <Button
                color="info"
                style={{ margin: '2rem' }}
                onClick={toggle}
            >Add Item</Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="item">Item Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="add shopping item"
                                onChange={changeHandler}
                            />
                            <Button
                                color="warning"
                                style={{ marginTop: '2rem' }}
                                block
                            >Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
export default connect(null, { addItem })(ItemModal)
