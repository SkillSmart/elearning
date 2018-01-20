import React, {Component} from 'react';
import styled from 'styled-components';

import {InputGroup} from '../../../forms';

class _CourseCreator extends Component {

    state = {
        // HeadingFields
        title: '',
        slug: '',
        subtitle: '',
        summary: '',
        headline: '',
        
        // Commerce Fields
        baseprice: '',
        minprice: '',
        status: '',

        modules: [],
        lesson: [],
        quizzes: [],
        documents: []
    }

    // Form render helpers
    HeadingFields = [
        {
            name: 'title',
            type: 'text',
            label: 'Course Title'
        }, {
            name: 'subtitle',
            type: 'text',
            label: 'Subtitle'
        }, {
            name: 'headline',
            type: 'text',
            label: 'Headline'
        }, {
            name: 'summary',
            type: 'textarea',
            label: 'Course Summary'
        }
    ];

    CommerceFields = [
        {
            name: 'baseprice',
            type: 'number',
            label: 'Base Price'
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
        console.log(e.target.value);
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
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
                        <div className="header">
                            <h2 className="formfield-header">Course Information</h2>
                            {this
                                .HeadingFields
                                .map(field => <InputGroup onChange={this.handleChange} {...field} />)}
                        </div>

                        <div className="productDetails">
                            <h2 className="formfield-header">E-Commerce Settings</h2>
                            <div className="prices">
                            {this
                                .CommerceFields
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
                            This area can be used for drag and drop of exising items. On mouse over when
                            dragging it will show the place where the item will be positioned. On dropping,
                            it adds the item at the given location and moves all other items down in the
                            list. A linked list might do the job here. Each individual type of item will
                            have it's own presentation. Each item type has a list of options (a Quiz can be
                            locked inline to its parent element, etc...)
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

export default styled(_CourseCreator)`
    display: grid;
    grid-template-columns: minmax(25rem, .5fr) 1fr;
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
        grid-template-rows: minmax(15rem, 1fr) minmax(8rem, 1fr) minmax(40vh, 3fr);
        grid-template-areas:
            "header header header product"
            "req req req req"
            "content content content content";

        margin: 1.5rem;

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