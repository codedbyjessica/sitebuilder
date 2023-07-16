import Column from "./column"
import { randomNumber } from "@/utils/general"

export default function Columns({columns}) {
	return (
		<div className="columns-wrapper md:flex justify-between">
			{columns.map(column => <Column key={randomNumber} column={column} />)}
		</div>
	)
}
