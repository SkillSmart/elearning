import React from 'react';
import styled from 'styled-components';

const _CourseCard = ({
    className,
    course: {
        _id,
        title,
        img,
        headline,
        summary
    },
    onSelect
}) => (
    <article className={className} 
        >
        <img 
            src={img || "https://placehold.it/250x90"} 
            alt="" className="courseImg"/>
        <h3 className="title">{title}</h3>
            {/* <p>{headline}</p> */}
        <main className="summary">
            <div className="summary_text">
                <p>{summary}</p>
            </div>
            <div className="summary_stats">
                <span className="modules">7 Modules</span>
                <span className="lessons">146 Lessons</span>
                <span className="quizzes">18 Quizzes</span>
            </div>
        </main>
        <footer className="courseActions">
            <button 
                onClick={() => onSelect(_id)}
                className="button_cta">enroll</button>
        </footer>   

    </article>
);

export const CourseCard = styled(_CourseCard)`
    min-height: 25rem;
    box-shadow: 0 2rem 4rem rgba(0,0,0,.2);
    position: relative;
    background: white;
    transition: all .2s ease;
    display: grid;
    justify-items: space-between;

    :hover {
        cursor: pointer;
        /* transform: scale(1.02); */
    }

    .title {
        max-width: 70%;
        text-align: right;
        background-color: rgba(255,255,255,.7);
        position: absolute;
        padding: 1rem 2rem;
        bottom: 55%;
        right: 2%;

    }
    
    .courseImg {
        height: 15rem;
        width: 100%;
    }

    .summary {
        display: grid;
        grid-template-columns: 1fr .8fr;
        padding: 0 1.5rem;
        /* align-items: center; */
        /* justif-content: stretch; */

        &_text {
            align-self: start;
            font-size: 1.4rem;
        }

        &_stats {
            display: grid;
            padding: 1rem;
            font-size: 1.4rem;
        }
    }

    .courseActions {
        display: grid;
        .button_cta {
            background: lightblue;
            justify-self: stretch;
            padding: 1.8rem;
            border: none;
            text-transform: uppercase;
            transition: all .2s ease;
            /* align-self: end; */

            :hover {
                transform: scale(1.04);
                cursor: pointer;
                background: darkblue;
                color: white;
            }

            :active {
                transform: scale(1.01);
            }
        }
    }
`;
