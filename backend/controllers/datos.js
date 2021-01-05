require('dotenv').config()
const db = require('../models/')
const usersModel = db.datos
const Op = db.Sequelize.Op
const code = require('../commons/httpcodes')
const fs = require("fs");
const csv = require("fast-csv");


const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let datos = [];
    let path = __basedir + "/resources/uploads/" + req.file.filename;

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        row = analizeData(row)
        datos.push(row);
      })
      .on("end", () => {
        usersModel.bulkCreate(datos)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

analizeData (row) {
 console.log('Analyzing '+row.code)
 
 return row
}

// Create and Save a new user
exports.create = (req, res) => {
  let timeStamp = Date.now()

  // Create a user
  const user = new usersModel({
    codigo: req.body.netflixID,
    nombre: req.body.title,
    apellidoPaterno: req.body.year,
    apellidoMaterno: req.body.rated,
    fechaNaturalizacion: req.body.genre,
    fechaNacimiento: req.body.director,
    nacionalidad: req.body.writer,
    fechaContrato: req.body.actors,
    fechaBaja: req.body.plot,
    CUIP: req.body.country,
    folio: req.body.awards,
    rfc: req.body.poster,
    claveife: req.body.production,
    curp: req.body.netflixID,
    imss: req.body.netflix_url_user,
    nombre_completo: req.body.available_from_date,
    municipio: req.body.suitable_for_age,
    entidad_federativa: req.body.family_friendly,
    modo_nacionalidad: req.body.number_of_seasons,
    colonia:  req.body.number_of_seasons
  });

  // Save user in the database
  user
    .save(user)
    .then(data => {
      res.status(201).send({ message: "user saved successfully: "+req.body.title,
                             data:data,
                             code:code.CREATED,
                             timestamp: Date.now() });
    })
    .catch(err => {
      logger.error("Some error occurred while creating the user: "+err)
      res.status(code.INTERNAL_SERVER_ERROR).send({
        message:
          err.message || "Some error occurred while creating the user.",
          code:code.INTERNAL_SERVER_ERROR,
          timestamp: Date.now()  
      });
    });
};


// Retrieve all users from the database.
exports.findAll = (req, res) => {
  //let from = 0
  //let rowscount = process.env.ROWS_BLOCK_FOR_SHOW_COUNT 
  
  usersModel.findAndCountAll()
    .then(data => {
      res.send({  message: "All users have been returned successfully",
                  data:data,
                  code:code.OK,
                  count:data.count, 
                  timestamp: Date.now() 
              });
    })
    .catch(err => {
      res.status(code.INTERNAL_SERVER_ERROR).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

 userModel.findByPk(id)
    .then(user => {
      if (!Object.entries(user))
        res.status(code.NOT_FOUND).send({ message: "Not found user with id " + id });
      else res.status(code.OK).send({data:user, 
                                     code: code.OK,              
                                     "timestamp": Date.now()});
    })
    .catch(err => {
      res
        .status(code.INTERNAL_SERVER_ERROR)
        .send({ message: "Error retrieving user with id=" + err });
    });
};

