import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { defaultImages, smallLogos } from "../../../../core/app_images";
import { debounce } from "../../../../utils/functions";

const TopNavigator = (props) => {
    const { title, page, showDrawer, showNavbar, navbarOpen } = props;
    const fixedClassesWithZIndex = 'position-sticky blur shadow-blur left-auto top-1 z-index-sticky';
    const [search, setSearch] = useState("");
    const onClickShowDrawer = (ev) => {
        ev.preventDefault();
        showDrawer(true);
    }
    const onClickShowNavbar = (ev) => {
        ev.preventDefault();
        showNavbar(!navbarOpen);
    }

    const onChangeInputSearch = (ev) => {
        let value = ev.target.value;
        setSearch(value)
    }

    useEffect(() => {
        // Navbar blur on scroll
        function navbarBlurOnScroll() {
            let scrollDistance = 5;
            let navbarScrollActive = true;
            if (navbarScrollActive) {
                window.onscroll = debounce(function () {
                    if (window.scrollY > scrollDistance) {
                        blurNavbar();
                    } else {
                        transparentNavbar();
                    }
                }, 10);
            } else {
                window.onscroll = debounce(function () {
                    transparentNavbar();
                }, 10);
            }

            function blurNavbar() {
                toggleNavLinksColor('blur');
            }

            function transparentNavbar() {
                toggleNavLinksColor('transparent');
            }

            function toggleNavLinksColor(type) {
                let navLinks = document.querySelectorAll('.navbar-main .nav-link')
                let navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line')

                if (type === "blur") {
                    navLinks.forEach(element => {
                        element.classList.remove('text-body')
                    });

                    navLinksToggler.forEach(element => {
                        element.classList.add('bg-dark')
                    });
                } else if (type === "transparent") {
                    navLinks.forEach(element => {
                        element.classList.add('text-body')
                    });

                    navLinksToggler.forEach(element => {
                        element.classList.remove('bg-dark')
                    });
                }
            }
        }
        navbarBlurOnScroll()
    }, []);
    return (
        <nav className={`navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl ${fixedClassesWithZIndex}`} id="navbarBlur">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><Link to="/" className="opacity-5 text-dark">Início</Link></li>
                        <li className="breadcrumb-item text-sm text-dark active" aria-current="page">{page}</li>
                    </ol>
                    <h6 className="font-weight-bolder mb-0">{title}</h6>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <ul className="navbar-nav  justify-content-end">
                        <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                            <a href="#" className="nav-link text-body p-0" id="iconNavbarSidenav" onClick={onClickShowNavbar}>
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                    <i className="sidenav-toggler-line"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopNavigator;