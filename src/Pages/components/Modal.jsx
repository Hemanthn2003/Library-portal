import React from "react";
import "./Modal.css";

const Modal = ({
    isOpen,
    title,
    message,
    type = "success",
    onOk,
    onCancel,
    showCancel = false,
}) => {

    if (!isOpen) return null;

    return (
        <div className="modalOverlay">

            <div className="modalBox">

                <div className={`modalIcon ${type}`}>
                    {type === "success" && "✔"}
                    {type === "error" && "✖"}
                    {type === "warning" && "⚠"}
                    {type === "info" && "ℹ"}
                </div>

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="modalButtons">

                    {showCancel && (
                        <button
                            className="cancelBtn"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    )}

                    <button
                        className="okBtn"
                        onClick={onOk}
                    >
                        OK
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Modal;