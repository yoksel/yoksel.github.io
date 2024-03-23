import styles from './styles.module.scss';

interface VisuallyHiddenTextProps extends React.PropsWithChildren {
  element?: 'div' | 'h2';
}

const VisuallyHiddenText = ({ element: Element = 'div', children }: VisuallyHiddenTextProps) => (
  <Element className={styles['visually-hidden']}>{children}</Element>
);

export default VisuallyHiddenText;
