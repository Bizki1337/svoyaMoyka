import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import router from './router.js';

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.k9buf.mongodb.net/?retryWrites=true&w=majority';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
		app.listen(PORT, () => console.log('server started on port ' + PORT))
	} catch (e) {
		console.log(e)
	};
};

startApp();
