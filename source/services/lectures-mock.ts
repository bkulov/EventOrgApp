import {Lecture} from './lecture';
import {Difficulty} from './difficulty';

export var LECTURESMOCK: Lecture[] = [{
	id: 0,
	startTime: new Date(2016, 4, 10, 9),
	endTime: new Date(2016, 4, 10, 10),
	title: 'How to do what when and why',
	lectorId: 0,
	difficulty: Difficulty.SoftSkills,
	scheduled: true,
	rating: 5,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
}, {
	id: 1,
	startTime: new Date(2016, 4, 10, 10),
	endTime: new Date(2016, 4, 10, 12),
	title: 'How not to do what the other guy before me told you to do',
	lectorId: 1,
	difficulty: Difficulty.SoftSkills,
	scheduled: true,
	rating: 0,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
}, {
	id: 2,
	startTime: new Date(2016, 4, 10, 12),
	endTime: new Date(2016, 4, 10, 14),
	title: 'Lunch',
	lectorId: -1,
	difficulty: Difficulty.FoodAndEntertainment,
	scheduled: false,
	rating: 1,
	description: ''
}, {
	id: 3,
	startTime: new Date(2016, 4, 10, 14),
	endTime: new Date(2016, 4, 10, 15),
	title: 'How to do what when and why',
	lectorId: 0,
	difficulty: Difficulty.SoftSkills,
	scheduled: false,
	rating: 2,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
}, {
	id: 4,
	startTime: new Date(2016, 4, 10, 17),
	endTime: new Date(2016, 4, 10, 19),
	title: 'How not to do what the other guy before me told you to do',
	lectorId: 1,
	difficulty: Difficulty.DevOps,
	scheduled: false,
	rating: 3,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
}, {
	id: 5,
	startTime: new Date(2016, 4, 11, 10),
	endTime: new Date(2016, 4, 11, 12),
	title: 'How not to do what the other guy before me told you to do',
	lectorId: 1,
	difficulty: Difficulty.DevOps,
	scheduled: true,
	rating: 4,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum congue sapien, id varius neque pretium sed. Etiam dapibus, enim non consectetur mollis, nulla odio feugiat tellus, a pharetra nisi ex nec leo. Aliquam arcu sem, elementum quis erat vitae, sodales molestie elit. Donec volutpat viverra commodo. Fusce eget efficitur neque. Donec sit amet felis lorem. Vestibulum tincidunt velit sit amet iaculis vulputate. Integer accumsan pulvinar commodo. Integer a vehicula augue. Ut mollis, ex vel eleifend ultricies, quam magna mattis turpis, nec viverra nunc quam sed risus. Mauris lacinia, ipsum quis tempor fermentum, dolor orci luctus urna, ac ultrices leo ligula ut nibh. Quisque porttitor pretium fringilla. Fusce nec odio varius, pretium diam et, tristique tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vitae est augue. Nunc tristique imperdiet gravida.'
}];
