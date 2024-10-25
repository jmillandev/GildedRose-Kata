# Updating Proposal for updating

- Se comenzaria por crear constantes de todos los items

- ```javascript {
  name: "Conjured",
  rules: [
    {
    operation: REDUCE,
    quantity: 2,
    threshold : {
    min: 1,
    max: Infinity
      }
    },
  ],
  {
    operation: INCREASE,
    quantity: 1,
    threshold: {
      min: Infinity,
      max: 0
    }
  }

  }

  {
    name: "Backstage ---",
    rules: [
      {
        operation: SET,
        quantity: 0,
        proerty: 'sellin',
        threshold: {
          min: Infinity,
          max: 0
        }
      }
    ]
  }

  ```
