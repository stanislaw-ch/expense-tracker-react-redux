import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectAllTransactionsState} from '../../reducers/transactions/transactions-slice';
import {selectAllCategoriesState, deleteCategory, postCategory, loadCategories, updateCategory} from '../../reducers/categories/categories-slice';
import {selectAllAccountsState, updateAccount, deleteAccount, postAccount, loadAccounts} from '../../reducers/accounts/accounts-slice';
import { selectUserId } from '../../reducers/user/user-slice';
import SettingsBlock from './Blocks/Block';
import {usePopup} from '../../hoc/Popup/PopupContext';

function Settings() {
  const dispatch = useDispatch();
  const transactions = useSelector(selectAllTransactionsState);
  const categories = useSelector(selectAllCategoriesState);
  const accounts = useSelector(selectAllAccountsState);
  const userId = useSelector(selectUserId);
  const {toggle} = usePopup()

  const [inputCategory, setInputCategory] = useState('');
  const [inputType, setInputType] = useState(false);
  const [inputAccount, setInputAccount] = useState('');

  const onChangeType = async ({target}) => {
    const id = target.id;
    setInputType(target.checked);

    if (id) {
      dispatch(updateCategory({id, incomes: target.checked}));
      dispatch(loadCategories());
    }
  }

  const isExists = (data, item) => {
    return data.find((it) => it.title === item) ? true : false;
  }

  const isDelete = (data, id) => {
    return transactions.find((it) => it[`${data}Id`] === id) ? true : false;
  }

  const onChangeCategory = ({target}) => {
    const id = target.id;
    const title = target.value;
    const incomes = inputType;

    if (isExists(categories, title)) {
      alert("This category already exists!");
      return;
    }

    if (id) {
      dispatch(updateCategory({id, title, userId, incomes}));
      dispatch(loadCategories());
    } else {
      setInputCategory(title);
    }
  }

  const onChangeAccount = ({target}) => {
    const id = target.id;
    const title = target.value;

    if (isExists(accounts, title)) {
      alert("This category already exists!");
      return;
    }

    if (id) {
      dispatch(updateAccount({id, title, userId}));
      dispatch(loadAccounts());
    } else {
      setInputAccount(title);
    }
  }

  const onClickCreateCategoryButton = () => {
    dispatch(postCategory({title: inputCategory, userId, incomes: inputType}));
    setInputCategory('');
    setInputType(false);
    dispatch(loadCategories());
  };

  const onClickCreateAccountButton = () => {
    dispatch(postAccount({title: inputAccount, userId}));
    setInputAccount('');
    dispatch(loadAccounts());
  };

  const onClickEditCategoryButton = ({target}) => {
    // inputCategory !== '' && dispatch(updateCategory(target.id, inputCategory));
    // setInputCategory('');
    dispatch(loadCategories());
  };

  const onClickEditAccountButton = ({target}) => {
    // dispatch(updateCategory(inputCategory));
    // setInputCategory('');
    // dispatch(loadCategories());
  };

  function onClickDeleteCategoryButton({target}) {
    const id = target.id;
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      if (isDelete('category', id)) {
        alert("This category is already in use and cannot be deleted!");
        return;
      }
      dispatch(deleteCategory(id));
      dispatch(loadCategories());
    }
  };

  function onClickDeleteAccountButton({target}) {
    const id = target.id;
    const confirm = window.confirm("Are you sure?");

    if (confirm) {
      if (isDelete('account', id)) {
        alert("This account is already in use and cannot be deleted!");
        return;
      }
      dispatch(deleteAccount(id));
      dispatch(loadAccounts());
    }
  };

  const onClickSubmitButton = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SettingsBlock
        onClickSubmitButton={onClickSubmitButton}
        onClickCreateButton={onClickCreateCategoryButton}
        onClickDeleteButton={onClickDeleteCategoryButton}
        onClickEditButton={onClickEditCategoryButton}
        value={inputCategory}
        submitTitle={"Create"}
        onChange={onChangeCategory}
        onChangeType={onChangeType}
        items={categories}
        title={"Categories"}
        placeholder={"Type the new name for the category"}
        transactionType={"true"}
      />

      <SettingsBlock
        onClickSubmitButton={onClickSubmitButton}
        onClickCreateButton={onClickCreateAccountButton}
        onClickDeleteButton={onClickDeleteAccountButton}
        onClickEditButton={onClickEditAccountButton}
        value={inputAccount}
        submitTitle={"Create"}
        onChange={onChangeAccount}
        onChangeType={onChangeType}
        items={accounts}
        title={"Accounts"}
        placeholder={"Type the new name for the account"}
        transactionType={undefined}
      />

      <button onClick={toggle}>popup</button>
    </>
  )
}

export default Settings;
