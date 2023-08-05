const bankAccountService = require("../../../main/bankaccount/domain/bank-account.service")

describe("Test Bank Account Service", () => {
    test("Create new account - account holder is not present", () => {
        const expected = "El propietario es obligatorio"
        let newAccount = {
            holder: null,
            funds: 0,
            accountNumber: "12345"
        }
        const result = bankAccountService.createAccount(newAccount)

        expect(result).toBe(expected)
    })
})