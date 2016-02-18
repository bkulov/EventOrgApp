System.register(['angular2/core', './lectures-list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, lectures_list_component_1;
    var LecturesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lectures_list_component_1_1) {
                lectures_list_component_1 = lectures_list_component_1_1;
            }],
        execute: function() {
            LecturesComponent = (function () {
                function LecturesComponent() {
                }
                LecturesComponent = __decorate([
                    core_1.Component({
                        selector: 'lectures',
                        template: "\n\t<div class=\"padding\">\n\t\t<lectures-list [showOnlyScheduled]=\"false\"></lectures-list>\n\t</div>\n\t",
                        directives: [lectures_list_component_1.LecturesListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LecturesComponent);
                return LecturesComponent;
            })();
            exports_1("LecturesComponent", LecturesComponent);
        }
    }
});
//# sourceMappingURL=lectures.component.js.map