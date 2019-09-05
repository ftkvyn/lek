/**
 * CourceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAll: function (req, res) {
        Cource.find({})
            .populate('questions')
            .exec((err, data) => {
                if (err) {
                    console.error(err);
                }
                res.json(data);
            });
    }
};

