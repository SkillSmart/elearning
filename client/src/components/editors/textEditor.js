import React, {Component} from 'react';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import styled from 'styled-components';

import {BlockStyleControls, InlineStyleControls} from '../editors';

class _TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.handleKeyCommand = this
      ._handleKeyCommand
      .bind(this);
    this.toggleBlockType = this
      ._toggleBlockType
      .bind(this);
    this.toggleInlineStyle = this
      ._toggleInlineStyle
      .bind(this);
    this.onTab = this
      ._onTab
      .bind(this);
  }

  focus = () => this
    .refs
    .editor
    .focus();
  onChange = (editorState) => {
    this.setState({editorState})
  }

  logState = () => {
    let content = this
      .state
      .editorState
      .getCurrentContent();
    this
      .props
      .storeDraft(convertToRaw(content));
  };

  _handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    e.preventDefault();
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  _toggleInlineStyle(inlineStyle) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
  };

  // Custom Overrrides for Code Style
  styleMap = {
    CODE: {
      backgroundColor: 'rgba(0,0,0,.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: "1.6rem",
      padding: 2
    }
  };

  getBlockStyle = (block) => {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote';
      default:
        return null;
    }
  }

  render() {
    const {editorState} = this.state;
    let {className} = this.props;
    return (
      <div className={className}>
        <div className="controls">
          <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType}/>
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}/>
          <button
           className="logButton"
           onClick={this.logState}>Save Draft</button>
        </div>
        <div className="editor" onClick={this.focus}>
          <Editor
            blockStyleFn={this.getBlockStyle}
            customStyleMap={this.styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Tell your story....."
            ref="editor"
            spellCheck={true}/>
        </div>
      </div>
    )
  }
}

export const TextEditor = styled(_TextEditor)`
    font-family: inherit;

    .controls {
      display: grid;
      border: 1px solid lightgrey;
      position: relative;

      .logButton {
        position: absolute;
        top: 0;
        right: 0;
        background: lightblue;
        padding: 1rem 1.5rem;
        border: none;

        :hover {
          cursor: pointer;
          box-shadow: 0 .3rem 1rem rgba(0,0,0, .2);
        }
      }
    }

    .editor {
      padding: 2.5rem 3.5rem;
      font-size: 1.6rem;

    } 
`;
