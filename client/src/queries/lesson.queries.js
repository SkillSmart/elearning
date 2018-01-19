import gql from 'graphql-tag';

const getLessonListOverview = gql`
    query GetLessonListOverview {
        lessons {
            id
            title
            tags
            createdAt
            favs {
                id
            }
        }
    }
`;

export default {
    getLessonListOverview
}