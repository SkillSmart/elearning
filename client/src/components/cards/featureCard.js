import React from 'react';
import styled from 'styled-components';

const _FeatureCard = ({className, img, title, features}) => (
    <div className={className}>
        <img className="card_img" src={img} alt="Some Image"/>
        <h4 className="card_title">{title}</h4>
        <ul className="feature_list">
            {features.map(feature => (
                <li className="feature">{feature}</li>
            ))}
        </ul>
    </div>
);

export const FeatureCard = styled(_FeatureCard)`
    display: grid;
    justify-content: center;
    text-align: center;
    background: white;
    box-shadow: 0 1rem 2rem rgba(0,0,0, .1);

    .card_img {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .card_title {
        font-size: 2.4rem;
        justify-self: center;
        border-bottom: 1px solid grey;
        width: 70%;
    }

    .feature_list {
        list-style: none;
        padding: 1rem;
        
        .feature {
            :not(:last-child) {
                margin-bottom: .6rem;
            }
        }
        /* text-align: center; */
    }
`;
