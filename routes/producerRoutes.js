const { addProducer, getAllProducers } = require("../controllers/producerController");


const router = require("express").Router();

router.post("/addProducer",addProducer);
router.get("/getAllProducers", getAllProducers);

module.exports = router;