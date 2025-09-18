import { Request, Response } from "express";
import { getPartsByCode } from "../services/niraxService";

export const searchController = async (req: Request, res: Response) => {
	try {
		const { code } = req.params;
		const results = await getPartsByCode(code);

		if (!results || results.length === 0) {
			return res.status(404).json({ message: "Ничего не найдено" });
		}

		res.json(results);
	} catch (error: any) {
		console.error(error.message);
		res.status(500).json({ message: "Ошибка при получении данных" });
	}
};
