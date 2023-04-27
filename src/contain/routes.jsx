import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "../pages/home"
import { PokemonPage } from "../pages/pokemon-page";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="pokemons/:id" element={<PokemonPage />} />
        </Routes>
    </BrowserRouter>
);