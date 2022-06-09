import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import classes from "../Container.module.css";
import TransactionsItemsMonthGroup from "./MonthGroup";
import {formatYear, formatMonth} from "../../../../common/utils/utils";

import {selectCurrentYear, selectFilteredTransactions} from "../../../../../reducers/transactions/transactions-slice";

function TransactionsItemsYearGroup({year}) {
  const getCurrentYear = useSelector(selectCurrentYear);
  const getFilteredTransactions = useSelector(selectFilteredTransactions);
  const filteredTransactions = [...getFilteredTransactions];

  const [transaction, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(10);
  const [prevPage, setPrevPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      setTransactions([...transaction, ...filteredTransactions.slice(prevPage, currentPage)]);
      setCurrentPage((prevState) => prevState + 10);
      setPrevPage((prevState) => prevState + 10);
      setTotalCount(transaction.length);
      setFetching(false);
    }
  }, [fetching]);

  const yearTransactions = transaction
  .filter((transaction) => formatYear(transaction.date) === year);
  const nodeRef = React.useRef(null);
  const months = [...new Set(yearTransactions
    .map(date => formatMonth(date.date)))];

  const isCurrentYear = getCurrentYear === year;

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;

    if (scrollHeight - (scrollTop + innerHeight) < 100 && totalCount < filteredTransactions.length) {
      setFetching(true);
    } else {
      setFetching(false);
    }
  };

  return (
    <ul className="transactions__list">
      {!isCurrentYear && <p className={classes.TransactionsYear} ref={nodeRef}>{year}</p>}
      {months.map((month) =>
        <TransactionsItemsMonthGroup transactions={yearTransactions} month={month} key={month} />
      )}
    </ul>
  );
}

export default TransactionsItemsYearGroup;
