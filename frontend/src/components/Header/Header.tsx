import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import Modal from 'components/Modal/Modal';

import headerIMG from 'assets/images/header.png';

import logoSVG from 'assets/icons/logo.svg';

import styles from './header.module.css';

interface IHeader {
    profile: string;
}

const Header = ({
    profile,
}: IHeader) => {

    const navigate = useNavigate();

    // example: () => navigate('/menu')

    const links = [
        {
            title: 'ГЛАВНАЯ',
            link: '/',
            active: true
        },
        {
            title: 'О НАС',
            link: '/'
        },
        {
            title: 'КОНТАКТЫ',
            link: '/'
        },
    ]

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [isOpenModal])

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal);
    };

	const [phoneAndPass, setPhoneAndPass] = useState<any>({});

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPhoneAndPass({
			...phoneAndPass,
			[e.target.id]: e.target.value
		})
	};

    const handleClick = () => {
        if (phoneAndPass.phone === '89515342928' && phoneAndPass.password === '89515342928') {
            localStorage.setItem('role', 'user');
            navigate('/profile')
        } else if (phoneAndPass.phone === 'admin' && phoneAndPass.password === 'admin') {
            navigate('/profile')
            localStorage.setItem('role', 'admin');
        } else {
            alert('Неправильные данные :(')
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.background} />
            <img
                className={styles.img} 
                src={headerIMG}
                alt='header'
            />
            <div className={styles.content}>
                <div className={styles.headerContent}>
                    <img 
                        className={styles.logo}
                        src={logoSVG}
                        alt='logo'
                    />
                    <div className={styles.links}>
                        {
                            links.map((item) => (
                                <div
                                    key={item.title}
                                    className={cn(
                                        styles.link,
                                        {[styles.active]: item.active}
                                    )}
                                >
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                    <div
                        onClick={toggleModal}
                        className={cn(
                            styles.profile,
                            styles.link,
                            styles.active
                        )}
                    >
                        {profile}
                    </div>
                </div>
                <div className={styles.bodyContent}>
                        <div className={styles.title}>Сияй как в последний раз <div className={styles.text}>ВСЕГДА.</div></div>
                        <div className={styles.subtitle}>Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s
                        </div>
                </div>
            </div>
            {
                isOpenModal && (
                    <Modal
                        onClose={toggleModal}
                    >
                        <div className={styles.modalWrapper}>
                            <div className={styles.modalTitle}>Авторизация</div>
                            <input 
                                onChange={(e: any) => onInputChange(e)} 
                                placeholder='Телефон'
                                id='phone'
                                className={styles.input}
                            />
                            <input 
                                onChange={(e: any) => onInputChange(e)} 
                                placeholder='Пароль'
                                id='password'
                                className={styles.input}
                            />
                            <button
                                onClick={handleClick}
                                className={styles.button}
                            >
                                Войти
                            </button>
                        </div>
                    </Modal>
                )
            }
        </div>
    );
};

export default Header;