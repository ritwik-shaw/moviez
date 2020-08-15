import logo from '../../images/logo.svg';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () =>
    <header>
        <Link to="/" replace>
            <h1>
                <img src={logo} alt="Movie logo" />
                <span className="title">ZATURA</span>
            </h1>
        </Link>
        <hr />
    </header>;

export default Header;