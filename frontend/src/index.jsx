import React from 'react';
import { render } from 'react-dom';
import Form from './Form.jsx'
import './http'

render(
    <Form/>,
    document.querySelector('[data-js="app"]')
);