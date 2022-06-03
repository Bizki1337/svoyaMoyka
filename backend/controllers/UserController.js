import User from '../schemas/User.js';

class Usercontroller {
    async create(req, res) {
        try {
            const {id, client_name, client_phone, client_password, role} = req.body;
			res.header("Access-Control-Allow-Origin", "*");
            const user = await User.create({
                id,
                client_name,
                client_phone,
                client_password,
				role
            });
            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        };
    };

	async getAll(req, res) {
		try {
			const users = await User.find();
			res.header("Access-Control-Allow-Origin", "*");
			return res.json(users);
		} catch (e) {
			res.status(500).json(e);
		};
	};

	// async getByDate(req, res) {
	// 	try {
	// 		const {date} = req.params;
	// 		res.header("Access-Control-Allow-Origin", "*");
	// 		if (!date) {
	// 			res.status(400).json({message: 'Дата не указана'})
	// 		};
	// 		const book = await Book.find({date: date});
	// 		return res.json(book);
	// 	} catch (e) {
	// 		res.status(500).json(e);
	// 	};
	// };

	// async getByPhone(req, res) {
	// 	try {
	// 		const {phone} = req.params;
	// 		res.header("Access-Control-Allow-Origin", "*");
	// 		if (!phone) {
	// 			res.status(400).json({message: 'Телефон не указан'})
	// 		};
	// 		const book = await Book.find({client_phone: phone});
	// 		return res.json(book);
	// 	} catch (e) {
	// 		res.status(500).json(e);
	// 	};
	// };

	// /* редактирование записи для админ-панели */
	// async update(req, res) {
	// 	try {
	// 		const book = req.body;
	// 		res.header("Access-Control-Allow-Origin", "*");
	// 		if (!book._id) {
	// 			res.status(400).json({message: 'Id не указан'})
	// 		}
	// 		const updatedBook = await Book.findByIdAndUpdate(book._id, book, {new: true});
	// 		return res.json(updatedBook);
	// 	} catch (e) {
	// 		res.status(500).json(e);
	// 	};
	// };

	// /* Удаление записи для админ-панели */
	// async delete(req, res) {
	// 	try {
	// 		const {id} = req.params;
	// 		if (!id) {
	// 			res.status(400).json({message: 'Id не указан'})
	// 		}
	// 		const book = await Book.findByIdAndDelete(id);
	// 		return res.json(book);
	// 	} catch (e) {
	// 		res.status(500).json(e);
	// 	};
	// };
};

export default new Usercontroller();