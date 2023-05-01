import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./model.css";

interface BackDropProps {
	onClose: () => void;

}

interface ModalOverLay {
	children?: React.ReactNode;
}

interface ModalProps {
	onClose: () => void;
	children?: React.ReactNode;

}
const Backdrop = (props: BackDropProps) => {
	// console.log("Backdrop: ", props);
	return <div className='backdrop' onClick={props.onClose}></div>;
};

const ModalOverlay = (props: ModalOverLay) => {
	return (
		<div className='modals d-flex flex-column justify-content-center col-12'>
			<div className='content'>{props.children}</div>
		</div>
	);
};

const portalElement: any = document.getElementById("overlays");

const Modal = (props: ModalProps) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</Fragment>
	);
};
export default Modal;
