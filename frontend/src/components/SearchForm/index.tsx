import styles from "./SearchForm.module.scss";

type Props = {
	searchTerm: string,
	setSearchTerm: (term: string) => void,
	handleSubmit: (e: SubmitEvent) => Promise<void>
}

export default function SearchForm(props: Props) {
	const { searchTerm, setSearchTerm, handleSubmit } = props

	return (
			<form className={styles.inputWrapper} onSubmit={handleSubmit}>
				<input
						type={'text'}
						name={'searchTerm'}
						className={styles.input}
						placeholder={'Поиск по артикулу'}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button className={styles.submit} type={'submit'}>Поиск</button>
			</form>
	)
}
