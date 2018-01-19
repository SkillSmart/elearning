import gql from 'graphql-tag';

const addVideo = gql`
    mutation AddVideo($videoUrl: String!, $videoTitle: String!) {
        createVideo(videoUrl: $videoUrl, title: $videoTitle) {
            id
            videoUrl
            title
        }
    }
`;
const addVideoToObject = gql`
    mutation AddVideoToObject($videoId: ID!, $targetId: ID!, $target: String!) {
        addVideo(videoId: $videoId, targetClass: $target, targetId: $lessonId) {
            id
        }
    }
`;

export default {
    addVideo,
    addVideoToObject,
}