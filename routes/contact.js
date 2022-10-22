const router = require("express").Router();
const {VerifyToken} = require('../middlewares/contact');
const {addContact,addManyContact,getSingleContact,getMatchedContact,getListOfContacts,updateContact,deleteContact} = require('../controllers/contact');

router.post("/add",VerifyToken,addContact );
router.post("/addmany",VerifyToken, addManyContact);
router.get("/get/:name",VerifyToken,getSingleContact);
router.get("/search/:query",VerifyToken,getMatchedContact);
router.get("/list",VerifyToken,getListOfContacts);
router.delete("/delete/:name",VerifyToken,deleteContact);
router.put("/update/:name",VerifyToken,updateContact);
module.exports = router;