import gql from 'graphql-tools';

const quickAddLesson = (data) => gql`
    mutation QuickAddLesson($data: LessonInput!) {
        createLesson($data) {
            id
            title
            headline
            summary
        }
    }
`;
const addLesson = (data) => gql`
    mutation AddLesson($data: LessonInput!) {
        createLesson($data) {
            id
            title
            headline
            summary
        }
    }
`;
const upgradeLesson = (data) => gql`
    mutation UpgradeLesson($id: ID!, $data:LessonInput!) {
        updateLesson($id, $data) {
            id
            title
            headline
            summary
        }
    }
`;
const removeLesson = (id) => gql`
    mutation RemoveLesson($id: ID!) {
        removeLesson($id) {
            id
            title
        }
    }
`;

export default {
    quickAddLesson,
    addLesson,
    upgradeLesson,
    removeLesson
}