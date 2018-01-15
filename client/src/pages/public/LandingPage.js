import React from 'react';
import styled from 'styled-components';

import {FeatureCard, VideoGallery, PeopleGallery} from '../../components';

const _LandingPage = ({className, features, videos}) => (
    <div className={className}>
        <div className="hero">
            <h1>The Negotiation Academy</h1>
            <h3>Online Negotiation Training for the Lawyers of Tomorrow</h3>
            <button>Start Learning</button>
        </div>

        <div className="threeSteps">
            {features.map(({img, title, features}) => (<FeatureCard img={img} title={title} features={features}/>))}
        </div>

        <section className="trainer">
            <h2 className="trainer_title">The Trainer</h2>
            <div className="trainer_content">
                <div>
                    <h4 className="trainer_name">
                        Dr. Claudia Winkler, LL.M (Harvard)
                    </h4>
                    <p className="trainer_story">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo optio,
                        eveniet alias vitae a omnis ullam ab! Soluta consequatur nobis vitae,
                        praesentium ipsa aperiam minus corporis ut molestiae voluptates?
                    </p>
                    <button>Read more</button>
                </div>
                <img src="https://placehold.it/220x360" alt="" className="trainer_img"/>
            </div>
        </section>

        <section className="video-library">
            <h2>Dive in</h2>
            <VideoGallery videos={videos}/>
        </section>

        <section className="experts-gallery">
            <h2 className="gallery_title">Expert Insights</h2>
            <PeopleGallery />
        </section>

        <footer className="footer"></footer>
    </div>
);

export const LandingPage = styled(_LandingPage)`
    display: grid; 
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
        "head head head head head head head head"
        ". step step step step step step ."
        ". train train train train train train ."
        ". video video video video video video ."
        ". exp exp exp exp exp exp ."
        ". side side main main main main . "
        "foot foot foot foot foot foot foot foot";

    .hero {
        margin-top: -6.3rem;
        background: linear-gradient(
            to bottom right, darkblue, white
        );

        display: grid;
        height: 85vh;
        grid-area: head;
        justify-content: center;
        align-content: center;
        z-index: -1;

        button {
            justify-self: center;
            padding: .6rem 2.5rem;
        }
    }

    .threeSteps {
        grid-area: step;
        display: grid;
        grid-gap: 3rem;
        grid-template-columns: repeat(3, minmax(20rem, 35rem));
        justify-content: center;
        align-items: center;
        margin-top: -9rem;
        font-size: 1.6rem;
    }

    .trainer {
        display: grid;
        grid-area: train;
        margin-top: 20rem;

        &_img {
            margin: -9rem 3.5rem 0 3.5rem;
        }

        &_title {
            justify-self: center;
            font-size: 2.4rem;
        }

        &_content {
            display: flex;
            justify-content: space-between;

        }

        &_name {
            font-size: 2rem;
        }

        &_story {

        }
        }
    }

    .video-library {
        grid-area: video;
        padding: 15rem 0;
    }

    .experts-gallery {
        display: grid;
        grid-area: exp;
        /* background: linear-gradient(
            to bottom right,
            white, violet
        ); */
        padding: 15rem 0;
        height: 40rem;

        .gallery_title {
            justify-self: center;
        }

    }

    .footer {
        display: grid;
        grid-area: foot;
        justify-items: center;
        height: 25rem;
    }
`;

_LandingPage.defaultProps = {
    features: [
        {
            title: "Prepare",
            img: "https://placehold.it/280x180",
            features: ["100+ video lectures", "200+ quiz questions", "7 Specialized Modules", "5 Negotiation Exercises"]
        }, {
            title: "Learn",
            img: "https://placehold.it/280x180",
            features: ["100+ video lectures", "200+ quiz questions", "7 Specialized Modules", "5 Negotiation Exercises"]
        }, {
            title: "Negotiate",
            img: "https://placehold.it/280x180",
            features: ["100+ video lectures", "200+ quiz questions", "7 Specialized Modules", "5 Negotiation Exercises"]
        }
    ],
    videos: [
        {
            source: "https://player.vimeo.com/video/68208871",
            title: 'The Master Negotiator Course',
            headline: 'Full Semester fully online'
        },
        {
            source: "https://player.vimeo.com/video/68208870",
            title: 'The Master Mediatior Course',
            headline: 'Full Semester fully online'
        },
        {
            source: "https://player.vimeo.com/video/68208869",
            title: 'Negotiating hard cases',
            headline: 'Full Semester fully online'
        },
        {
            source: "https://player.vimeo.com/video/68208868",
            title: 'The Master Negotiator Course',
            headline: 'Full Semester fully online'
        },
    ]
}