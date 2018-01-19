const { makeExecutableSchema } = require('graphql-tools');
const Query = require('./queries');
const Mutation = require('./mutations');
const Subscription = require('./subscriptions')

// Bundle the Resolvers
const resolvers = {
    Query,
    Mutation,
    Subscription
};

const typeDefs = `

    input ModuleInput {
        title: String!
        headline: String!
    }

    input LessonInput {
        title: String!
        headline: String
        slug: String
        content: String
        lessonVideo: ID
        tags: [String]
        documents: [ID]
    }
    input CourseInput {
        title: String!
        headline: String
        summary: String
    }
    input VideoInput {
        title: String!
        url: String!
    }
    input DocumentInput {
        title: String!
        url: String!
    }

    type Query {
        # USER -------------
        userById(id: ID!): User
        users(limit: Int): [User!]

        # COURSE -----------
        courseById(id: ID!): Course
        courseByTitle(title: String!): Course
        courses(limit: Int): [Course]!

        # LESSON -----------
        lessonById(id: ID!): Lesson!
        lessons(limit: Int): [Lesson]!

        # MODULE ------------
        moduleById(id: ID!): Module
        modules(limit: Int): [Module!]

        # VIDEO -------------
        videoById(id: ID!): Video
        videos(limit: Int): [Video!]
    }

    type Mutation {
        # USER -------------
        signup(email: String!, password: String!): AuthPayload!
        login(email: String!, password: String!): AuthPayload!
        updateAccount(userId: ID!, data: String!): User! 
        removeAccount(id: ID!): User!
        
        # LESSON ------------
        createLesson(data: LessonInput!): Lesson!
        updateLesson(id: ID!, data: LessonInput!): Lesson!
        removeLesson(id: ID!): Lesson!
        favLesson(lessonId: ID!, userId: ID!): User!
        togglePublish(lessonId: ID!): Lesson!
        commentLesson(lessonId: ID!, userId: ID!, Comment: String!): Lesson!

        # MODULE ------------
        
        createModule(title: String!): Module!
        updateModule(id: ID!, data: ModuleInput!): Module!
        removeModule(id: ID!): Module!

        # COURSE ------------
        
        createCourse(title: String!): Course
        updateCourse(id: ID, data: CourseInput!): Course
        removeCourse(courseId: ID!, data: String): Course!
        favCourse(courseId: ID!, userId: ID!): Course!

        # VIDEO -------------
        createVideo(url: String!, title:String): Video!
        updateVideo(id: ID!, data:VideoInput!): Video!
        removeVideo(id: ID!): Video!
        ### ACTIONS:VIDEO
        associateVideo(videoId: ID!, targetId: ID!, targetClass: String!)
        
        # DOCUMENT ----------
        createDocument(title: String!): Document!
        updateDocument(id: ID!, data: DocumentInput!): Document!
        removeDocument(id: ID!): Document!
        ### ACTIONS:DOCUMENT
        favDocument(id: ID!, userId: ID!): User!
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
        title: String
        linkedCourses: [Course]
        linkedModules: [Module]\
        tags: [String]
        favs: [User]
        createdAt: String
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