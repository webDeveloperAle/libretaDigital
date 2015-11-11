//File: routes/tvshows.js
module.exports = function(app) {

  var Alumno = require('../models/alumno.js');

  //GET - Return all tvshows in the DB
  findAllAlumnos = function(req, res) {
    console.log("ALE!!");

  	Alumno.find(function(err, alumno) {
  		if(!err) {
        console.log('GET /alumnos')
  			res.send(alumno);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
  	Alumno.findById(req.params.id, function(err, alumno) {
  		if(!err) {
        console.log('GET /alumno/' + req.params.id);
  			res.send(alumno);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new TVShow in the DB
  addAlumno = function(req, res) {
  	console.log('POST ADD ALUMNO');
  	console.log(req.body);

  	var alumno = new Alumno({
  		name:    req.body.name,
  		year: 	 req.body.year,
      summary: req.body.summary
  	});

  	alumno.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(alumno);
  };

  //PUT - Update a register already exists
  updateAlumno = function(req, res) {
  	Alumno.findById(req.params.id, function(err, alumno) {
  		alumno.name    = req.body.petId;
  		alumno.year    = req.body.year;
      alumno.summary    = req.body.summary;

  		alumno.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(alumno);
  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteAlumno = function(req, res) {
  	Alumno.findById(req.params.id, function(err, alumno) {
  		alumno.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/api/alumnos', findAllAlumnos);
  app.get('/api/alumno/:id', findById);
  app.post('/api/alumno', addAlumno);
  app.put('/api/alumno/:id', updateAlumno);
  app.delete('/api/alumno/:id', deleteAlumno);

}
