import Image from "../elements/image"
import Paragraph from "../elements/paragraph"

export default function Column({column}) {
    return <div className="column" style={{textAlign: column.position || "left"}}>
        {column.colTitle && <h4>{column.colTitle}</h4>}
        {column.colSubtitle && <h5>{column.colSubtitle}</h5>}
        {column.content.map(item => {
            if (item.type === "paragraph") {
                return <Paragraph paragraph={item.content} />
            } else if (item.type === "image") {
                return <Image image={item} />
            }
        })}
    </div>
}