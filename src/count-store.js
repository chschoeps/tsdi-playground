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
Object.defineProperty(exports, "__esModule", { value: true });
var tsdi_1 = require("tsdi");
var tsdi = new tsdi_1.TSDI();
tsdi.enableComponentScanner();
var CountStore = /** @class */ (function () {
    function CountStore() {
        this.count = 0;
    }
    CountStore.prototype.setCount = function (newCount) {
        this.count = newCount;
    };
    CountStore.prototype.getCount = function () {
        return this.count;
    };
    CountStore.prototype.init = function () {
        // tslint:disable-next-line:no-console
        console.log('init');
    };
    CountStore.prototype.destroy = function () {
        // tslint:disable-next-line:no-console
        console.log('destroy');
    };
    __decorate([
        tsdi_1.initialize,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CountStore.prototype, "init", null);
    __decorate([
        tsdi_1.destroy,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CountStore.prototype, "destroy", null);
    CountStore = __decorate([
        tsdi_1.component,
        __metadata("design:paramtypes", [])
    ], CountStore);
    return CountStore;
}());
exports.default = CountStore;
