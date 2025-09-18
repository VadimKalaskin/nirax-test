import { IPart, IPartResponse } from "../types/parts";
import apiClient from "../shared/apiClient";

export const getPartsByCode = async (code: string): Promise<IPartResponse[]> => {
	const data = await apiClient.searchByCode<Array<IPart>>(code)

	return data.map((item: IPart) => ({
		id: item.productId,
		article: item.dataSupplierArticleNumber,
		manufacturer: item.manufacturerDescription,
		title: item.productDescription,
	}));
};
