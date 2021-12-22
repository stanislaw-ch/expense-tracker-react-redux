import React from 'react';
import classes from '../Settings.module.css';
import SettingsItem from '../Items/Item';

function SettingsBlock({
  onClickSubmitButton, onClickCreateButton,
  value, onChange, onClickDeleteButton,
  items, title, placeholder, onClickEditButton
}) {
  return (
    <section className={classes.Wrapper}>
      <div className={classes.Content}>
        <p className={classes.Header}>{title}</p>
        <SettingsItem
          onClickSubmitButton={onClickSubmitButton}
          onClickButton={onClickCreateButton}
          value={value}
          submitTitle={"Create"}
          onChange={onChange}
          placeholder={placeholder}
        />

        {items.map((category) => (
          <SettingsItem
            onClickSubmitButton={onClickSubmitButton}
            value={category.title}
            submitTitle={"Edit"}
            onClickButton={onClickEditButton}
            onChange={onChange}
            id={category.id}
            key={category.id}
            onClickDeleteButton={onClickDeleteButton}
          />
          ))
        }
      </div>
    </section>
  )
}

export default SettingsBlock;