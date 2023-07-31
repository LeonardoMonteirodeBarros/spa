import { Router } from "./router.js";

const router = new Router();
router.add("/spa", "/pages/home.html");
router.add("/spa/universe", "/pages/universe.html");
router.add("/spa/exploration", "/pages/exploration.html");


router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();










