const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  res.json(await Tag.findAll({
    include: Product
  })).status(200);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  res.json(await Tag.findByPk(req.params.id,{
    include: Product
  })).status(200);
});

router.post('/', async (req, res) => {
  // create a new tag
  let t = await Tag.create(req.body);
  res.json(t).status(200);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  let val = await Tag.update(req.body,{
    where: {
      id: req.params.id
    }
  });
  res.json(val).status(200);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  let val = await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(val).status(200);
});

module.exports = router;
