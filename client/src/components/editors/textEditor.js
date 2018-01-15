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

  // KEYBOARD HOOKS
  _onTab = (e) => {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType = (blockType) => {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType      
      )
    );
  }

  _toggleInlineStyle = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  // BUTTON COMMANDS
  // Inline Textstyles
  _onBoldClick = () => {
    this._toggleInlineStyle('BOLD');
  }
  _onItalicClick = () => {
    this._toggleInlineStyle('ITALIC');
  }
  _onUnderlineClick = () => {
    this._toggleInlineStyle('UNDERLINE');
  }
  _onLinetroughClick = () => {
    this._toggleInlineStyle('LINE-TROUGH');
  }
  _onOverlineClick = () => {
    this._toggleInlineStyle('OVERLINE');
  }
  // Headings
  _onH1Click = () => {
    this._toggleInlineStyle('ITALIC');
  }
  _onH2Click = () => {
    this._toggleInlineStyle('ITALIC');
  }
  _onH3Click = () => {
    this._toggleInlineStyle('ITALIC');
  }
  _onH4Click = () => {
    this._toggleInlineStyle('ITALIC');
  }
  _onH5Click = () => {
    this._toggleInlineStyle('ITALIC');
  }
  _onH6Click = () => {
    this._toggleInlineStyle('ITALIC');
  }

  render() {
    let {className} = this.props;
    return (
      <div className={className}>
        <div className="controls">
          <button onClick={this._onBoldClick}><strong>B</strong></button>
          <button onClick={this._onItalicClick}><i>I</i></button>
          <button onClick={this._onUnderlineClick}><span style={{textDecoration: "underline"}}>U</span></button>
          <button onClick={this._onLinetroughClick}><span style={{textDecoration: "line-through"}}>U</span></button>
          <button onClick={this._onOverlineClick}><span style={{textDecoration: "overline"}}>U</span></button>
          <button onClick={this._onH1Click}>H1</button>
          <button onClick={this._onH2Click}>H2</button>
          <button onClick={this._onH3Click}>H3</button>
          <button onClick={this._onH4Click}>H4</button>
          <button onClick={this._onH5Click}>H5</button>
          <button onClick={this._onH6Click}>H6</button>
        </div>
        <Editor
          className="editorField"
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}/>
      </div>
    )
  }
}

export const TextEditor = styled(_TextEditor)`
    border: 1px solid green;
    padding: 2.5rem;
    font-family: inherit;
    font-size: 1.6rem;

    .controls {
      display: flex;
      border-bottom: 1px solid lightgrey;
      width: 70%;
      
      button {
        border: none;
        padding: .5rem 1rem;
        margin-right: .5rem;
      }
    }
`;
