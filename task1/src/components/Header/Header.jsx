import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';

import useAuth from '../../hooks/useAuth.js';

import BtnExit from './BtnExit';

const Header = () => {
  const { loggedIn } = useAuth();

  const { t } = useTranslation();

  return (
      <div>
        <header>
          <div className="container">
            <Link to="/" className='container_header'>
              {t('baseTextUI.header')}
            </Link>

            {loggedIn && <BtnExit />}
          </div>
        </header>

        <main>
          <Outlet />
        </main>
    </div>
  );
};

export default Header;
