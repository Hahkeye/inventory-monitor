const router = require('express').Router();
const { Op } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  try{
    let test = await Category.findAll({
      include: {
        model: Product
      }
    });
    res.json(test).status(200);
  }catch(e){
    res.json(e).status(400);
  }
});

router.get('/:id', async (req, res) => {
  try{
    let data = await Category.findByPk(req.params.id,{
      include:{
        model: Product
      }
    });
    res.json(data).status(200);
  }catch(e){
    res.json(e).status(400);
  }
});

router.post('/', async (req, res) => {
  try{
    let neCat = await Category.create(req.body);
    res.json(neCat).status(200);
  }catch(e){
    res.json(e).status(400);
  }
});

router.put('/:id', async (req, res) => {
  try{
    let val = await Category.update(req.body,{
      where: {
        id: req.params.id
      }
    });
    res.json(val).status(200);
  }catch(e){
    res.json(e).status(400);
  }
});

router.delete('/:id', async (req, res) => {
  try{
    let val = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(val).status(200);
  }catch(e){
    res.json(e).status(400);
  }
});

module.exports = router;
