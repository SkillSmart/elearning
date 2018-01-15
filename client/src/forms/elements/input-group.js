import React from 'react';
import styled from 'styled-components';
import Aux from 'react-aux';

const _InputGroup = ({
    className,
    type,
    name,
    value,
    label,
    onChange
}) => {
    switch (type) {
        case "textarea":
            return (
                <div className={className}>
                    <textarea 
                        className="input"
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={label}
                        cols="20" rows="10">
                    </textarea>
                    <label className="label" htmlFor={name}>{label}</label>
                </div>
            );
        default:
            return (
                <div className={className}>
                    <input
                        type={type}
                        className="input"
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={label}/>
                    <label className="label" htmlFor={name}>{label}</label>
                </div>
            )
    }
}


// Basic Form InputGroup
export const InputGroup = styled(_InputGroup)`
    display: grid;
    padding: 1rem;

    .input {
        border: none;
        background: lightgrey;
        padding: 1rem 2rem;
        /* margin: 1rem; */
        font-size: 1.4rem;

        :focus > .label {
            transform: translateY(0);
            color: inherit;
        }
    }

    .label {
        padding-left: 2rem;
        font-size: 1.3rem;
        transform: translateY(-2.2rem);
        color: transparent;
    }
    

`;
