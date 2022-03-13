import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, close, children }) => {
    
    const contentRef = useRef();

    useEffect(() => {
        if(!isOpen) return

        function listener(event) {
            if(!contentRef.current.contains(event.target)) {
                close();
            }
        }
        window.addEventListener("click", listener);
        return () => {
            window.removeEventListener("click", listener);
        }
    }, [isOpen, close]);

    if (!isOpen) return null;
    return (
    
    <div>
        <div ref={divRef} img= {BackgroundImg}>
            {children}
        </div>
    </div>
    );
};

export default Modal;