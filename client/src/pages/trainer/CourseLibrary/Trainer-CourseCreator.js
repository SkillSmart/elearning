import React, {Component} from 'react';
import styled from 'styled-components';

import {InputGroup} from '../../../components';


// Form render helpers


class _CourseCreator extends Component {
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
                    <form submit={this.onSubmit} className="form-wrapper">
                    <div className="header">
                        <h1>The Course Title</h1>
                        <h3>Deserunt molestias odio nam ipsa maiores et commodi modi</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestias
                            odio nam ipsa maiores et commodi modi aspernatur veritatis nostrum minima,
                            assumenda eligendi doloribus ea perspiciatis fugiat pariatur quia ab. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Provident est quo, eius atque
                            laboriosam consequuntur reiciendis nisi nam ducimus autem tempore ratione ex
                            aspernatur, amet repudiandae mollitia blanditiis eaque. Doloribus.
                        </p>
                    </div>

                    <div className="productDetails">
                        <h2>E-Commerce Settings</h2>
                        <ul>
                            <li>Price Standard</li>
                            <li>Price Min</li>
                            <li>Course Starts (interval)</li>
                            <li>Price</li>
                        </ul>

                        <button>publish / unpublish</button>
                        <button>Save</button>
                    </div>

                    <div className="requirements">
                        <div className="must-haves">
                            <h5>Must haves</h5>
                            <ul>
                                <li>Spoken English</li>
                                <li>Basic experience in Law</li>
                                <li>Printer</li>
                            </ul>
                        </div>
                        <div className="should-haves">
                            <h5>Should haves</h5>
                            <ul>
                                <li>Spoken English</li>
                                <li>Basic experience in Law</li>
                                <li>Printer</li>
                            </ul>
                        </div>
                        <div className="will-haves">
                            <h5>Will haves</h5>
                            <ul>
                                <li>Spoken English</li>
                                <li>Basic experience in Law</li>
                                <li>Printer</li>
                            </ul>
                        </div>
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

    div {
        padding: 2rem;
    }
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
            background: white;
        }

        .productDetails {
            grid-area: product;
            background: lightgrey;
        }

        .requirements {
            grid-area: req;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            background: white;
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