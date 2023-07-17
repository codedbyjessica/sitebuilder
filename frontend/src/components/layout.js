import '@/app/globals.css'
import Header from './header'
import Footer from './footer'
import { hero, theme } from '@/testdata'
import { checkContentOk } from '@/utils/general'
import Navigation from './navigation'

export default function Layout({ children }) {

	return (
		<>
			{checkContentOk(hero.topMessage) && 
				<div className={`p-2 h-[40px] text-center`} style={{background: theme.secondaryColorLight}}>{hero.topMessage}</div>
			}
			<Navigation />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}