import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Contact } from "../components/Contact";
import { Login } from "../components/Login";
import { Articles } from "../components/Articles";
import { About } from "../components/About";
import { routes } from "./routes.types";
import { NotFound } from "../components/NotFound";

const links = [
    { name: "Contact", path: routes.contact },
    { name: "Login", path: routes.login },
    { name: "Articles", path: routes.articles },
    { name: "About", path: routes.about },
]

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <header className="">
                <nav className="nav container">
                    <div>
                        <li>
                            <button type="button" className="btn">
                                <NavLink to={routes.home}
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >Home</NavLink>
                            </button>
                        </li>
                    </div>

                    <ul>
                        {
                            links.map((link) => (
                                <li key={link.path}>
                                    <NavLink to={link.path}
                                        className={({ isActive }) => isActive ? "item-active" : ""}
                                    >
                                        {link.name}
                                    </NavLink>
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