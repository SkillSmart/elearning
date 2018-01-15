import React from 'react';
import styled from 'styled-components';

const _CourseCardLarge = ({
    className,
    course: {
        title,
        img,
        headline,
        summary
    }
}) => (
    <article className={className}>
        <img src={img || "https://placehold.it/250x90"} alt="" className="courseImg"/>
        <h3 className="title">{title}</h3>
        <main className="courseSummary">
            <p>{headline}</p>
            <p className="courseSummary_text">{summary}</p>
        </main>
        <footer className="courseStats">
            <div className="usage">
                <span className="usage_trials">
                    235 Trials
                </span>
                <span className="usage_subscriber">
                    540 Subscribers
                </span>
            </div>
            <div className="revenue">
                <span className="revenue_overall">
                    $3460
                </span>
                <span className="revenue_currentPeriod">
                    $245 this month
                </span>
            </div>
        </footer>

    </article>
);

export const CourseCardLarge = styled(_CourseCardLarge)`
    min-height: 25rem;
    box-shadow: 0 2rem 4rem rgba(0,0,0,.2);
    position: relative;

    .title {
        width: 50%;
        text-align: right;
        background-color: rgba(255,255,255,.7);
        position: absolute;
        padding: 1rem 2rem;
        top: 9rem;
        right: 0;

    }
    
    .courseImg {
        height: 15rem;
        width: 100%;
    }

    .courseSummary {

        &_text {
            padding: 1rem;

        }
    }

    .courseStats {
        display: grid;
        margin: 1rem;
        grid-template-columns: repeat(2, 1fr);

        .usage {
            display: grid;
            grid-template-rows: repeat(2, 1fr);
        }

        .revenue {
            display: grid;
            grid-template-rows: repeat(2, 1fr);
        }
    }
`;
