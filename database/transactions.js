// Array of objects
// Each object corresponds to all the accounts of an user
// key in each object is the bank_account of that user
// Each bank has array of transactions

const transactions = [
  {
    icici: [
      { type: "credit", amount: 500, date: "dateObject", reversible: false },
      { type: "debit", amount: 200, date: "dateObject", reversible: true },
    ],
    sbi: [
      { type: "credit", amount: 500, date: "dateObject", reversible: false },
      { type: "debit", amount: 200, date: "dateObject", reversible: false },
    ],
  },
];
