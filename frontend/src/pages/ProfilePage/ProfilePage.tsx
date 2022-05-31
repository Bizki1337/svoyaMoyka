import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from 'components/Header/Header';

import styles from './profilePage.module.css';

const ProfilePage = () => {

    const [state, setState] = useState<any>();

    useEffect(() => {
        const userRole = localStorage.getItem('role');
        let url, parametr;
        if (userRole === 'user') {
            parametr = '89515342928';
            url = `http://localhost:5000/api/books/phone/${parametr}`;
        } else {
            url = 'http://localhost:5000/api/books';
        };
		axios.get(url).then((resp) => {
			const data = resp.data;
			setState(data);
		});
	}, []);

    return (
        <div>
            <Header profile='ВАШ КАБИНЕТ' />
            <div className={styles.content}>
                <div className={styles.title}>
                    Ваша история
                </div>
                {
                    state && state.map((item: any) => (
                        <div
                            className={styles.wrapper}
                            key={item._id}
                        >   
                            <div className={styles.item}>
                                <div>
                                    <div>Имя: </div>
                                    <div className={styles.fix}>{item.client_name}</div>
                                </div>
                                <div>
                                    <div>Телефон: </div>
                                    <div className={styles.fix}>{item.client_phone}</div>
                                </div>
                                <div>
                                    <div>Дата: </div>
                                    <div className={styles.fix}>{item.date}</div>
                                </div>
                            </div>
                            <div className={styles.border}>
                                <div>---</div>
                                <div className={styles.circle}>
                                    <div className={styles.miniCircle} />
                                </div> 
                                <div>---</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProfilePage;