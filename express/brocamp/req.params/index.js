app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`You requested information for user ${userId}`);
  });
  