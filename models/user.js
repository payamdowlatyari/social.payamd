import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: { type: String },
})

var User = mongoose.model('User', userSchema);

export default User;