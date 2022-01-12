import React from "react";
import {useSelector} from "react-redux";
import {CSSTransition} from "react-transition-group";

import classes from "../Container.module.css";

import {selectFilteredTransactions} from "../../../../../reducers/transactions/transactions-slice";

import TransactionItemsDateGroup from "./DateGroup";
import TransactionsDateHeader from "./DateHeader";

function TransactionsItemsDateGroupWrapper({date, ...rest}) {
  const transactions = useSelector(selectFilteredTransactions);
  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      {...rest}
      classNames={{
        enter: `${classes.enter}`,
        enterActive: `${classes.enterActive}`,
        exit: `${classes.exit}`,
        exitActive: `${classes.exitActive}`,
        exitDone: `${classes.exitDone}`,
      }}
      timeout={300}
      key={date}
      nodeRef={nodeRef}
    >
      <li ref={nodeRef}>
        <TransactionsDateHeader
          date={date}
          transactions={transactions}
        />

        <TransactionItemsDateGroup
          date={date}
          transactions={transactions}
        />
      </li>
    </CSSTransition>
  );
}

export default TransactionsItemsDateGroupWrapper;