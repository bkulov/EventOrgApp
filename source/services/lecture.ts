export interface Lecture {
	id: number;
	startTime: Date;
	endTime: Date;
	title: string;
	lectorId: number;
	difficulty: number;
	scheduled: boolean;
	rating: number;
	description: string;
}