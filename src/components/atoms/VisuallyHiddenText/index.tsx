import styles from './styles.module.scss';

interface VisuallyHiddenTextProps extends React.PropsWithChildren {
  element?: 'span' | 'div' | 'h2' | 'h3';
}

const VisuallyHiddenText = ({ element: Element = 'div', children }: VisuallyHiddenTextProps) => (
  <Element className={styles['visually-hidden']}>{children}</Element>
);

export default VisuallyHiddenText;
