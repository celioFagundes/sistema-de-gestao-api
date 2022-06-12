"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAgent = exports.updateAgent = exports.createAgent = exports.findAllAgents = void 0;
const agent_model_1 = __importDefault(require("../models/agent_model"));
const findAllAgents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agents = yield agent_model_1.default.find({});
        res.send(agents);
    }
    catch (e) {
        res.send({ success: false, errors: e });
    }
});
exports.findAllAgents = findAllAgents;
const createAgent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAgent = yield agent_model_1.default.create(Object.assign({}, req.body));
        res.send(newAgent);
    }
    catch (e) {
        res.send({ success: false, errors: e });
    }
});
exports.createAgent = createAgent;
const updateAgent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateAgent = yield agent_model_1.default.findByIdAndUpdate(req.params.id, Object.assign({}, req.body), { runValidators: true });
        res.send(updateAgent);
    }
    catch (e) {
        res.send({ success: false, errors: e });
    }
});
exports.updateAgent = updateAgent;
const removeAgent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield agent_model_1.default.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
        });
    }
    catch (e) {
        res.send({ success: false, errors: e });
    }
});
exports.removeAgent = removeAgent;
