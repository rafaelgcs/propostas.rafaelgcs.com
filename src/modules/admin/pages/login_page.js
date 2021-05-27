import React, {
  useState
} from 'react';
import { Link } from 'react-router-dom';
import { curved } from '../../../core/app_images';
import '../../../assets/css/soft-ui-dashboard.css';


const LoginPage = () => {

  return (
    <div className="g-sidenav-show bg-white">
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            {/* <!-- Navbar --> */}
            <nav className="w-auto navbar navbar-expand-lg blur blur-rounded top-0  z-index-3 position-absolute shadow my-3 py-2 start-0 mx-4">
              <div className="container-fluid">
                <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " to="/">
                  Voltar ao Site
                </Link>
                <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon mt-2">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
              </div>
            </nav>
            {/* <!-- End Navbar --> */}
          </div>
        </div>
      </div>
      <section>
        <div className="page-header section-height-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div className="card card-plain mt-8">
                  <div className="card-header pb-0 text-left bg-transparent">
                    <h3 className="font-weight-bolder text-info text-gradient">Welcome back</h3>
                    <p className="mb-0">Enter your email and password to sign in</p>
                  </div>
                  <div className="card-body">
                    <form role="form text-left">
                      <label>Email</label>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                      </div>
                      <label>Password</label>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="rememberMe" checked="" />
                        <label className="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                      <div className="text-center">
                        <button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Sign in</button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-sm mx-auto">
                      Don't have an account?
                      <a href="javascript:;" className="text-info text-gradient font-weight-bold">Sign up</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                  <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: `url(${curved.curved_6})` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;