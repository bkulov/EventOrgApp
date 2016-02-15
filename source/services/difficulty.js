System.register([], function(exports_1) {
    var Difficulty;
    return {
        setters:[],
        execute: function() {
            Difficulty = (function () {
                function Difficulty() {
                    this.SoftSkills = 1;
                    this.FoodAndEntertainment = 2;
                    this.DevOps = 3;
                }
                Difficulty.prototype.asText = function (difficulty) {
                    switch (difficulty) {
                        case this.SoftSkills:
                            return 'SOFT SKILLS';
                        case this.FoodAndEntertainment:
                            return 'FOOD & ENTERTAINMENT';
                        case this.DevOps:
                            return 'DEVOPS';
                    }
                    return '';
                };
                return Difficulty;
            })();
            exports_1("Difficulty", Difficulty);
        }
    }
});
//# sourceMappingURL=difficulty.js.map