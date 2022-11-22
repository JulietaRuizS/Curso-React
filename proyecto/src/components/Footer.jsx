import React from "react";

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="#" className="mx-1" > <img src="images/facebook.png" alt="facebook logo" /></a>
                    <a href="#" className="mx-1"><img src="images/instagram.png" alt="instagram logo" /></a>
                    <a href="#" className="mx-1"><img src="images/youtube.png" alt="youtube logo" /></a>
                    <a href="#" className="mx-1"><img src="images/twitter.png" alt="twitter logo" /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-muted" >Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted">Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" >Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" >Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <p><img src="images/logo.jpg" alt="logo" width="40" /> © Caleuche - 2022</p> 
                </div>
            </div>
        </div>
    )
}

export default Footer;