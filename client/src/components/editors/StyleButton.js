import React, { Component } from 'react';
import styled from 'styled-components';

class _StyleButton extends Component {

    onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
    };

    
  render() {
      let {className, label, active} = this.props;

    return (
      <span 
        className={className + (active? '_active': '')} 
        onMouseDown={this.onToggle}>
        {label}
      </span>
    )
  }
}

export const StyleButton = styled(_StyleButton)`
    background: lightgrey;
    margin-right: .5rem;
    font-size: 1.2rem;
    padding: 1rem 1.3rem;
    transition: all .1s;

    :hover {
        background: grey;
        cursor: pointer;
    }

   &_active {
    background: grey;
    margin-right: .5rem;
    font-size: 1.2rem;
    padding: 1rem 1.3rem;
    transition: all .1s;

    :hover {
        background: lightgrey;
        cursor: pointer;
    }
       }
`;

