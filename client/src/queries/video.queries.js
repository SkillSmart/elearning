import gql from 'graphql-tag';

const getVideoListOverview = gql`
    query getVideoListOverview {
        videos {
            id
            title
        }
    }
`;


export default {
    getVideoListOverview
}