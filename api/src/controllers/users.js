exports.getUsers = (req, res, next) => {
  try {
    res.send({
      name: 'name',
      lastName: 'lastName'
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserDetail = (req, res, next) => {
  const { id } = req.params;

  try {
    if (id === '1') {
      res.send({
        name: 'name',
        lastName: 'lastName',
        ci: '000000000',
        age: 20
      });
    } else {
      res.status(404).send({
        message: 'User not found'
      });
    }
  } catch (error) {
    next(error);
  }
};
