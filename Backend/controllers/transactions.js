// @desc get all transactions
// @routes GET /api/v1/transactions
// acess Pubic

exports.getTransactions = (req, res, next) => {
  res.send("GET Transactions");
};

// @desc add transaction
// @routes POST /api/v1/transactions
// acess Pubic

exports.addTransaction = (req, res, next) => {
  res.send("ADD Transaction");
};

// @desc delete transaction
// @routes DELETE /api/v1/transactions/:id
// acess Pubic

exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE Transaction");
};
