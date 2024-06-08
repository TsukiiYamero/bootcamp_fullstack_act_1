import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { Login } from "../components/Login";
import { Articles } from "../components/Articles";
import { About } from "../components/About";
import { routes } from "./routes.types";
import { NotFound } from "../components/NotFound";
import { useMyContext } from "../context/Context";

import logo from "../assets/LOGOSTORE.png"


export const AppRouter = () => {
    const { user, setUser } = useMyContext();

    const links = [
        { name: "Contact", path: routes.contact },
        { name: "Articles", path: routes.articles },
        { name: "About", path: routes.about },
        { name: "Login", path: routes.login },
    ]

    return (
        <BrowserRouter>
            <header className="">
                <nav className="nav container">
                    <div>
                        <li>
                            <button type="button" className="btn">
                                <NavLink to={routes.home}
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >
                                    <img style={{ width: "60px", height: "60px", objectFit: "contain" }} src={logo} alt="" />
                                </NavLink>
                            </button>
                        </li>
                    </div>

                    <ul>
                        {
                            links.map((link) => (
                                <li key={link.path}>
                                    {
                                        link.name === "Login"
                                            ? (<div>
                                                {
                                                    user?.name ?
                                                        <>
                                                            <NavLink to={link.path}
                                                                className={({ isActive }) => isActive ? "item-active" : ""}
                                                            >
                                                                {user?.name}
                                                            </NavLink>
                                                            <p onClick={() => setUser({
                                                                name: "",
                                                                id: "",
                                                                city: "",
                                                                phone: "",
                                                                lastName: ""
                                                            })} style={{ cursor: "pointer", color: "red" }}>
                                                                Logout
                                                            </p>
                                                        </>
                                                        : <NavLink to={link.path}
                                                            className={({ isActive }) => isActive ? "item-active" : ""}
                                                        >
                                                            {link.name}
                                                        </NavLink>
                                                }

                                            </div>)
                                            : <NavLink to={link.path}
                                                className={({ isActive }) => isActive ? "item-active" : ""}
                                            >
                                                {link.name}
                                            </NavLink>
                                    }
                                </li>
                            ))
                        }

                    </ul>
                </nav>
            </header>

            <main className="container main">
                <Routes>
                    <Route path={routes.home} element={<Home />}></Route>
                    <Route path={routes.articles} element={<Articles />}></Route>
                    <Route path={routes.login} element={<Login />}></Route>
                    <Route path={routes.contact} element={<Contact />}></Route>
                    <Route path={routes.about} element={<About />}></Route>
                    <Route path={routes.notFound} element={<NotFound />}></Route>
                </Routes>
            </main>

        </BrowserRouter>
    )
}