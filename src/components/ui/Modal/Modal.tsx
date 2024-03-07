import React, { ReactNode } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import vars from '@styles/_export.module.scss';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';

interface UniversalModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  content: ReactNode;
  cancelButtonText?: string;
  confirmButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  disableCancel?: boolean;
  disableConfirm?: boolean;
  hideCancel?: boolean;
  hideConfirm?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const UniversalModal: React.FC<UniversalModalProps> = ({
  open,
  onClose,
  title = '',
  content,
  cancelButtonText = 'Отменить',
  confirmButtonText = 'Подтвердить',
  onConfirm,
  onCancel,
  disableCancel = false,
  disableConfirm = false,
  hideCancel = false,
  hideConfirm = false,
  size = 'medium',
}) => {
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    onClose();
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return {
          width: `calc(${vars.modalWidthMin}px - 2 * ${vars.modalPadding}px)`,
        };
      case 'large':
        return {
          width: `calc(${vars.modalWidthMax}px - 2 * ${vars.modalPadding}px)`,
        };
      // default 'medium'
      default:
        return {
          width: `calc(${vars.modalWidthMid}px - 2 * ${vars.modalPadding}px)`,
        };
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center', // Center align the content
          padding: `${vars.modalPadding}px`,
          borderRadius: vars.borderRadius,
          backgroundColor: vars.globalWhite,
          ...getSizeStyle(),
        }}
      >
        {title && <Typography variant="h6">{title}</Typography>}
        {content}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem', // Adjust the margin as needed
          }}
        >
          {!hideCancel && (
            <SecondaryButton
              className="inverse"
              onClick={handleCancel}
              disabled={disableCancel}
              sx={{ marginRight: '16px' }}
            >
              {cancelButtonText}
            </SecondaryButton>
          )}
          {!hideConfirm && onConfirm && (
            <PrimaryButton
              onClick={handleConfirm}
              color="primary"
              disabled={disableConfirm}
            >
              {confirmButtonText}
            </PrimaryButton>
          )}
        </Box>
      </div>
    </Modal>
  );
};

UniversalModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  cancelButtonText: PropTypes.string,
  confirmButtonText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  disableCancel: PropTypes.bool,
  disableConfirm: PropTypes.bool,
  hideCancel: PropTypes.bool,
  hideConfirm: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

UniversalModal.defaultProps = {
  title: '',
  cancelButtonText: 'Отменить',
  confirmButtonText: 'Подтвердить',
  onConfirm: () => {},
  onCancel: () => {},
  disableCancel: false,
  disableConfirm: false,
  hideCancel: false,
  hideConfirm: false,
  size: 'medium',
};

export default UniversalModal;
