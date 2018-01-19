import gql from 'graphql-tools';

const getDocListOverview = gql`
    query DocumentListQuery {
        documents {
            id
            title
        }
    }
`;

const getDocListDetail = gql`
    query DocumentListDetailQuery {
        documents {
            id
            title
            # TODO: Add all attributes for complete fetch
        }
    }
`;


export default {
    getDocListOverview,
    getDocListDetail,
};