import React from "react";
import {useSelector, useDispatch} from "react-redux";

import classes from "./Popup.module.css";

import {
  updateCategory, loadCategories, deleteCategory, postCategory
} from "../../../../reducers/categories/categories-slice";
import {
  currentMonth, currentYear
} from "../../../../reducers/transactions/transactions-slice";
import {
  deleteAccount, postAccount, updateAccount, loadAccounts
} from "../../../../reducers/accounts/accounts-slice";

import ScrollToTop from "../../../common/hoc/ScrollToTop/ScrollToTop";
import {usePopup} from "../../../common/hoc/Popup/PopupContext";
import {formatYear, formatMonth} from "../../../common/utils/utils";

const isExists = (data, type, item) => {
  return data.find((it) => it[type].title === item) ? true : false;
};

const isDelete = (data, type, id) => {
  return data.find((it) => it[`${type}Id`] === id) ? true : false;
};

function Popup({itemState, prevItem, setItem, transactions}) {
  const dispatch = useDispatch();
  const month = useSelector(currentMonth);
  const year = useSelector(currentYear);
  const {toggle} = usePopup();
  const {id, title, userId, incomes, header} = itemState;

  const prevState = JSON.stringify(itemState) === JSON.stringify(prevItem);

  // move to utils
  const filteredTransactions = transactions
    .filter((transaction) => formatYear(transaction.date) === year)
    .filter((transaction) => formatMonth(transaction.date) === month);

  const sumCurrentCategory = filteredTransactions
    .filter((transaction) => transaction.category.title === title)
    .map((transaction) => transaction.sum)
    .reduce((a, b) => a + b, 0);

  const totalSum = transactions
    .filter((transaction) => transaction.category.title === title)
    .map((transaction) => transaction.sum)
    .reduce((a, b) => a + b, 0);

  const categoryType = [...new Set(transactions
    .filter((transaction) => transaction.category.title === title)
    .map((transaction) => transaction.expense))].join();

  const onChangeType = async ({target}) => {
    setItem({id, title, userId, incomes: target.checked, header});
  };

  const onChangeItem = ({target}) => {
    const value = target.value;
    const type = incomes ? incomes : false;
    setItem({id, title: value, userId, incomes: type, header});
  };

  const onClickEditButton = () => {
    if (header === "Categories") {
      dispatch(updateCategory(itemState));
      dispatch(loadCategories());
    }
    if (header === "Accounts") {
      dispatch(updateAccount(itemState));
      dispatch(loadAccounts());
    }
    toggle();
  };

  function onClickDeleteButton() {
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      if (header === "Categories") {
        if (isDelete(transactions, "category", id)) {
          alert("This category is already in use and cannot be deleted!");
          return;
        }
        dispatch(deleteCategory(id));
        dispatch(loadCategories());
      }

      if (header === "Accounts") {
        if (isDelete(transactions, "account", id)) {
          alert("This account is already in use and cannot be deleted!");
          return;
        }
        dispatch(deleteAccount(id));
        dispatch(loadAccounts());
      }

      toggle();
    }
  }

  const onClickCreateButton = () => {
    if (header === "Categories") {
      if (isExists(transactions, "category", title)) {
        alert("This category already exists!");
        return;
      }
      dispatch(postCategory({title, userId, incomes}));
      dispatch(loadCategories());
    }
    if (header === "Accounts") {
      if (isExists(transactions, "account", title)) {
        alert("This account already exists!");
        return;
      }
      dispatch(postAccount({title, userId}));
      dispatch(loadAccounts());
    }

    toggle();
  };

  return (
    <section className={classes.Settings}>
      <ScrollToTop />
      {prevItem.id
        ? <button
            className={classes.Button}
            onClick={onClickEditButton}
            disabled={prevState || !title}
          >Update</button>
        : null}
      {!prevItem.id
        ? <button
            className={classes.Button}
            onClick={onClickCreateButton}
            disabled={!title}
          >Create</button>
        : null}

      {prevItem.id
        ? <button
            className={classes.Button}
            onClick={onClickDeleteButton}
            // disabled={!popupPrevState.id}
          >Delete</button>
        : null}

      <div className={classes.Wrapper}>
        <p className={classes.Label}>{`Name of ${header === "Categories" ? "category" : "account"}`}</p>
        <input
          className={classes.Input}
          type="text"
          value={title}
          onChange={onChangeItem}
          placeholder={`Type the new name for the ${header === "Categories" ? "category" : "account"}`}
        />
        {header !== "Accounts"
          ? <div className={classes.Type}>
              {isExists(transactions, "category", title)
                ? <p className={classes.Label}>This category is already used in transactions and this setting cannot be changed.</p>
                : <p className={classes.Label}>Select <b>incomes</b> if the category is taken into income transactions</p>}
              <input
                type="checkbox"
                checked={+incomes || false}
                id={id}
                onChange={onChangeType}
                disabled={isExists(transactions, "category", title)}
              />
              <label
                htmlFor={id}
              >Incomes</label>
            </div>
          : null}
        {isExists(transactions, "category", title)
          ? <div className={classes.WrapperText}>
              <p className={classes.Text}>{JSON.parse(categoryType) ? "Expenses" : "Incomes"} in this Month - <b>{sumCurrentCategory}€</b></p>
              <p className={classes.Text}>{JSON.parse(categoryType) ? "Expenses" : "Incomes"} for all time - <b>{totalSum}€</b></p>
            </div>
          : null}

        {/* {header == "Accounts"
          ? <>
            <p className={classes.Label}>Start balance</p>
            <input
              className={classes.Input}
              type="number"
              value={null}
              onChange={() => ""}
              placeholder="Type the start balance for account"
            />
              <p className={classes.Text}>Start balance - <b>1000€</b></p>
              <p className={classes.Text}>Current balance - <b>2000€</b></p>
            </>
          : null} */}
      </div>
    </section>
  );
}

export default Popup;