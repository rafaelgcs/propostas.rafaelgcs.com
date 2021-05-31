import React, {
  useEffect,
  useState
} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { curved, defaultImages } from '../../../core/app_images';
import '../../../assets/css/soft-ui-dashboard.css';

import { makeStyles, TextField } from '@material-ui/core';

import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { doLogin } from '../../../repositories/user_repository';
import { getRemember, getUser, isAuthenticated } from '../../../services/auth';

const LoginPage = () => {
  const navigation = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [remember, setRemember] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleChangeRemember = () => {
    setRemember(!remember);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const goToAdminHomePage = () => {
    window.location.href = '/admin'
  }

  const onLoginFormSubmit = async (ev) => {
    ev.preventDefault();
    let loginVariables = {
      email: values.email,
      password: values.password,
      remember
    }

    let logged = await doLogin(loginVariables)

    if (logged) {
      goToAdminHomePage()
    }

  }

  useEffect(() => {
    if (isAuthenticated()) {
      goToAdminHomePage()
    }
    let rememberUser = getRemember();
    setRemember(rememberUser)
    if (rememberUser) {
      let userRemembered = getUser();
      setValues({ ...values, email: userRemembered.email });
    }
  }, [])

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
                    <h3 className="font-weight-bolder text-info text-gradient">Bem vindo(a)!</h3>
                    <p className="mb-0">Insira seu e-mail e senha para efetuar o login.</p>
                  </div>
                  <div className="card-body">
                    <form role="form text-left" onSubmit={onLoginFormSubmit}>
                      <TextField
                        fullWidth
                        className={'mb-3'}
                        id="email__login-form"
                        type="email"
                        label="E-mail"
                        value={values.email}
                        onChange={handleChange('email')}
                      />
                      <TextField
                        fullWidth
                        className={'mb-3'}
                        id="password__login-form"
                        type={showPassword ? 'text' : 'password'}
                        label="Senha"
                        value={values.password}
                        onChange={handleChange('password')}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="rememberMe" onChange={handleChangeRemember} checked={remember ? 'checked' : ''} />
                        <label className="form-check-label" for="rememberMe">Lembrar de mim</label>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn bg-gradient-info w-100 mt-4 mb-0">Entrar</button>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <p className="mb-4 text-sm mx-auto">
                      {"Ainda não tem uma conta? "}
                      <Link to="/admin/register" className="text-info text-gradient font-weight-bold">Cadastre-se agora!</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                  <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{ backgroundImage: `url(${defaultImages.meeting2})` }}></div>
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