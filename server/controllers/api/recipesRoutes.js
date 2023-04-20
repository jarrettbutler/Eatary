const router = require("express").Router();
const { Recipes, User } = require("../../models");
const { Op } = require("sequelize");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  Recipes.findAll({ raw: true }).then((recipes) => {
    res.json(recipes);
  });
});

router.get("/find", withAuth, async (req, res) => {
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

router.get("/:id", withAuth, async (req, res) => {
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

router.post("/", withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipes.create({
      ...req.body,
      userId: req.session.user_id,
    });
    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE recipe created by user
router.delete("/", withAuth, async (req, res) => {
  try {
    const deleteUserRecipe = await Recipes.destroy({
      where: {
        id: req.body.id,
        userId: req.session.user_id,
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

// UPDATE user generated Recipe

router.put("/", async (req, res) => {
  try {
    const updatedUserRecipe = await Recipes.update(req.body, {
      where: {
        id: req.body.id,
        userId: req.session.user_id,
      },
    });
    res.status(200).json(updatedUserRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
