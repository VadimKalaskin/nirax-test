import type { IPartResponse } from "../../types/parts.ts";
import styles from "./PartsList.module.scss";

export default function PartsList({parts}: {parts: Array<IPartResponse> | null}) {
	if (parts === null) return null
	if (parts.length === 0) return <p>Ничего не найдено.</p>

	return (
			<table className={styles.table}>
				<thead>
				<tr>
					<th>ID</th>
					<th>Артикул</th>
					<th>Производитель</th>
					<th>Наименование</th>
				</tr>
				</thead>
				<tbody>
				{parts && parts.map((part) => (
						<tr key={part?.id + part?.manufacturer + part?.article}>
							<td>{part?.id}</td>
							<td>{part?.article}</td>
							<td>{part?.manufacturer}</td>
							<td>{part?.title}</td>
						</tr>
				))}
				</tbody>
			</table>
	)
}
