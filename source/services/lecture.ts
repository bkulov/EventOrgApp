import {Difficulty} from './difficulty';

export interface Lecture {
	id: number;
	startTime: Date;
	endTime: Date;
	title: string;
	lectorId: number;
	difficulty: Difficulty;
	scheduled: boolean;
	rating: number;
	description: string;
}