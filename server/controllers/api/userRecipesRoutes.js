const router = require("express").Router();
const { Recipes, User, UserRecipes } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userRecipesData = await UserRecipes.findAll({
      where: { userId: req.session.user_id },
      include: [
        {
          model: Recipes,
        },
      ],
    });
    res.status(200).json(userRecipesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Route to get array bookmarked recipes ID

router.get("/book", withAuth, async (req, res) => {
  try {
    const userRecipesData = await UserRecipes.findAll({
      where: { userId: req.session.user_id },
    });
    let arr = [];
    userRecipesData.map((rec) => arr.push(rec.recipeId));
    res.status(200).json(arr);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const newUserRecipe = await UserRecipes.create({
      recipeId: req.body.recipeId,
      userId: req.session.user_id,
    });

    res.status(200).json(newUserRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

//DELETE bookmarked recipe
router.delete("/", withAuth, async (req, res) => {
  try {
    const deleteUserRecipe = await UserRecipes.destroy({
      where: {
        userId: req.session.user_id,
        recipeId: req.body.recipeId,
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
