export interface IPart {
	id: number,
	description: string,
	dataSupplierArticleNumber: string,
	manufacturerId: number,
	productId: number,
	source: string,
	searchCode: string,
	typeCode: number,
	fileImage: string,
	countImage: number,
	baseId: number,
	idUser: number,
	legacyArticleId: number,
	fileImageFull: string,
	fileImageIcon: string,
	productDescription: string,
	productShortDescription: string,
	assemblyGroup: string,
	usageDescription: string,
	manufacturerDescription: string
}

export interface IPartResponse {
	id: number;
	article: string;
	manufacturer: string;
	title: string;
}
