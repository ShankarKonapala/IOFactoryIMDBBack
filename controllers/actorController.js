const Actor = require("../model/actorModel");

module.exports.addActor = async (req, res, next) => {
    try {
        const { actorName, gender, dob, bio } = req.body;
        const actorCheck = await Actor.findOne({ actorName });
        if (actorCheck) {
            return res.json({ msg: "Actor alredy exists", status: false })
        }
        const actor = await Actor.create({
            actorName,
            gender,
            dob,
            bio
        });
        return res.json({ status: true, actor });
    } catch (exception) {
        next(exception)
    }
}

module.exports.getAllActors = async (req, res, next) => {
    try {
      const actors = await Actor.find({}, 'actorName _id');
      return res.json(actors);
    } catch (ex) {
      next(ex);
    }
  };