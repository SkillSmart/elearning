import React, {Component} from 'react';
import styled from 'styled-components';

class _VideoGallery extends Component {

    state = {
        selectedVideo: this.props.videos[0].src
    }

    handleSelect = (videoSrc) => {
        this.setState({
            selectedVideo: videoSrc
        })
        
    }

    render() {
        // destructure props
        let {className, videos} = this.props;

        return (
            <div className={className}>
                <div className="sidebar">
                    {videos.map(({title, headline, source}) => (
                        <div className="videoTab" onClick={() => this.handleSelect(source)}>
                            <h4>{title}</h4>
                            <p>{headline}</p>
                        </div>
                    ))}
                </div>
                <div className="player">
                    <iframe src={this.state.selectedVideo} width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}

export const VideoGallery = styled(_VideoGallery)`
    display: grid;
    grid-template-columns: minmax(20rem, 1fr) 1fr;
    /* grid-column-gap: 1rem; */


    .sidebar {
        padding: 0;
        display: grid;
        /* justify-content: start; */
        align-content: start;
        background: white;
    }


    .videoTab {
        box-shadow: -3rem -1rem 4rem -3rem rgba(0,0,0,.3);
        padding: .2rem 1.5rem;
        margin: 0;
        transition: background .3s ease;
        
        :hover {
            cursor: pointer;
            background: linear-gradient(
            to bottom right,
            lightblue, lightgrey
        );
        }
        :active {
            background-color: darkgrey;
        }
    }

    .player {
        width: 100%;
    }

`;

