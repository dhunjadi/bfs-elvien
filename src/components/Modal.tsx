import {PropsWithChildren} from 'react';

import Button from './Button';

interface ModalProps {
    isOpen: boolean;
    header?: JSX.Element | string;
    showCancel?: boolean;
    cancelText?: string;
    showConfirm?: boolean;
    confirmText?: string;
    onCancel: () => void;
    onConfirm: () => void;
}

const Modal = (props: PropsWithChildren<ModalProps>): JSX.Element => {
    const {isOpen, header, showCancel, cancelText = 'Cancel', showConfirm, confirmText = 'Confirm', onCancel, onConfirm, children} = props;

    return (
        <div className={`c-modal ${isOpen && 'is-open'}`}>
            <div className="c-modal__overlay" tabIndex={-1}>
                <div className="c-modal__body">
                    <div className="c-modal__header">
                        <h2 className="c-modal__header_title">{header}</h2>
                    </div>

                    <div className="c-modal__content">{children}</div>

                    <div className="c-modal__footer">
                        {(showCancel || showConfirm) && (
                            <div className="c-group c-modal__footer_buttons">
                                {showCancel && <a onClick={onCancel}>{cancelText}</a>}

                                {showConfirm && (
                                    <Button varient="primary" type="submit" onClick={onConfirm}>
                                        {confirmText}
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
