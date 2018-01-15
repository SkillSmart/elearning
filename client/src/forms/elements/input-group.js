import React from 'react';
import styled from 'styled-components';

const _InputGroup = ({className, type, name, value, label}) => (
    <div className={className}>
        <input type={type} className="input" name={name} value={value}/>
        <label className="label" htmlFor={name}>{label}</label>
    </div>
);

// Basic Form InputGroup
export const InputGroup = styled(_InputGroup)`
    display: grid;
    padding: 1rem;

    .input {
        border: none;
        background: lightgrey;
    }

    .label {

    }

`;
