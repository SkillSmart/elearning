import gql from 'graphql-tag';

const getCourseListOverview = gql`
    query getCourseListOverview {
        courses {
            id
            title
            headline
        }
    }
`;
const getCourseListDetail = gql`
    query getCourseListDetail {
        courses {
            id
            title
            headline
            summary
            lessons {
                id
                title
            }
        }
    }
`;
const getCourseDetails = (id) => gql`
    query getCourseDetail($id: ID!) {
        courseById($id) {
            id
            title
            headline
            modules {
                id
                title
                headline
                lessons {
                    id
                    title
                    headline
                    summary
                }
            }
        }
    }
`;




export default {
    getCourseListOverview,
    getCourseListDetail,
    getCourseDetails,
}