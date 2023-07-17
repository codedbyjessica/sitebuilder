import Layout from "@/components/layout"
import Sections from "@/components/sections"
import Theme from "@/components/theme"

export default function Home({site, pages}) {
	return (
		<Layout>
			<Theme />
			<main>
				<Sections />
			</main>
		</Layout>
	)
}
  
export const getStaticProps = async () => {
	const siteId = "jessysorchard"
	const API_URL = "https://y89znoo4p5.execute-api.us-east-1.amazonaws.com/prod";


	const siteRes = await fetch(API_URL + "/site?id=" + siteId)
	const site = await siteRes.json()
	
	const pagesRes = await fetch(API_URL + "/pages?siteId=" + siteId)
	const pages = await pagesRes.json()

	// need sections

	return { props: { site, pages } }
  }