import gql from 'graphql-tag';

const quickAddCourse =  gql`
    mutation QuickAddCourse($data: CourseInput!) {
        createCourse(data: $data) {
            id
            title
            headline
        }
    }
`;
const addCourse =  gql`
    mutation AddCourse($data: CourseInput!) {
        createCourse(data: $data) {
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
const updateCourse =  gql`
    mutation UpdateCourse($id: ID!, $data: CourseInput!) {
        updateCourse(id: $id, data:$data) {
            id
            title
            headline
            summary
        }
    }
`;
const removeCourse = gql`
    mutation RemoveCourse($id: ID!) {
        removeCourse(id: $id) {
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