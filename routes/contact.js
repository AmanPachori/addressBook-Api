const router = require("express").Router();
const {addContact,addManyContact,getSingleContact,getMatchedContact,updateContact,deleteContact} = require('../controllers/contact');

router.post("/add",addContact );
router.post("/addmany", addManyContact);
router.get("/get/:name",getSingleContact);
router.get("/search/:query",getMatchedContact);
router.delete("/delete/:name",deleteContact);
router.put("/update/:name",updateContact);
module.exports = router;
