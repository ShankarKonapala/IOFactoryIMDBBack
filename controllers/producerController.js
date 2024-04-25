const Producer = require("../model/producerModel");

module.exports.addProducer = async (req, res, next) => {
    try {
        const { producerName, gender, dob, bio } = req.body;
        const producerCheck = await Producer.findOne({ producerName });
        if (producerCheck) {
            return res.json({ msg: "Producer alredy exists", status: false })
        }
        const producer = await Producer.create({
            producerName,
            gender,
            dob,
            bio
        });
        return res.json({ status: true, producer });
    } catch (exception) {
        next(exception)
    }
}

module.exports.getAllProducers = async (req, res, next) => {
    try {
      const producers = await Producer.find({}, 'producerName _id');
      return res.json(producers);
    } catch (ex) {
      next(ex);
    }
  };