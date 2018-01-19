import gql from 'graphql-tag';

const quickAddLesson = gql`
    mutation QuickAddLesson($data: LessonInput!) {
        createLesson(data: $data) {
            id
            title
            headline
            summary
        }
    }
`;
const addLesson = gql`
    mutation AddLesson($data: LessonInput!) {
        createLesson(data: $data) {
            id
            title
            headline
            summary
        }
    }
`;
const upgradeLesson = gql`
    mutation UpgradeLesson($id: ID!, $data:LessonInput!) {
        updateLesson(id:$id, data: $data) {
            id
            title
            headline
            summary
        }
    }
`;
const removeLesson = gql`
    mutation RemoveLesson($id: ID!) {
        removeLesson(id: $id) {
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