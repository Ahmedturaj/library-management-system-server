"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("../app/modules/user/user.router"));
const router = express_1.default.Router();
// Proper structure for route modules
const moduleRouter = [
    {
        path: "/user",
        router: user_router_1.default
    }
];
// Register all routes
moduleRouter.forEach((route) => {
    router.use(route.path, route.router);
});
exports.default = router;
