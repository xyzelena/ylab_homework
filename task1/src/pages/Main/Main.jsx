import { useTranslation } from 'react-i18next';

import styles from './Main.module.css';

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.main_descr}>
      <h2>{t('main.descr')}</h2>
    </div>
  )
}

export default Main; 