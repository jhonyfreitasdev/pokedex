import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "../components/home/pages"
import { PokemonPage } from "../components/pokemon-page/pages";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="pokemons/:id" element={<PokemonPage />} />
        </Routes>
    </BrowserRouter>
);