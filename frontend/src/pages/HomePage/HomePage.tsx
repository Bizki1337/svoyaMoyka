import Introduction from './Frames/Introduction/Introduction';
import AboutUs from './Frames/AboutUs/AboutUs';
import Header from 'components/Header/Header';

import styles from './homePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Header profile='ВХОД' />
            <Introduction />
            <AboutUs />
            <Introduction />
            <AboutUs />
            <Introduction />
            <AboutUs />
            <Introduction />
            <AboutUs />
        </div>
    );
};

export default HomePage;