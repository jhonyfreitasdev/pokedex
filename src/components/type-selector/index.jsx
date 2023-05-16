import { useContext } from "react";
import { FilterContext } from "../../context/filter-context";

import { Select, Label } from "./styles"

export const TypeSelector = () => {    
    const {type, setType} = useContext(FilterContext)

    return(
        <>
            <Label htmlFor="types" > 
            </Label>

            <Select id="types" value={type} onChange={e => setType(e.target.value)}>
                <option value="all">Todos</option>
                <option value="steel">Aço</option>
                <option value="water">Água</option>
                <option value="dragon">Dragão</option>
                <option value="electric">Elétrico</option>
                <option value="fairy">Fada</option>
                <option value="ghost">Fantasma</option>
                <option value="fire">Fogo</option>
                <option value="ice">Gelo</option>
                <option value="grass">Grama</option>
                <option value="bug">Inseto</option>
                <option value="fighting">Lutador</option>
                <option value="normal">Normal</option>
                <option value="rock">Pedra</option>
                <option value="psychic">Psíquico</option>
                <option value="dark">Sombrio</option>
                <option value="poison">Venenoso</option>
                <option value="flying">Voador</option>
            </Select>
        </>
    )
}