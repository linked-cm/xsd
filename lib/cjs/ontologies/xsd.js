"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.xsd = exports.anyURI = exports.dateTime = exports.gYear = exports.decimal = exports.duration = exports.time = exports.integer = exports.long = exports.date = exports.boolean = exports.string = exports.Bytes = exports._ontologyResource = exports.ns = exports.loadData = void 0;
const Prefix_1 = require("@_linked/core/utils/Prefix");
const NameSpace_1 = require("@_linked/core/utils/NameSpace");
const package_js_1 = require("../package.js");
const _this = __importStar(require("./xsd.js"));
const dataFile = '../data/xsd.json';
const loadData = () => {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        return Promise.resolve().then(() => __importStar(require('../data/xsd.json')));
    }
    //@ts-ignore
    return Promise.resolve().then(() => __importStar(require('../data/xsd.json'))).then((data) => data.default);
};
exports.loadData = loadData;
const base = 'http://www.w3.org/2001/XMLSchema#';
exports.ns = (0, NameSpace_1.createNameSpace)(base);
Prefix_1.Prefix.add('xsd', base);
exports._ontologyResource = (0, exports.ns)('');
exports.Bytes = (0, exports.ns)('Bytes');
exports.string = (0, exports.ns)('string');
exports.boolean = (0, exports.ns)('boolean');
exports.date = (0, exports.ns)('date');
exports.long = (0, exports.ns)('long');
exports.integer = (0, exports.ns)('integer');
exports.time = (0, exports.ns)('time');
exports.duration = (0, exports.ns)('duration');
exports.decimal = (0, exports.ns)('decimal');
exports.gYear = (0, exports.ns)('gYear');
exports.dateTime = (0, exports.ns)('dateTime');
exports.anyURI = (0, exports.ns)('anyURI');
exports.xsd = {
    _ontologyResource: exports._ontologyResource,
    Bytes: exports.Bytes,
    string: exports.string,
    boolean: exports.boolean,
    date: exports.date,
    long: exports.long,
    integer: exports.integer,
    time: exports.time,
    duration: exports.duration,
    decimal: exports.decimal,
    gYear: exports.gYear,
    dateTime: exports.dateTime,
    anyURI: exports.anyURI,
};
(0, package_js_1.linkedOntology)(_this, exports.ns, 'xsd', exports.loadData, dataFile);
//# sourceMappingURL=xsd.js.map