import classNames from 'classnames';

import styles from './styles.module.scss';

interface FadedTextProps extends React.PropsWithChildren {
  className?: string;
}

const FadedText = ({ children, className }: FadedTextProps) => (
  <span className={classNames(className, styles['faded-text'])}>{children}</span>
);

export default FadedText;
