function Carouselsection() {
    return(
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

        
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        </div>
    
        
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img id="img1" src="./Images/1.jpg" alt="Hot Air Balloon" className="d-block w-100" />
            <div className="carousel-caption head-overlay">
                <h1 className="carousel-title">Welcome to <span>In Progress</span></h1>
                <h5 className="slide-description">Ready for an Adventure?</h5>
                <a href="/" className="btn">Let's Go!</a>
            </div>
        </div>
        <div className="carousel-item">
            <img id="img2" src="./Images/3.jpg" alt="Hiking" className="d-block w-100" />
            <div className="carousel-caption head-overlay">
                <h1 className="carousel-title">Welcome to <span>In Progress</span></h1>
                <h5 className="slide-description">Ready for an Adventure?</h5>
                <a href="/" className="btn">Let's Go!</a>
            </div>
        </div>
        </div>
    
        
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </button>
    </div>
    )
}

export default Carouselsection;