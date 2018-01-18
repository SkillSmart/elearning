const models = require('../../models');

////////// USER
const signup = async (email, password) => {
    let user = models.User.findOne({email});
    if(user) throw new Error('Email already taken')
};
// const login = async (email, password) => {
//     let user = models.User.find({email});
//     if(!user.validatePassword(password)) {
//         throw new Error("Password or Username invalid")
//     };
//     return user;
// };
// const logout = (parentValue, args, context, info) => {
    
// }

/////////// COURSE
const createCourse = (_, args) => {
    let course = new models.Course(args);
    return course.save();
}




module.exports = {
    signup,
    // login,
}