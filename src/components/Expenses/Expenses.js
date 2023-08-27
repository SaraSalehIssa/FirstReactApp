import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  // let filterInfoText = '2019, 2021 and 2022';

  // if (filteredYear === '2019') {
  //   filterInfoText = '2020, 2021 and 2022';
  // } else if (filteredYear === '2020') {
  //   filterInfoText = '2019, 2021 and 2022';
  // } else if (filteredYear === '2021') {
  //   filterInfoText = '2019, 2020 and 2022';
  // } else {
  //   filterInfoText = '2019, 2020 and 2021';
  // }

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterdExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filterdExpenses}/>
        <ExpenseList items={filterdExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;