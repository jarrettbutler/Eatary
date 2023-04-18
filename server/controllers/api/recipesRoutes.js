const router = require("express").Router();
const { Recipes, User } = require("../../models");
const { Op } = require("sequelize");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  Recipes.findAll({ raw: true }).then((recipes) => {
    res.json(recipes);
  });
});

router.get("/find", async (req, res) => {
  // console.log(req.query.search);

  try {
    const recipesData = await Recipes.findAll({
      where: {
        title: {
          [Op.like]: `%${req.query.search}%`,
        },
      },
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json(recipesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipesData = await Recipes.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });
    res.status(200).json(recipesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newRecipe = await Recipes.create(req.body);
    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE recipe created by user
router.delete("/:id", async (req, res) => {
  try {
    const deleteUserRecipe = await Recipes.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteUserRecipe) {
      res.status(404).json({ message: "No recipe found with this id! " });
      return;
    }

    res.status(200).json(deleteUserRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
