const { addActor, getAllActors } = require("../controllers/actorController");

const router = require("express").Router();

router.post("/addActor",addActor);
router.get("/getAllActors", getAllActors);

module.exports = router;