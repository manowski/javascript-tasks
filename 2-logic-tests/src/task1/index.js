export const getBalanceByCategoryInPeriod = (
  transactionsList = [],
  category,
  startTime,
  endTime
) => {

  if (!transactionsList.length) return 0

  const total = transactionsList
    .filter(trans => trans.category === category && startTime <= new Date(trans.time) && endTime >= new Date(trans.time))
    .reduce((total, num) => total + num.amount, 0)

  return total
}
