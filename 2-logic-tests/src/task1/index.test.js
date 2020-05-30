import { getBalanceByCategoryInPeriod } from './';

describe('Task1', () => {
  it('returns 0 if there are no transactions', () => {
    const result = getBalanceByCategoryInPeriod(
      [],
      'groceries',
      '2018-03-01T10:34:30.000Z',
      '2018-03-31T10:34:30.000Z',
    );

    expect(result).toEqual(0);
  });

  it('returns 0 if there are no transactions in selected date period', () => {
    const INPUT = [{
      id: 1,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -30,
      category: 'groceries',
      time: '2019-03-12T12:34:00Z'
    }];

    const result = getBalanceByCategoryInPeriod(
      INPUT,
      'groceries',
      '2018-03-01T10:34:30.000Z',
      '2018-03-03T10:34:30.000Z',
    );

    expect(result).toEqual(0);
  });

  const INPUT = [
    {
      id: 1,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 50,
      category: 'groceries',
      time: '2018-03-02T10:34:30.000Z'
    },
    {
      id: 2,
      sourceAccount: 'my_account',
      targetAccount: 'my_account',
      amount: 10,
      category: 'others',
      time: '2018-03-02T10:34:30.000Z'
    },
    {
      id: 3,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 30,
      category: 'groceries',
      time: '2018-03-03T10:34:30.000Z'
    },
    {
      id: 4,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -50,
      category: 'groceries',
      time: '2018-03-05T10:34:30.000Z'
    },
    {
      id: 5,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -60,
      category: 'groceries',
      time: '2018-03-05T10:34:30.000Z'
    },
    {
      id: 6,
      sourceAccount: 'my_account',
      targetAccount: 'my_account',
      amount: -60,
      category: 'others',
      time: '2018-03-06T10:34:30.000Z'
    },
    {
      id: 7,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 100,
      category: 'others',
      time: '2018-03-07T10:34:30.000Z'
    }
  ]

  it('returns 80 in groceries category in selected date period', () => {
    const result = getBalanceByCategoryInPeriod(
      INPUT,
      'groceries',
      new Date('2018-03-01'),
      new Date('2018-03-04')
    );

    expect(result).toEqual(80);
  });

  it('returns -80 in groceries category in selected date period', () => {
    const result = getBalanceByCategoryInPeriod(
      INPUT,
      'groceries',
      new Date('2018-03-03'),
      new Date('2018-03-06')
    );

    expect(result).toEqual(-80);
  });

  it('returns 0 on non-matching category', () => {
    const result = getBalanceByCategoryInPeriod(
      INPUT,
      'category',
      new Date('2018-03-03'),
      new Date('2018-03-06')
    );

    expect(result).toEqual(0);
  });

  it('returns 0 if startTime is greater than endTime', () => {
    const result = getBalanceByCategoryInPeriod(
      INPUT,
      'groceries',
      new Date('2018-03-12'),
      new Date('2018-03-02')
    );

    expect(result).toEqual(0);
  });


});
