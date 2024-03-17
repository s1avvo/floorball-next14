import {
	Body,
	Column,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
	Row,
} from "@react-email/components";

type FloorballEmailTemplateProps = {
	name: string;
	email: string;
	phone?: string;
	subject: string;
	message: string;
};

export const FloorballEmailTemplate = ({ name, email, phone, subject, message }: FloorballEmailTemplateProps) => (
	<Html>
		<Head />
		<Preview>Masz wiadomość ze strony.</Preview>
		<Body style={main}>
			<Container style={container}>
				<Row style={header}>
					<Column style={headerContent}>
						<Heading style={headerContentTitle}>Wiadomość z floorball.com</Heading>
					</Column>
					<Column style={headerImageContainer}>
						<Img width={150} src={`${process.env.NEXT_PUBLIC_URL}/assets/logo_og.png`} />
					</Column>
				</Row>

				<Section style={content}>
					<Heading as="h2" style={title}>
						Wiadomość od {name}
					</Heading>
					<Text style={paragraph}>Temat: {subject}</Text>
					<Text style={paragraph}>Treść: {message}</Text>

					{phone && (
						<>
							<Hr style={divider} />

							<Heading as="h2" style={title}>
								Telefon: {phone}
							</Heading>
						</>
					)}
					<Hr style={divider} />

					<Heading as="h2" style={title}>
						Odpowiedz na wiadomość:
					</Heading>

					<Section style={buttonContainer}>
						<Link style={button} href={`mailto:${email}`}>
							{email}
						</Link>
					</Section>
				</Section>
			</Container>

			<Section style={footer}>
				<Text style={footerAddress}>
					<strong>Floorball Śrem</strong>
				</Text>
			</Section>
		</Body>
	</Html>
);

const main = {
	backgroundColor: "#e5e4e4",
	fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const headerContent = { padding: "20px 30px 15px" };

const headerContentTitle = {
	color: "#fff",
	fontSize: "24px",
	fontWeight: "bold",
	lineHeight: "24px",
};

const headerImageContainer = {
	padding: "10px",
	minWidth: "100px",
};

const title = {
	margin: "0 0 15px",
	fontWeight: "bold",
	fontSize: "21px",
	lineHeight: "21px",
	color: "#0c0d0e",
};

const paragraph = {
	fontSize: "15px",
	lineHeight: "21px",
	color: "#3c3f44",
};

const divider = {
	margin: "30px 0",
};

const container = {
	maxWidth: "680px",
	width: "100%",
	margin: "0 auto",
	backgroundColor: "#ffffff",
};

const footer = {
	width: "680px",
	margin: "32px auto 0 auto",
	padding: "0 30px",
};

const content = {
	padding: "30px 30px 40px 30px",
};

const header = {
	borderRadius: "5px 5px 0 0",
	display: "flex",
	flexDireciont: "column",
	backgroundColor: "#000728",
};

const buttonContainer = {
	marginTop: "24px",
	display: "block",
};

const button = {
	backgroundColor: "#fbbf24",
	border: "1px solid #0077cc",
	fontSize: "17px",
	lineHeight: "17px",
	padding: "13px 17px",
	borderRadius: "14px",
	maxWidth: "120px",
	color: "#fff",
};

const footerAddress = {
	fontSize: "12px",
	lineHeight: "15px",
	color: "#9199a1",
};
