import expensesReducer from '../../reducers/expenses';
import uuid from 'uuid';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-4'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ]);
});

test('should return state with added expense', () => {
  const expense = {
    id: '4',
    description: 'Dog',
    amount: 1200,
    note: '',
    createdAt: 10
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should return state with edited expense', () => {
  const expense = {
    id: '1',
    updates: {
      description: 'Bubble gum',
      note: '',
      amount: 300,
      createdAt: 0
    }
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expense.id,
    updates: expense.updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual({ description: 'Bubble gum', amount: 300, note: '', id: '1', createdAt: 0 });
});

test('should not edit expense if expense not found', () => {
  const expense = {
    id: '-1',
    updates: {
      description: 'Bubble gum',
      note: '',
      amount: 300,
      createdAt: 0
    }
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expense.id,
    updates: expense.updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});