import { Fragment } from 'react';
import styles from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = ({onClose}) => {
    return <div className={styles.backdrop} onClick={onClose} />
};

const ModelOverlays = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content} >{props.children}</div>
    </div>
};

const portalContainer = document.getElementById('overlays');

export const Modal = ({onClose, children}) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalContainer)}
        {ReactDOM.createPortal(<ModelOverlays>{children}</ModelOverlays>, portalContainer)}
    </Fragment>
}