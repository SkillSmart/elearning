import gql from 'graphql-tools';

const quickAddCourse = (data) => gql`
    mutation QuickAddCourse($data: CourseInput!) {
        createCourse($data) {
            id
            title
            headline
        }
    }
`;
const addCourse = (data) => gql`
    mutation AddCourse($data: CourseInput!) {
        createCourse($data) {
            id
            title
            headline
            summary
            modules {
                id
                title
                headline
                summary
            }
            quizzes {
                id
                title
            }
        }
    }
`;
const updateCourse = (data) => gql`
    mutation UpdateCourse($id: ID!, $data: CourseInput!) {
        updateCourse(id: $id, data:$data) {
            id
            title
            headline
            summary
        }
    }
`;
const removeCourse = (id) => gql`
    mutation RemoveCourse($id: ID!) {
        removeCourse($id) {
            id
            title
        }
    }
`;

export default {
    quickAddCourse,
    addCourse,
    updateCourse,
    removeCourse,
};