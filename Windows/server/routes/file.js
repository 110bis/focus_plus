const express = require('express');
const router = express.Router();
const multer = require('multer');
const exec = require('child_process').exec;
const path = require('path');
const File = require('../model/file');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './files');
        },
        filename(req, file, cb) {
            cb(null, 'image.png');
        }
    }),
    /*limits: {
        fileSize: 1000000 // max file size if you want / need | the number is in bytes so 1MB = 1000000 bytes
    },*/
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
            return cb(
                new Error(
                    'Envoyer seulement des images (format jpeg, jpg, png)'
                )
            );
        }
        cb(undefined, true); //continue with upload
    }
});

//\\ ROUTE POST //\\

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
      //const { path, mimetype } = req.file;
      const file = new File({
        file_path: "files/images.zip",
        file_mimetype: "archive/zip"
      });
      await file.save();
      exec('gmicwin.bat');
      res.send('Votre image a bien été envoyée.');
    } catch (error) {
      res.status(400).send("Erreur pendant l'envoie. Réessayez plus tard.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

//\\ ROUTE GET //\\

router.get('/getAllFiles', async (req, res) => {
  try {
      const files = await File.find({});
      const sortedByCreationDate = files.sort(
          (a, b) => b.createAt - a.createAt
      );
      res.send(sortedByCreationDate);
  } catch (error) {
      res.status(400).send('Erreur pendant la récupération des images. Réeesayez plus tard.');
  }
});

router.get('/download/:id', async (req, res) => {
  try {
      const file = await File.findById(req.params.id);
      res.set({
          'Content-Type': file.file_minetype
      });
      res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
      res.status(400).send('Erreur pendant le téléchargement. Réessayez plus tard.');
  }
});

module.exports = router;