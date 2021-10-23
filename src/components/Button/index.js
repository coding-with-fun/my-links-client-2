import React from "react";

const Button = ({ children, type, ...props }) => {
    return (
        <div {...props} className={`button button-${type} ${props.className}`}>
            {children}
        </div>
    );
};

export default Button;
