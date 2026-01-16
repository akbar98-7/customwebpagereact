import React from 'react'


const Header = () => {
    return (
        <div className='header header d-flex align-items-center justify-content-between '>
            <div className="d-flex align-items-center gap-3 flex-1 " style={{ width: '100vw' }}>

                <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex flex-1 justify-content-between " style={{ width: '100%' }}>
                    <div class="container-fluid d-flex flex-1 ">
                        <img src='/Assets/blog.jpg' alt="" width={80} />
                        <h3>Bloggers APP</h3>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-flex flex-1" id="navbarNav" style={{ justifyContent: 'flex-end' }}>
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Blogging</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">SEO</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Web Hosting</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-disabled="false">Coupons</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active " href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Articles</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        </div>
    )
}

export default Header
