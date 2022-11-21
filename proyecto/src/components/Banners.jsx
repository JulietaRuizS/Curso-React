import React from "react";

const Banners = () => {
    return (
        <div className="container">
            <div className="row gx-5 mb-5">
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="images/cuchillo 1.jpg" width= "280" alt="cuchillo" className="img-fluid" /></p>
                    <h4>Descubre nuestros trabajos 100 % artesanales</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas accusantium corrupti error a natus eveniet odio debitis eos neque eum saepe porro quo tempore, asperiores labore temporibus laborum molestiae reprehenderit.</p>
                    <p><a href="#" target="_blank" className="btn btn-danger">Ver Más</a></p>
                </div>
                <div className="col-md-6 text-center shadow p-3 mx-auto bg-body rounded">
                    <p><img src="images/filo.jpg" width= "280" alt="detalle en filo " className="img-fluid" /></p>
                    <h4>Gran trabajo artesanal</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum excepturi autem nostrum alias officia aut repellat numquam placeat cupiditate quas, illo nulla ab odit velit iusto? Porro ipsa molestiae illo!</p>
                    <p><a href="#" target="_blank" className="btn btn-danger">Ver Más</a></p>
                </div>
            </div>
        </div>
    )
}

export default Banners;