import React, {Component} from 'react';
import styled from 'styled-components';
// Hook up Graphql
import {graphql} from 'react-apollo';
import mutations from '../../../mutations';
// Components
import ReactPlayer from 'react-player';
import {TextEditor} from '../../../components';
import {InputGroup} from '../../../forms';


class _LessonCreator extends Component {

    state = {
        // VideoFields
        videoTitle: '',
        videoUrl: '',

        // HeadingFields
        title: '',
        headline: '',
        slug: '',
        tags: [],
        
        // Commerce Fields
        baseprice: '',
        minprice: '',
        status: '',
        createdAt: '',
        assigned: [],

        // Text Content
        content: {},
        modules: [],
        lesson: [],
        quizzes: [],
        documents: []
    }

    // Form render helpers

    VideoFields = [
        {
            name: 'videoTitle',
            type: 'text',
            label: 'Video Title',
        }, {
            name: 'videoUrl',
            type: 'text',
            label: 'Video URL'
        }
    ]
    HeadingFields = [
        {
            name: 'title',
            type: 'text',
            label: 'Lesson Title'
        }, 
        { 
            name: 'slug',
            type: 'text',
            label: 'Lesson Slug'
        },
        {
            name: 'headline',
            type: 'text',
            label: 'Headline'
        }, 
        {
            name: 'summary',
            type: 'textarea',
            label: 'Lesson Summary'
        }, 
        {
            name: 'tags',
            type: 'text',
            label: 'Lesson Tags'
        }
    ];

    AssociationFields = [
        {
            name: '',
            type: 'number',
            label: ''
        }, {
            name: 'minprice',
            type: 'number',
            label: 'Minimum price'
        }
    ];

    SkillFields = [
        {
            name: 'musthaves',
            type: 'textarea',
            label: 'Must have Prerequisites'
        },
        {
            name: 'shouldhaves',
            type: 'textarea',
            label: 'Should have Prerequisites'
        },
        {
            name: 'willhaves',
            type: 'textarea',
            label: 'Will have Skills after completion'
        },
    ];


    // Form Handlers
    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    storeDraft = (content) => {
        this.setState({content});
        console.log(this.state.content);
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }


    // 
    render() {
        let {className} = this.props;

        return (
            <div className={className}>
                <aside className="sidebar">
                    <div className="sidebar_toolbar">
                        <span>X</span>
                    </div>
                    <h2>The Sidebar</h2>

                    <div className="toolbox modulebox">
                        <h3>Add a module</h3>
                    </div>

                    <div className="toolbox lessonbox">
                        <h3>Add a lesson</h3>
                    </div>

                    <div className="toolbox quizbox">
                        <h3>Add quizzez</h3>
                    </div>
                </aside>
                <main className="workbench">
                    <form onSubmit={this.onSubmit} className="form-wrapper">
                        <div className="video">
                            <h2 className="formfield-header">Video Content</h2>
                            {this.state.videoUrl
                            ? <ReactPlayer url={this.state.videoUrl} playing /> : null }
                            {this.VideoFields.map(field => <InputGroup onChange={this.handleChange} {...field} />)}
                        </div>
                        <div className="header">
                            <h2 className="formfield-header">Lesson Information</h2>
                            {this
                                .HeadingFields
                                .map(field => <InputGroup onChange={this.handleChange} {...field} />)}
                        </div>

                        <div className="productDetails">
                            <h2 className="formfield-header">Associated Courses</h2>
                            <div className="prices">
                            {this
                                .AssociationFields
                                .map(field => <InputGroup onChange={this.handleChange} {...field}/>)}
                            </div>

                            <button>publish / unpublish</button>
                            <button type="submit">Save</button>
                        </div>

                        <div className="requirements">
                            <h2 className="formfield-header">Requirements</h2>
                            {this
                                    .SkillFields
                                    .map(field => <InputGroup onChange={this.handleChange} {...field}/>)}
                        </div>

                        <div className="layout">
                            <TextEditor 
                                editorState={this.state.editorState}
                                onChange={this.onTextChange}
                                storeDraft={this.storeDraft}
                            />
                            {/* This area can be used for drag and drop of exising items. On mouse over when
                            dragging it will show the place where the item will be positioned. On dropping,
                            it adds the item at the given location and moves all other items down in the
                            list. A linked list might do the job here. Each individual type of item will
                            have it's own presentation. Each item type has a list of options (a Quiz can be
                            locked inline to its parent element, etc...) */}
                        </div>
                    </form>
                </main>
                <footer className="footer">
                    <h3>The Footer</h3>
                </footer>
            </div>
        )
    }
}

const styledLessonCreator = styled(_LessonCreator)`
    display: grid;
    grid-template-columns: minmax(20rem, .2fr) 1fr;
    grid-template-areas:
        "side main"
        "foot foot";

    /* > div {
        padding: 2rem;
    } */
    .sidebar {
        grid-area: side;
        display: grid;
        justify-content: stretch;
        align-content: start;
        height: 100%;
        background: darkgrey;
        display: grid;

        &_toolbar {
            align-self: end;
            background: black;
        }

        .toolbox {
            height: 20rem;
            background: white;
            margin: .8rem;
        }
    }
    

    .workbench {

        .form-wrapper {
            grid-area: main;
            display: grid;
            grid-gap: 1.5rem;
            grid-template-rows: minmax(10rem, min-content) minmax(10rem, min-content) minmax(8rem, 1fr) minmax(40vh, 3fr);
            grid-template-areas:
                "video video video product"
                "header header header product"
                "req req req req"
                "content content content content";

            margin: 1.5rem;
        }

        .video {
            grid-area: video;
            display: grid;
            background: darkgrey;
            color: white;
        }

        .header {
            grid-area: header;
            display: grid;
            background: white;

        }

        .productDetails {
            grid-area: product;
            display: grid;
            align-content: start;
            grid-template-areas:
                "header"
                "prices"
                "actions";
            background: lightgrey;

            h2 {
                grid-area: "header";
            }

            .prices {
                grid-area: "prices";
                display: grid;
                grid-template-rows: repeat(2, min-content);

            }

            .actions {
                grid-area: "actions";
                justify-self: stretch;

            }

        }

        .requirements {
            grid-area: req;
            display: grid;
            grid-template-rows: min-content min-content;
            grid-template-columns: repeat(3, 1fr);
            background: white;

            
        }

        .formfield-header {
            grid-row: 1 / 2;
            grid-column: 1 / -1;
            justify-self: end;
            margin: 1rem 1.5rem;
            font-size: 1.6rem;

        }
        .layout {
            grid-area: content;
            background: white;
        }
    }

    .footer {
        grid-area: foot;
    }
`;



// Hook up Data Services
export default graphql(mutations.lesson.addLesson)(styledLessonCreator);