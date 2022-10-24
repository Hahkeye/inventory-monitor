const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    res.json(await Tag.findAll({
      through: ProductTag,
      include: Product
    })).status(200);
  }catch(e){
    res.json(e).status(400);
  }
  
});

router.get('/:id', async (req, res) => {
  try{
    res.json(await Tag.findByPk(req.params.id,{
      through: ProductTag,
      include: Product
    })).status(200);
  }catch(e){
    res.json(e).status(400);
  }
  
});

router.post('/', async (req, res) => {
  try{
    let t = await Tag.create(req.body);
    res.json(t).status(200);
  }catch(e){
    res.json(e).status(400);
  }
});

router.put('/:id', async (req, res) => {
  try{
    let val = await Tag.update(req.body,{
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
    let val = await Tag.destroy({
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
