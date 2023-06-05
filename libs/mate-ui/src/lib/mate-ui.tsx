import styles from './mate-ui.module.css';

/* eslint-disable-next-line */
export interface MateUiProps {}

export function MateUi(props: MateUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MateUi!</h1>
    </div>
  );
}

export default MateUi;
