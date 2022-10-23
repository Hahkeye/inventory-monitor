const router = require('express').Router();
const { Op } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  let test = await Category.findAll({
    include: {
      model: Product
    }
  });
  res.json(test).status(200);
});

router.get('/:id', async (req, res) => {
  let data = await Category.findByPk(req.params.id,{
    include:{
      model: Product
    }
  });
  res.json(data).status(200);
});

router.post('/', async (req, res) => {
  let neCat = await Category.create(req.body);
  res.json(neCat).status(200);
});

router.put('/:id', async (req, res) => {
  let val = await Category.update(req.body,{
    where: {
      id: req.params.id
    }
  });
  res.json(val).status(200);
});

router.delete('/:id', async (req, res) => {
  let val = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(val).status(200);
});

module.exports = router;
