import React from 'react';
import styled from 'styled-components';

const _ImageGallery = ({className, images}) => (
    <div className={className}>
        {images.map((img, i) => (
            <div className="image_wrapper">
                <img className="gallery_image" src={img} alt={`Gallery Image ${i}`}/>
            </div>
        ))}
    </div>
);

export const ImageGallery = styled(_ImageGallery)`
    display: grid;
`;


_ImageGallery.defaultProps = {
    images: [
        {
            alt: 'IphoneWatch on Mens Arm',
            src: "https://unsplash.com/photos/8b1cWDyvT7Y"
        }
    ]
}
