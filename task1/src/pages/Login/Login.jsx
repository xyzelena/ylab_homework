import { useTranslation } from 'react-i18next';

import LoginForm from '../../components/Forms/LoginForm.jsx';

import styles from './Login.module.css';

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container_login}>
      <LoginForm />
    </div>
  )
}

export default Login; 