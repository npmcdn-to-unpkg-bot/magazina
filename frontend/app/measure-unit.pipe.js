"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MeasureUnitPipe = (function () {
    function MeasureUnitPipe() {
    }
    MeasureUnitPipe.prototype.transform = function (count, step) {
        if (step) {
            var i = count * step / 1000;
            if (i < 1)
                return count * step + " \u0433\u0440.";
            else
                return i + " \u043A\u0433.";
        }
        else {
            return count + " \u0448\u0442.";
        }
    };
    MeasureUnitPipe = __decorate([
        core_1.Pipe({ name: 'measureUnit' }), 
        __metadata('design:paramtypes', [])
    ], MeasureUnitPipe);
    return MeasureUnitPipe;
}());
exports.MeasureUnitPipe = MeasureUnitPipe;
//# sourceMappingURL=measure-unit.pipe.js.map