import { Fragment } from 'react';
import styles from './Modal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = () => {
    return <div className={styles.backdrop} />
};

const ModelOverlays = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content} >{props.children}</div>
    </div>
};

const portalContainer = document.getElementById('overlays');

export const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalContainer)}
        {ReactDOM.createPortal(<ModelOverlays>{props.children}</ModelOverlays>, portalContainer)}
    </Fragment>
}