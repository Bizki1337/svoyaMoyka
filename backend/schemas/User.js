import mongoose from 'mongoose';

const User = new mongoose.Schema({
	client_name: {type: String, required: true},
	client_phone: {type: String, required: true},
	client_password: {type: String, required: true},
	role: {type: String, required: false},
});

export default mongoose.model('User', User);