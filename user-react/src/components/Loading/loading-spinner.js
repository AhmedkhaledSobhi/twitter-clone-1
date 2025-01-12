import React from "react";
import "../Loading/loading-spiner.scss";

const LoadingSpinner = () => {
    return (
        <div className={"d-flex align-items-center justify-content-center w-100 h-100"}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;
