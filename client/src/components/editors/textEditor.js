import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import styled from 'styled-components';

class _TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }
  
  onChange = editorState => this.setState({editorState});

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }


  render() {
    let {className} = this.props;
    return (<Editor
      className={className}
      editorState={this.state.editorState}
      handleKeyCommand={this.handleKeyCommand}
      onChange={this.onChange}/>)
  }
}

export const TextEditor = styled(_TextEditor)`
    border: 1px solid green;
`;
