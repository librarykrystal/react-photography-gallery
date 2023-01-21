CREATE TABLE gallery (
	"id" serial PRIMARY KEY,
	"path" varchar(255),
	"description" varchar(255),
	"likes" integer
);

INSERT INTO gallery (path, description, likes)
VALUES
('images/thinker.jpg', 'Oh, I know this one! Just give me a minute.', 29),
('images/moulinRouge.jpg', 'It uses electricity.', 99),
('images/catacombs.jpg', 'Uhh, I thought we were going to comb cats...', 13),
('images/nike.jpg', 'Some nice stairs.', 17),
('images/mannequin.jpg', 'Who nose?', 54),
('images/notreDame.jpg', 'He shoulda used sunscreen.', 0),
('images/buttesChaumont.jpg', 'Trash to treasure.', 42),
('images/pantheonCrypt.jpg', 'This guy nose.', 1),
('images/pomponOwl.jpg', 'A striking sil-chouette.', 77);