import styled from  'styled-components'
// import Logo from "../../imgs/logo_inclui+.png";

export default function Footer() {
	return (
		<FooterContainer>
			<Content>
				<Section>
					<Text>Sobre mim</Text>
                    <Paragraph>
                        Posso não ser o melhor, mas na minha cabeça, eu sou o melhor. Temos que pensar que somos os melhores e vencer! É nisso que acredito e sempre busco melhorar, estou sempre em crescimento e isso me torna cada vez melhor.
                    </Paragraph>
				</Section>
				<Section>
					<Text>Navegação</Text>
					<Ul>
						<Li ><a href="/">Home</a></Li>
						<Li > <a href="/"> Sobre </a> </Li>
						<Li > <a href="/"> Contato </a></Li>
						<Li > <a href="/"> Blog </a></Li>
                        <Li > <a href="/"> FAQ </a></Li>
					</Ul>
				</Section>
				<Section>
					<Text>Contato</Text>
					<Paragraph>Email: exemplo@cristianoronaldo.com</Paragraph>
					<Paragraph>Telefone: (99) 9999-9999</Paragraph>
				</Section>
			</Content>
			<Copy>
				<Paragraph>
					Todos os direitos reservados a Cristiano Ronaldo &copy; - 2023
				</Paragraph>
			</Copy>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	background-color: black;
	padding: 20px;
	color: #fff;
`;

const Content = styled.div`
	display: flex; 
	justify-content: space-between;
    gap:100px;
	margin: 20px;
`;
const Section = styled.div`
	margin-bottom: 20px;
`;
const Text = styled.h3`
	margin-bottom: 10px;
`;
const Paragraph = styled.p`
	color: #737373;
`;
const Ul = styled.ul`
	list-style: none;
	padding: 0;
`;
const Li = styled.li`
	margin-bottom: 5px;
	color: #737373;
	text-decoration: none;
	a{
		color: #737373;
		text-decoration: none;
	}
`;
const Copy = styled.div`
	text-align: center;
	margin-top: 20px;
	color: #737373;
`;