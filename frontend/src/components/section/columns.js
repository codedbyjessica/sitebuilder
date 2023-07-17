import Column from "./column"
import { randomNumber } from "@/utils/general"

export default function Columns({columns}) {
	return (
		<div className="columns-wrapper md:flex justify-between">
			{columns.map((column, i) => <Column key={"column"+i+randomNumber} column={column} />)}
		</div>
	)
}
