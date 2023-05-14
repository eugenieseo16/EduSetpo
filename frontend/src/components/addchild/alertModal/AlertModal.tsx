import React from 'react';
import styles from './AlertModal.module.scss';
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
              <LongButton variant="success" onClick={onSuccess}>
                홈으로 돌아가기
              </LongButton>
            ) : (
              <LongButton variant="danger" onClick={onFailure}>
                돌아가기
              </LongButton>
            )}
          </div>
        </div>
      )}
    </>
  );
};
