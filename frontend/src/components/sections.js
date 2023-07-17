import { sections, theme } from '@/testdata'
import { checkContentOk, randomNumber } from '@/utils/general'
import Container from './container'
import Columns from './section/columns'

export default function Sections({pageId}) {
    console.log('pageId', pageId)
	return (
		<>
            {sections.map((section, i) => {
                return (
                    <section key={"section"+i+randomNumber} className={section.type + ' py-16'} style={{backgroundColor: i % 2 ? theme.primaryColorLight : theme.secondaryColorLight}}>
                        <Container>
                            {checkContentOk(section.title?.text) && <h2 key={"h2"+i+randomNumber} style={{textAlign: section.title?.position}}>{section.title?.text}</h2>}
                            {checkContentOk(section.title?.text) && <h3 key={"h3"+i+randomNumber} style={{textAlign: section.subtitle?.position}}>{section.subtitle?.text}</h3>}
                            <Columns columns={section.columns} />
                        </Container>
                    </section>
                )
            })}
        </>
	)
}

// export const getStaticProps = async () => {
// 	const siteId = "jessysorchard"
// 	const API_URL = "https://y89znoo4p5.execute-api.us-east-1.amazonaws.com/prod";


// 	const siteRes = await fetch(API_URL + "/site?id=" + siteId)
// 	const site = await siteRes.json()
	
// 	const pagesRes = await fetch(API_URL + "/pages?siteId=" + siteId)
// 	const pages = await pagesRes.json()

// 	return { props: { site, pages } }
//   }