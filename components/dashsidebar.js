import Head from "next/head";
import Link from "next/link";

export default function Dashsidebar() {
    return (
        <div class="container-fluid dashboard">
            <div class="row">
                <nav class="col-md-1 d-none d-md-block sidebar" style={{ backgroundColor: '#242424', minHeight: '93vh' }}>
                    <div class="sidebar-sticky">
                        <br></br>
                        <ul class="nav flex-column">
                            <li class="nav-item active selected">
                                <Link class="nav-link text-white" href='/'>
                                    Homepage
                                </Link>
                            </li>
                        </ul>
                        <hr></hr>
                        <ul class="nav flex-column">
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="#">
                                    <span data-feather="file"></span>
                                    Übersicht
                                </a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="#">
                                    <span data-feather="settings"></span>
                                    Einstellungen
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}