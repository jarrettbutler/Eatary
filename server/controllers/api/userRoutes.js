const router = require("express").Router();
const { User, Recipes } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Recipes,
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Recipes,
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create({ ...req.body, loggedIn: true });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = userData.loggedIn;
      req.session.name = userData.name;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    console.log(userData);

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    await User.update({ loggedIn: true }, { where: { email: req.body.email } });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.imail = userData.email;

      req.session.logged_in = true;

      res.json({
        user: userData,
        loggedIn: req.session.logged_in,
        message: "You are now logged in!",
      });
    });

    // res.json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/login/:id", (req, res) => {
  User.update(
    {
      loggedIn: true,
    },
    {
      where: {
        id: req.session.user_id,
      },
    }
  )
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => res.json(err));
});

router.put("/logout", (req, res) => {
  User.update(
    {
      loggedIn: false,
    },
    {
      where: {
        id: req.session.user_id,
      },
    }
  );

  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
