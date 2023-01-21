const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// Additions for database STRETCH GOAL:
const pool = require('../modules/pool.js');

// DATABASE GET
router.get("/", (req, res) => {
    console.log("In router!");
    let queryText = 'SELECT * from "gallery" ORDER BY "id" ASC; ';
    pool
      .query(queryText)
      .then((result) => {
        console.log("results from db", result.rows);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log("error making query", error);
        res.sendStatus(500);
      });
  });

// DATABASE PUT
// TODO!



// ORIGINAL (HARDCODED ARRAY) BASE MODE ROUTES:

// // PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// // GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

module.exports = router;