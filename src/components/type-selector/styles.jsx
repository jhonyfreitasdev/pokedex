import styled from "styled-components";
import { device } from "../../constants/device";

export const Select = styled.select`
    border-radius: 15px;
    width: 76px;
    margin-right: 10px;

    @media ${device.tablet} {
        margin-right: 5px;
        font-size: 1.2rem;
    }
`