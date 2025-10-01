import React from 'react';
import styles from './TransferWorkflow.module.css';

const TransferWorkflow = ({ onClick = () => {} }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.iconTextWrapper}>
            {/* Transfer workflow icon */}
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.23779 9.03475C2.23779 7.92087 3.47543 5.81689 5.08436 5.19807C6.69328 4.57925 9.16856 4.57925 12.5102 4.57925C16.0993 4.57925 19.6885 5.19807 19.6885 5.19807L16.8419 2.35151L18.0795 0L24.7628 6.807L17.9558 13.614L16.7181 11.2625L19.5647 8.41593C19.5647 8.41593 15.9756 7.79711 12.2626 7.79711C9.04479 7.79711 6.56952 7.79711 4.96059 8.41593C3.35167 9.03475 2.23779 12.9952 2.23779 12.9952V9.03475Z" fill="#5856D6"/>
                <path d="M22.5345 15.9652C22.5345 17.0791 21.2969 19.1831 19.6879 19.8019C18.079 20.4207 15.6037 20.4207 12.2621 20.4207C8.67298 20.4207 5.08383 19.8019 5.08383 19.8019L7.93039 22.6485L6.69276 25L0.00952148 18.193L6.81652 11.386L8.05416 13.7375L5.20759 16.5841C5.20759 16.5841 8.79674 17.2029 12.5096 17.2029C15.7275 17.2029 18.2028 17.2029 19.8117 16.5841C21.4206 15.9652 22.5345 12.0048 22.5345 12.0048V15.9652Z" fill="#5856D6"/>
              </svg>
            </div>
            
            {/* Transfer Workflow text */}
            <span className={styles.text}>Transfer Workflow</span>
          </div>
        </div>
        
        {/* Right chevron icon */}
        <div className={styles.rightIcon}>
          <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.83784 9.5L0 2.21667L2.08108 0L11 9.5L2.08108 19L0 16.7833L6.83784 9.5Z" fill="#1D1B20"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TransferWorkflow;
