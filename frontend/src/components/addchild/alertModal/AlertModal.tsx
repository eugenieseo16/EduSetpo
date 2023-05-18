import React from 'react';
import styles from './AlertModal.module.scss';
import sadLogo from '../../../assets/images/sadeducell.png';
import Logo from '../../../assets/images/educell.png';
import { LongButton } from '../../common/button/Button';

interface AlertModalProps {
  message: string;
  isOpen: boolean;
  handleClose: () => void;
  onSuccess?: () => void;
  onFailure?: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  message,
  isOpen,
  handleClose,
  onSuccess,
  onFailure,
}) => {
  const isSuccess = message === '자녀 등록에 성공하셨습니다.';

  return (
    <>
      {isOpen && (
        <div className={styles['modal-overlay']}>
          <div className={styles['alert-modal-container']}>
            <p>{message}</p>
            {isSuccess ? (
              <>
                <img src={Logo} className={styles['logo-image']} />
                <LongButton
                  variant="success"
                  onClick={onSuccess}
                  className={styles['long-button']}
                >
                  홈으로 돌아가기
                </LongButton>
              </>
            ) : (
              <>
                <img src={sadLogo} className={styles['logo-image']} />
                <LongButton
                  variant="danger"
                  onClick={() => {
                    if (onFailure) onFailure();
                    handleClose();
                  }}
                  className={styles['long-button']}
                >
                  돌아가기
                </LongButton>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
