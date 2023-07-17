import { randomNumber } from "@/utils/general";

export default function Paragraph({paragraph}) {
	return (
		<div>
            {paragraph.map((p, i) => <p key={"paragraph"+i+randomNumber} className="mb-2">{p}</p>)}
        </div>
	)
}
