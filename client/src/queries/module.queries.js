import gql from 'graphql-tag';

const getModuleListOverview = gql`
    query getModuleListOverview {
        modules {
            id
            title
        }
    }
`;


export default {
    getModuleListOverview
}