import { findDuplicateTransactions } from './';


describe('Task2', () => {
  it('returns empty array if there are no transactions', () => {
    expect(findDuplicateTransactions([])).toEqual([]);
  });

  it('returns empty array if there are no duplicates', () => {
    const INPUT = [
      {
        id: 3,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:34:30.000Z'
      },
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'D',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 6,
        sourceAccount: 'A',
        targetAccount: 'E',
        amount: 250,
        category: 'eating_out',
        time: '2018-03-02T10:33:05.000Z'
      },
      {
        id: 4,
        sourceAccount: 'A',
        targetAccount: 'F',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:36:00.000Z'
      },
      {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'G',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:50.000Z'
      },
      {
        id: 5,
        sourceAccount: 'A',
        targetAccount: 'H',
        amount: 250,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      }
    ];

    expect(findDuplicateTransactions(INPUT)).toEqual([]);
  });

  // Add more tests here...
  it('compare input and output', () => {
    const INPUT = [
      {
        id: 3,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:34:30.000Z'
      },
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 6,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 250,
        category: 'other',
        time: '2018-03-02T10:33:05.000Z'
      },
      {
        id: 4,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:36:00.000Z'
      },
      {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:50.000Z'
      },
      {
        id: 5,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 250,
        category: 'other',
        time: '2018-03-02T10:33:00.000Z'
      }
    ];
    const OUTPUT = [
      [
        {
          id: 1,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:33:00.000Z"
        },
        {
          id: 2,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:33:50.000Z"
        },
        {
          id: 3,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:34:30.000Z"
        }
      ],
      [
        {
          id: 5,
          sourceAccount: "A",
          targetAccount: "C",
          amount: 250,
          category: "other",
          time: "2018-03-02T10:33:00.000Z"
        },
        {
          id: 6,
          sourceAccount: "A",
          targetAccount: "C",
          amount: 250,
          category: "other",
          time: "2018-03-02T10:33:05.000Z"
        }
      ]
    ];

    expect(findDuplicateTransactions(INPUT)).toEqual(OUTPUT);
  });

  it('returns empty array if the category is not the same', () => {
    const INPUT = [
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating',
        time: '2018-03-02T10:32:00.000Z'
      }
    ];

    expect(findDuplicateTransactions(INPUT)).toEqual([]);
  });

  it('returns empty array if the sourceAccount is not the same', () => {
    const INPUT = [
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 2,
        sourceAccount: 'B',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:32:00.000Z'
      }
    ];

    expect(findDuplicateTransactions(INPUT)).toEqual([]);
  });

  it('returns empty array if the targetAccount is not the same', () => {
    const INPUT = [
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'C',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:32:00.000Z'
      }
    ];

    expect(findDuplicateTransactions(INPUT)).toEqual([]);
  });

  it('returns empty array if the amount is not the same', () => {
    const INPUT = [
      {
        id: 1,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 100,
        category: 'eating_out',
        time: '2018-03-02T10:33:00.000Z'
      },
      {
        id: 2,
        sourceAccount: 'A',
        targetAccount: 'B',
        amount: 10,
        category: 'eating_out',
        time: '2018-03-02T10:32:00.000Z'
      }
    ];
    
    expect(findDuplicateTransactions(INPUT)).toEqual([]);
  });

});
