import React, { useState, useEffect } from "react"
import "../style/Nav.css"

function Nav(){
    const [show, handleShow] = useState(false)
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    handleShow(true);
                } else handleShow(false);
            });
        }
    }, []);

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                alt="Netflix Avatar"
            />


        </div>
    )
}

export default Nav