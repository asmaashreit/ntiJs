const getAllData = () => JSON.parse(localStorage.getItem('Banks')) || []

const setAllData = (Banks) => localStorage.setItem('Banks', JSON.stringify(Banks))

const addBank = (name, balance) => {
    let addBank = {
        addBankId: parseInt(((new Date()).getTime()) * Math.random()),
        addBankName: name,
        addBankBalance: balance
    }
    Banks = getAllData()
    Banks.push(addBank)
    setAllData(Banks)
}

//addBank('as', 1200)

const showAllBanks = () => {
        Banks = getAllData()
        Banks.forEach(b => {
            console.log(`BankIdAcc: ${b.addBankId} and BankName: ${b.addBankName} and BankBalance: ${b.addBankBalance}`)
        });
    }
    //console.log(showAllBanks())

const getBankAccountIndex = (bankId) => {
    Banks = getAllData()
    findedBankAccount = Banks.findIndex(b => b.addBankId == bankId)
    return findedBankAccount
}

//console.log(getBankAccountIndex(649006773562))
const deleteBankAccount = (bankId) => {
        findedBankAccount = getBankAccountIndex(bankId)
        if (findedBankAccount === -1) return console.log('Bank Account not found')
        Banks = getAllData()
        Banks.splice(findedBankAccount, 1)
        setAllData(Banks)
    }
    //deleteBankAccount(656804740194)

const editBankAccount = (bankId, newName, newBalance) => {
    findedBankAccount = getBankAccountIndex(bankId)
    if (findedBankAccount == -1) return console.log('Bank Account not found')
    Banks = getAllData()
    Banks[findedBankAccount].addBankName = newName
    Banks[findedBankAccount].addBankBalance = newBalance
    setAllData(Banks)
}

//editBankAccount(1518432349303, 'soma', 3000)