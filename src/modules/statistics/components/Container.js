import React, {lazy, Suspense} from "react";
import {useSelector} from "react-redux";

import {
  selectUserId
} from "../../../reducers/user/user-slice";
import {
  selectCurrentMonth, selectCurrentYear,
  selectFilteredTransactions
} from "../../../reducers/transactions/transactions-slice";
import {
  selectAllBudgetState, selectUpdatedBudgetState
} from "../../../reducers/budget/budget-slice";
import {
  selectFilteredCategories
} from "../../../reducers/categories/categories-slice";

import classes from "./Container.module.css";
import Loader from "../../common/components/Loader/Loader";


function StatisticsContainer() {
  const MonthBalance = lazy(() => import("./MonthBalance/MonthBalance"));
  const YearExpenses = lazy(() => import("./YearExpenses/YearExpenses"));
  const MonthExpenses = lazy(() => import("./MonthExpenses/MonthExpenses"));
  const Budget = lazy(() => import("./Budget/Budget"));

  const filteredTransactions = useSelector(selectFilteredTransactions);
  const allCategories = useSelector(selectFilteredCategories);
  const month = useSelector(selectCurrentMonth);
  const year = useSelector(selectCurrentYear);
  const budget = useSelector(selectAllBudgetState);
  const updatedBudget = useSelector(selectUpdatedBudgetState);
  const userId = useSelector(selectUserId);

  const newBudget = budget && Object.keys(budget).length !== 0 && budget;
  const newUpdatedBudget = updatedBudget && Object.keys(updatedBudget).length !== 0 && updatedBudget;

  return (
    <section className={classes.Container}>
      <Suspense fallback={<Loader />} >
        <MonthBalance />
        <YearExpenses />
        <MonthExpenses
          currentYear={year}
          currentMonth={month}
          transactions={filteredTransactions}
          budget={newBudget}
          userId={userId}
          allCategories={allCategories}
        />
        <Budget
          currentYear={year}
          currentMonth={month}
          budget={newBudget}
          updatedBudget={newUpdatedBudget}
          userId={userId}
        />
      </Suspense>
    </section>
  );
}

export default StatisticsContainer;
