const { createSlice } = require('@reduxjs/toolkit');

export const expenseSlice = createSlice({
  name: 'expenseSlice',
  initialState: {
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice) => {
      currentSlice.expenseList.push({ name: 'cherry' });
    },
    //
    //
    //
  },
});

export const { addExpenseAction } = expenseSlice.actions;
