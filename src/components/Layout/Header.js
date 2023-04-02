import { Fragment } from 'react';

import headerImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>MealsApp</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt='header-img' />
            </div>
        </Fragment>
    );
};

export default Header;