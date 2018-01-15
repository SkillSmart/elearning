import React, {Component} from 'react';
import styled from 'styled-components';

class _PeopleGallery extends Component {

    state = {
        selectedPerson: this.props.people[0]
    }

    render() {
        let {className, people} = this.props;
        let {fullName, img, summary, title} = this.state.selectedPerson;
        return (
            <div className={className}>
                <div className="person_hero">
                    <img src={img} alt=""/>
                    <div className="details">
                        <h4>{fullName}</h4>
                        <span>{title}</span>
                    </div>
                </div>
                <div className="gallery">
                    {people.map(person => (
                        <div className="gallery_image">
                            <img src={person.img} alt=""/>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}

export const PeopleGallery = styled(_PeopleGallery)`
    border: 1px solid lightgrey;
    display: grid;
    grid-template-columns: 1fr .5fr;
    box-shadow: 0 1rem 2rem rgba(0,0,0, .5);

    .person_hero {
        position: relative;

        .details {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 3rem;
            left: 5rem;

            background: rgba(255,255,255, .7);
            padding: .5rem 3.5rem;

            &::nth-child(1) {
                margin: 2rem;
            }
        }
    }

    .gallery {
        display: grid;
        grid-template-columns: auto-fill;
        align-content: space-around;
        margin-left: -20rem;
        position: relative;
        padding: 1rem;
        z-index: 100;

        background: rgba(0,0,0,.8);

        .gallery_image {
            width: 20rem;
            border: 1px solid transparent;
            /* border: 1px solid red; */
            transition: 
                scale .3s ease-in,
                border .4s ease-out;
            ;


            img {
                width: 100%;
            }
            :hover {
                border: 1px solid white;
                cursor: pointer;
                transform: scale(1.02);
            }
        }
    }
    
`;

_PeopleGallery.defaultProps = {
    people: [
        {
            firstName: "Claudia",
            lastName: "Winkler",
            fullName: "Claudia Winkler",
            location: "Austria",
            continent: "Europe",
            title: "Dr. LL.M (Harvard)",
            summary: `The Negotiation Academy is an initiative by Claudia Winkler. After her studies and work in the UK and the US, Claudia returned to Europe with the 
            goal of making negotiation training a firm part of legal education and practice. An energetic and creative communicator she uses her top legal 
            educations with her international legal and business experience to bring negotiation training to all corners of the world. In doing so, 
            Claudia has trained 1,000s of lawyers, entrepreneurs, judges, public defenders and students throughout the world, including the US, Europe,
             Africa, Australia and Asia.`,
            img: "http://www.claudiawinkler.net/statics/pictures/main_carousel_0.jpg"
        }, {
            firstName: "Mark",
            lastName: "Twain",
            fullName: "Claudia Winkler",
            location: "Austria",
            continent: "Europe",
            title: "Dr. LL.M (Harvard)",
            summary: `The Negotiation Academy is an initiative by Claudia Winkler. After her studies and work in the UK and the US, Claudia returned to Europe with the 
            goal of making negotiation training a firm part of legal education and practice. An energetic and creative communicator she uses her top legal 
            educations with her international legal and business experience to bring negotiation training to all corners of the world. In doing so, 
            Claudia has trained 1,000s of lawyers, entrepreneurs, judges, public defenders and students throughout the world, including the US, Europe,
             Africa, Australia and Asia.`,
            img: "http://www.claudiawinkler.net/statics/pictures/main_carousel_0.jpg"
        }, {
            firstName: "Mark",
            lastName: "Twain",
            fullName: "Claudia Winkler",
            location: "Austria",
            continent: "Europe",
            title: "Dr. LL.M (Harvard)",
            summary: `The Negotiation Academy is an initiative by Claudia Winkler. After her studies and work in the UK and the US, Claudia returned to Europe with the 
            goal of making negotiation training a firm part of legal education and practice. An energetic and creative communicator she uses her top legal 
            educations with her international legal and business experience to bring negotiation training to all corners of the world. In doing so, 
            Claudia has trained 1,000s of lawyers, entrepreneurs, judges, public defenders and students throughout the world, including the US, Europe,
             Africa, Australia and Asia.`,
            img: "http://www.claudiawinkler.net/statics/pictures/main_carousel_0.jpg"
        }, {
            firstName: "Mark",
            lastName: "Twain",
            fullName: "Claudia Winkler",
            location: "Austria",
            continent: "Europe",
            title: "Dr. LL.M (Harvard)",
            summary: `The Negotiation Academy is an initiative by Claudia Winkler. After her studies and work in the UK and the US, Claudia returned to Europe with the 
            goal of making negotiation training a firm part of legal education and practice. An energetic and creative communicator she uses her top legal 
            educations with her international legal and business experience to bring negotiation training to all corners of the world. In doing so, 
            Claudia has trained 1,000s of lawyers, entrepreneurs, judges, public defenders and students throughout the world, including the US, Europe,
             Africa, Australia and Asia.`,
            img: "http://www.claudiawinkler.net/statics/pictures/main_carousel_0.jpg"
        }
    ]
}
