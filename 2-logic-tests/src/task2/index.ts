export const findDuplicateTransactions = (transactions = []) => {

  transactions = transactions.sort(calculateTime)
  const duplicatedTrans = []
  const minute = 60000

  // groups transactions based on their source, target, category and amount
  const similarTrans = transactions.reduce((total, trans) => {
    const key = trans.sourceAccount + trans.targetAccount + trans.category + trans.amount
    total[key] = [...(total[key] || []), trans]
    return total
  }, {})

  Object.keys(similarTrans).forEach(key => {
    let previousTransaction   // holds previous transaction
    let duplicates = [] // holds duplicates of group

    similarTrans[key].forEach((txn, item) => {
      if (previousTransaction) {
        const endTime = new Date(previousTransaction.time).getTime()
        const startTime = new Date(txn.time).getTime()

        if (startTime - endTime <= minute) {
          duplicates = duplicates.length === 0 ? [previousTransaction, txn] : [...duplicates, txn]
        } else if (duplicates.length) {
          duplicatedTrans.push(duplicates)
          duplicates = []
        }
      }

      // if transaction is last of group, send duplicates to the list
      if (similarTrans[key].length === item + 1 && duplicates.length) {
        duplicatedTrans.push(duplicates)
      }

      // saves transaction for next iteration
      previousTransaction = txn
    })
  })

  // sorts duplicates by their first transaction time
  return duplicatedTrans.sort((a1, a2) => {
    return calculateTime(a1[0], a2[0])
  })
}


const calculateTime = (time1, time2) => {
  const m1 = new Date(time1.time).getTime()
  const m2 = new Date(time2.time).getTime()
  return m1 >= m2 ? 1 : -1
}
