import siteData from '../../../../data/config';

import styles from './styles.module.scss';

const Counter = () => (
  <div
    className={styles['counter']}
    dangerouslySetInnerHTML={{ __html: siteData.counter }}
  />
);

export default Counter;
