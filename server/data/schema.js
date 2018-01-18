const {makeExecutableSchema} = require('graphql-tools');
const Query = require('./queries');
const Mutation = require('./mutations');
const Subscription = require('./subscriptions');

// Bundle the resolvers
const resolvers = {
    Query,
    Mutation,
    Subscription
};

const typeDefs =`
type Query {
    # USER -------------
    user(firstName: String, lastName: String, id: String): User
    users(limit: Int): [User!]

    # COURSE -----------
    course(title: String, id: String): Course
    courses(limit: Int): [Course]

    # LESSON -----------
    lesson(title: String): Lesson
    lessons(limit: Int): [Lesson]

    # MODULE ------------
    module(title: String): Module
    modules(limit: Int): [Module!]
}

type Mutation {
    # USER -------------
    signup(email:String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    updateAccount(userId: ID!, data: String!): User! 
    deleteAccount(id: ID!): User!
    
    # LESSON ------------
    createLesson(title: String!): Lesson!
    updateLesson(id: ID!): Lesson!
    deleteLesson(id: ID!): Lesson!
    favLesson(lessonId: ID!, userId: ID!): User!
    commentLesson(lessonId: ID!, userId: ID!, Comment: String!): Lesson!

    # MODULE ------------
    createModule(title: String!): Module!
    updateModule(id: ID!, data: String): Module!
    deleteModule(id: ID!): Module!

    # COURSE ------------
    createCourse(title: String!): Course!
    updateCourse(id: ID, title: String, data: String): Course
    deleteCourse(courseId: ID!, data: String): Course!
    favCourse(courseId: ID!, userId: ID!): Course!

    # VIDEO -------------
    createVideo(url: String!, title:String!): Video
}

type Subscription {
    newCourse: String

}

type User {
    id: ID! @unique
    firstName: String
    lastName: String
    email: String! @unique
    password: String!
    roles: [String]
    favoriteCourses: [Course]
    favoriteModules: [Module]
    favoriteLessons: [Lesson]
    favoriteVideos: [Video]
}

type Course {
    id: ID! @unique
    title: String!
    authors: [User!]
    favs: [User!]
    ratings: [Rating!]
    published: Boolean
}

type Module {
    id: ID! @unique
    title: String!

}

type Lesson {
    id: ID! @unique
    title: String!
    linkedCourses: [Course!]
    linkedModules: [Module!]
    favs: [User!]
    published: Boolean
}


type Video {
    url: String
    title: String
    headline: String
    views: Int
    favs: [User]
    ratings: [Rating]
    notes: [Note]
}

type Document {
    title: String
}

type Note {
    title: String
}

type Rating {
    title: String
}

type AuthPayload {
    token: String
    user: User
}


`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;