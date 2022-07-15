import React from 'react';
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.center}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
      </div>
    </div>
  );
}

export default Loading;
