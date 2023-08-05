const bankAccountService = require("../domain/bank-account.service")


module.exports = () => {

    const openAccount =  (req, res) => {
        console.log("controller");
        try {
            console.log(req);
            const newAccount = req.body

            bankAccountService.createAccount(newAccount)
            res.json("¡Cuenta abierta con éxito!")
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }

    }

    return  {openAccount} 
}