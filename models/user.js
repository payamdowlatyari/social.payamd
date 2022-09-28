import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
})

var User = mongoose.model('User', userSchema);

export default User;