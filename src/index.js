"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var count_display_1 = __importDefault(require("./count-display"));
var count_set_1 = __importDefault(require("./count-set"));
var cd = new count_display_1.default;
var cs = new count_set_1.default;
cs.set(42);
cd.show();
