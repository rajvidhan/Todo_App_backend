const {Router} = require("express");
const { getTodo, savetodo, deletetodo, updatetodo } = require("../Controllers/Todocontroler");

const router = Router();


router.get("/",getTodo);
router.post("/save",savetodo);
router.post("/update",updatetodo);
router.post("/delete",deletetodo);


module.exports = router;