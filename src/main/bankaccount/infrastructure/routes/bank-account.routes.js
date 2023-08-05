var express = require('express');
var router = express.Router();
const BankAccountController = require("../../api/bank-account-controller")


const bankAccountRoutes =  () => {
  
  console.log("bank-account.routes");
  const bankAccountController = BankAccountController()
  router.post('/', bankAccountController.openAccount)

  return router

}

module.exports = bankAccountRoutes;
