export class Difficulty {
	SoftSkills: number = 1;
	public FoodAndEntertainment: number = 2;
	public DevOps: number = 3;

	asText(difficulty: number): string {
		switch (difficulty) {
			case this.SoftSkills:
				return 'SOFT SKILLS';
			case this.FoodAndEntertainment:
				return 'FOOD & ENTERTAINMENT';
			case this.DevOps:
				return 'DEVOPS';
		}

		return '';
	}
}