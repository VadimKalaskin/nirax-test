import { useEffect, useState } from 'react'
import styles from './App.module.scss'

import SearchForm from "./components/SearchForm";
import PartsList from "./components/PartsList";
import { LoadingSpinner } from "./components/LoadingSpinner";

import apiClient from "./shared/api/apiClient.ts";

import type { IPartResponse } from "./types/parts.ts";
import type { AxiosError } from "axios";

function App() {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [parts, setParts] = useState<Array<IPartResponse>>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const res = await apiClient.searchByCode<Array<IPartResponse>>(searchTerm);
			setError(null);
			setParts(res);
		} catch (err: unknown) {
			console.error('Error fetching parts:', err);

			const error = err as AxiosError<{ message?: string }>;

			if (error.response?.status && error.response.status >= 500) {
				setError(error.response.data?.message || 'Произошла ошибка на сервере. Пожалуйста, попробуйте позже.');
				setParts([])
			}

			if (error.response?.status === 404) {
				setError(error.response.data?.message || 'Ничего не найдено.');
				setParts([])
			}
		} finally {
			setIsLoading(false);
		}
	};


	useEffect(() => {
		if (!error) return;

		const timer = setTimeout(() => setError(null), 5000);

		return () => clearTimeout(timer);
	}, [error]);

  return (
    <div className={styles.root}>
			<SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSubmit={handleSubmit}/>
			<PartsList parts={parts}/>
			{isLoading && <LoadingSpinner/>}
			{error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export default App
