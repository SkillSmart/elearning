import React from 'react';
import {StyleButton} from '../../components';
import styled from 'styled-components';

const _InlineStyleControls = (props) => {

    const INLINE_STYLES = [
        {label: <strong>B</strong>, style: 'BOLD'},
        {label: <i>I</i>, style: 'ITALIC'},
        {label: <span style={{textDecoration: "underline"}}>U</span>, style: 'UNDERLINE'},
        {label: <span style={{textDecoration: ""}}>&lt; &gt;</span>, style: 'CODE'},
    ];

    let currentStyle = props.editorState.getCurrentInlineStyle();

    return (
        <div className={props.className}>
            {INLINE_STYLES.map(type => 
                <StyleButton 
                    className="styleButton"
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

export default styled(_InlineStyleControls)`

    margin: 1rem;
    margin-top: 2rem;
    height: 3.5rem;
    .styleButton {

    }
`;
