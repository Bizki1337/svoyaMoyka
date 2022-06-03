import mongoose from 'mongoose';

const Book = new mongoose.Schema({
	client_name: {type: String, required: true},
	client_phone: {type: String, required: true},
	date: {type: String, required: true},
	time: {type: Number, required: true},
});

export default mongoose.model('Book', Book);