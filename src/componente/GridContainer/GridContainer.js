import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import styled from "styled-components";

export default function GridContainer(){
    return(
        <AsideRigth>
			<Header/>
			<Aside/>
		</AsideRigth>
			
    );
};

const AsideRigth = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 0px;
	padding: 0px;
`;