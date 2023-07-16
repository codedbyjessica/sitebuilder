import { sections, theme } from '@/testdata'
import { checkContentOk } from '@/utils/general'
import Container from './container'
import Columns from './section/columns'

export default function Sections() {
	return (
		<>
            {sections.map((section, i) => {
                return (
                    <section className={section.config.type + ' py-16'} style={{backgroundColor: i % 2 ? theme.primaryColorLight : theme.secondaryColorLight}}>
                        <Container>
                            {checkContentOk(section.content.title?.text) && <h2 key={i} style={{textAlign: section.content.title?.position}}>{section.content.title?.text}</h2>}
                            {checkContentOk(section.content.title?.text) && <h3 key={i} style={{textAlign: section.content.subtitle?.position}}>{section.content.subtitle?.text}</h3>}
                            <Columns columns={section.content.columns} />
                        </Container>
                    </section>
                )
            })}
        </>
	)
}