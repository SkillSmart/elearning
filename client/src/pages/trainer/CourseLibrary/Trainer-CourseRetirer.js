import React, {Component} from 'react';
import styled from 'styled-components';

import {CardGallery} from '../../../components';

class _TrainerCourseRetirer extends Component {


    render() {
        let {className} = this.props;
        return (
            <div className={className}>
                <h2>Retire Courses</h2>

            </div>
        )
    }
}

export default styled(_TrainerCourseRetirer)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    grid-template-areas: 
        "course course course course"
        ". . draft draft"
        ". . . .";

    .courses {
        grid-area: course;
        margin: 2.5rem;

        &_statsCard {
            -webkit-perspective: 100rem;
            -moz-perspective: 100rem;
            height: 35rem;
            min-width: 25rem;
            border-radius: 3px;

            /* transition: all 1s ease-out; */

            &:hover .courses_statsCard_front {
                transform: rotateY( -180deg);
            }

            &:hover .courses_statsCard_back {
                transform: rotateY(0);
            }

            div {
                border-radius: 3px;
                transition: all 1s ease-out;
                transform-style: preserve-3d;
            }

            &_front {
                display: grid;
                grid-template-rows: repeat(3,  1fr);
                grid-template-areas: 
                    "stats"
                    "chart"
                    "details";

                background: white;
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;

                box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
                backface-visibility: hidden;


                .stats {
                    grid-area: stats;
                    display: grid;
                    grid-template-rows: .2fr minmax(7rem, .5fr);
                    grid-template-areas:
                    "title"
                    "perf";

                    ul { list-style: none; 
                        margin: 0;
                        padding: 0;
                    }
                    .title {
                        grid-area: title;
                        font-size: 1.8rem;
                        justify-self: center;
                    }

                    .performance {
                        grid-area: perf;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        /* align-self: center; */
                        /* justify-self: center; */
                        font-size: 1.4rem;
                      
                        li {
                            display: grid;
                            text-transform: uppercase;
                            font-size: 1.4rem;
                            justify-items: center;
                            
                            .stat {
                                color: green;
                                font-size: 2rem;
                                font-weight: 300;
                                /* margin: .4rem; */
                            }
                            
                        }
                        
                    }
                }

                .chart {
                    grid-area: chart;
                    
                    .graph {
                        width: 100%;
                    }
                }

                .details {
                    grid-area: details;
                    background: white;
                    display: grid;
                    grid-template-areas:
                    "enrollment status";

                    ul {
                        list-style: none;
                        font-size: 1.4rem;
                    }

                    .enrollment {
                        grid-area: enrollment;
                    }
                    .status {
                        grid-area: status;
                    }
                }

            }

            &_back {
                display: grid;

                background: linear-gradient(
                    to bottom right, orange, orangered
                );
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transform: rotateY(180deg);

                box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
                backface-visibility: hidden;

                .title {
                    justify-self: center;
                    align-self: center;
                    text-transform: uppercase;
                    color: white;
                    font-size: 2.4rem;
                    font-weight: 300;
                }

                button {
                    text-transform: uppercase;
                }
            }
            


        }
    }
`;
