import React from 'react';
import { Form } from 'react-bootstrap';

const Checkout = () => {
    return (
      <div>
        <h2 className="text-center mt-5 mb-4">Welcome to the Course</h2>
        <Form className="container w-50 mx-auto margin-button">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    );
};

export default Checkout;