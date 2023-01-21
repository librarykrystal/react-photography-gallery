const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
// Addition for database STRETCH GOAL:
const pool = require('../modules/pool.js');

// DATABASE GET
router.get("/", (req, res) => {
    console.log("GET");
    // queryText gets all items from DB and orders them by ascending ID (so future photos would add to end)
    let queryText = 'SELECT * from "gallery" ORDER BY "id" ASC; ';
    pool
      .query(queryText)
      .then((result) => {
        console.log("results from db:", result.rows);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log("error making query", error);
        res.sendStatus(500);
      });
  });

// DATABASE PUT
router.put("/like/:id", (req, res) => {
    console.log("PUT req.params.id:", req.params.id);
    // queryText tells DB to update by adding 1 to the likes count of the item with this ID:
    let queryText = `UPDATE "gallery" SET "likes" = likes + 1 WHERE id =${req.params.id}; `;
    pool
      .query(queryText)
      .then((result) => {
        console.log('PUT result:', result);
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log("PUT error", error);
        res.sendStatus(500);
      });
  });



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