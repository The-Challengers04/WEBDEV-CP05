import React from "react";
import styled from "styled-components";

const Header = () => {
	return (
		<HeaderContainer>
			<Title>The Challengers</Title>
			<Nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Sobre</a>
					</li>
					<li>
						<a href="/">Contato</a>
					</li>
					<li>
						<a href="/">Blog</a>
					</li>
					<li>
						<a href="/">FAQ</a>
					</li>
				</ul>
			</Nav>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.header`
	background-color: #fff;
	padding: 20px 0;
	max-width: 1200px;
	max-height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; 
`;

const Title = styled.h1`
	font-size: 30px;
	margin: 0px 2em;
	font-family: "Oxygen";
	color: #097bf4;
`;

const Nav = styled.nav`
	margin: 0px 3em;
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 3em;

		li {
			font-family: Geneva, Tahoma, sans-serif;
			a {
				text-decoration: none;
				color: #808080;
				font-weight: bold;

				&:hover {
					border-bottom: 3px solid #097bf4;
				}
			}
		}
	}
`;


export default Header;
