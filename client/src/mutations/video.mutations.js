import gql from 'graphql-tag';


const addVideo = gql`
    mutation AddVideo($video: VideoInput!) {
        createVideo(video: $video) {
            id
            videoUrl
            videoTitle
        }
    }
`;
const addVideoToObject = gql`
    mutation AddVideoToObject($videoId: ID!, $targetId: ID!, $targetClass: String!) {
        associateVideo(videoId: $videoId, targetClass: $targetClass, targetId: $lessonId) {
            id
        }
    }
`;

export default {
    addVideo,
    addVideoToObject,
}