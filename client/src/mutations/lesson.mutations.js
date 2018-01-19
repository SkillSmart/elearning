import gql from 'graphql-tag';

const quickAddLesson = gql`
    mutation CreateLesson($lesson: LessonInput!){
        createLesson(lesson: $lesson) {
          id
          
        }
      }
`;

const addLesson = gql`
    mutation AddLesson($lesson: LessonInput!) {
        createLesson(lesson: $lesson) {
            id
            title
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