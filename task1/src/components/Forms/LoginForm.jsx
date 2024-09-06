import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useFormik } from 'formik';

import cn from 'classnames';

import useAuth from '../../hooks/useAuth.js';

import ROUTES from '../../utils/routes.js';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const refEmail = useRef();
  const refPassword = useRef();
  const refFeedback = useRef();

  const { logIn } = useAuth();

  const [validAuth, setValidAuth] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    refEmail.current.focus();
  }, []);

  useEffect(() => {
    if (validAuth === false) {
      refEmail.current.focus();
      refFeedback.current.style.display = 'block';
    }

    if (validAuth === true) {
      refFeedback.current.style.display = 'none';
    }
  }, [validAuth]);

  useEffect(() => {
    if (validAuth) navigate(ROUTES.home(), { replace: false });
  }, [validAuth, navigate]);

  const formik = useFormik({
    initialValues: {
      email: 'test@test.com',
      password: 'test',
    },
    onSubmit: ({ email, password }) => {
      setError('');

      // try { fetch ...} catch (err) {...}

      if (email === 'test@test.com' && password === 'test') {
        logIn({ token: 'qwerty123', username: 'test' });
        setValidAuth(true);
      }
      else {
        setValidAuth(false);
        setError(t('loginForm.invalidCredentials'));
      }

    },
  });

  const inputClasses = cn('text-field__input', {
    'is-valid': validAuth === true,
    'is-invalid': validAuth === false,
  });

  return (
    <div className={styles.form_container}>
      <form className={styles.login_form} onSubmit={formik.handleSubmit}>
        <h2 className={styles.login_form_header}>{t('loginForm.header')}</h2>

        <div className='text-field text-field_floating-2'>
          <input
            name="email"
            id="email"
            autoComplete="email"
            required
            placeholder={t('loginForm.email')}
            type="email"
            className={inputClasses}
            onChange={formik.handleChange}
            value={formik.values.email}
            ref={refEmail}
          />

          <label htmlFor="email" className="text-field__label">
            {t('loginForm.email')}
          </label>
        </div>

        <div className='text-field text-field_floating-2'>
          <input
            name="password"
            id="password"
            autoComplete="password"
            required
            placeholder={t('loginForm.password')}
            type="password"
            className={inputClasses}
            onChange={formik.handleChange}
            value={formik.values.password}
            ref={refPassword}
          />

          <label htmlFor="password" className="text-field__label">
            {t('loginForm.password')}
          </label>
        </div>

        <div className={styles.form_group}>
          <div className={styles.invalid_feedback} ref={refFeedback}>
            {error}
          </div>

          <button type="submit" className={styles.btnEnter}>{t('buttons.btnEnter')}</button>
        </div>

      </form>
    </div>
  );
};

export default LoginForm;
