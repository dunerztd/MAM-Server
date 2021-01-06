const AWS = require('aws-sdk');
require('dotenv').config()

const {
  getAllArtworks,
  addArtworkToDB,
} = require('../utils/artworks_utilities')

// retrieve all artwork from the db and send to the front-end
const getArtworks = function (req, res) {
    // execute the query from getAllPosts
    // returns artwork in alphabetical order
  getAllArtworks(req)
    .sort({ name: 1 })
    .exec((err, artworks) => {
      if (err) {
        res.status(500);
        return res.json({
        error: err.message
        });
      }
      res.send(artworks);
    });
};

// create a single artwork
const createArtwork = async function (req, res) {

  // creating a new artwork entry in the database
  addArtworkToDB(req)
    .save((err, artwork) => {
      // console.log(artwork);
      if (err) {
        res.status(500);
        return res.json({
          error: err.message
        });
      }
      res.sendStatus(201);
    })
}

// retrieve a single artwork
const getSingleArtwork = function (req, res) {

  // executes query to retrieve a single artwork by ID
  getSingleArtworkFromDB(req)
    .exec((err, singleArtwork) => {
      if (err) {
        res.status(500);
        return res.json({
          error: err.message
        });
      }
      res.send(singleArtwork);
    });
}

const deleteSingleArtwork = function (req, res) {

  deleteSingleArtworkFromDB
}

module.exports = {
  getArtworks,
  createArtwork,
  getSingleArtwork
}