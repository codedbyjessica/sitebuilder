import Container from './container'
import { hero, theme } from '@/testdata'

export default function Header() {
	const backgroundImageStyle = {
		backgroundImage: `url(${hero.backgroundImage})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "none"
	}
	const backgroundImageOverlayStyle = {
		backgroundColor: theme.neutralColorDark
	}
	return (
		<header className='relative'>
			<div className='w-full h-full absolute z-[-1]' style={backgroundImageStyle}></div>
			<div className='opacity-70 w-full h-full absolute left-0 top-0 z-[0]' style={backgroundImageOverlayStyle} />
			<Container>
				<div className='relative z-1 min-h-[calc(100vh-40px-80px)] flex justify-center items-center'>
					<h1 style={{color: theme.neutralColorLight}}>{hero.heading}</h1>
				</div>
			</Container>
		</header>
	)
}