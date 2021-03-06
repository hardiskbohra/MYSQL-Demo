var express = require('express');
var router = express.Router();
var controller = require('../controllers/boardController');

// localhost:8888/boards/
router.get('/', function(req, res, next) {

  controller.getAll(function(result) {
    res.json(result);
  },function(error) {
    res.status(500);
    res.json(error);
  });
});

// localhost:8888/boards/add
router.post('/add', function(req, res, next){

  controller.add(req.body,
    function(result) {
      res.json(result);
    },function(error) {
      res.status(500);
      res.json(error); 
    }
  );
});

// localhost:8888/boards/update/:id
router.put('/update/:id', function(req,res,next){
  
  controller.update(req.params.id,req.body,
    function(result) {
      res.json(result);
    },function(error) {
      res.status(500);
      res.json(error);
    }
  );
});

// localhost:8888/boards/delete/:id
router.delete('/delete/:id', function(req, res, next){
  controller.delete(req.params.id,
    function(result) {
      res.json(result);
    },function(error) {
      res.status(500);
      res.json(error);
    }
  );
});

module.exports = router;
