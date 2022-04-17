import React, {useState} from "react";
import {useDispatch} from "react-redux";

import classes from "../Container.module.css";

import {setIsTransactionTypeClick, setIsButtonShow, updatingTransaction, setIsEditing} from "../../../../../reducers/transactions/transactions-slice";
import WithCSSTransition from "../../../../common/hoc/WithCSSTransition/WithCSSTransition";

function TransactionsItem({categoryTitle, accountTitle, expense, sum, id, icon, date, accountId, categoryId, ...rest}) {
  const dispatch = useDispatch();
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const handleDeleteButtonToggle = () => {
    setShowDeleteBtn(!showDeleteBtn);
  };

  const onItemClick = () => {
    dispatch(setIsTransactionTypeClick());
    dispatch(setIsButtonShow());
    dispatch(setIsEditing(true));
    dispatch(updatingTransaction({id, sum, date, expense, category: categoryTitle, account: accountTitle, categoryId, accountId}));
  };

  const nodeRefItem = React.useRef(null);

  return (
    <WithCSSTransition
      inProp={rest.in}
      animationType={"fade"}
      timeout={300}
      nodeRef={nodeRefItem}
    >
      <li
        className={classes.TransactionsList}
        onMouseOver={handleDeleteButtonToggle}
        onMouseOut={handleDeleteButtonToggle}
        ref={nodeRefItem}
        onClick={onItemClick}
      >
        <div className={classes.IconWrapper}>
          <i className={`${classes.TransactionsIcon} fas ${icon ? icon : ""}`}></i>
        </div>
        <div className={classes.GroupWrapper}>
          <div className={classes.TransactionsContentWrapper}>
            <p>{categoryTitle}</p>
            <p>{expense ? "-" : "+"}{sum} €</p>
          </div>
          <div className={classes.TransactionsContentWrapper}>
            <p className={classes.TransactionsItemAccount}>{accountTitle}</p>
          </div>
        </div>
      </li>
    </WithCSSTransition>
  );
}

export default TransactionsItem;
