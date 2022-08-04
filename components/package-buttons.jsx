import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/packages.module.css";

export default function PackageButtons(props) {
  const packageData = props.package;
  const { onAdd, onRemove } = props;
  const [isSelected, selectionSetter] = useState(false);
  const timer = useRef();

  const toggleSelection = () => {
    const action = isSelected ? onRemove : onAdd;
    action(packageData);
    selectionSetter(!isSelected);
  };

  const select = () => {
    onAdd(packageData);
    selectionSetter(true);
  };

  const unselect = () => {
    onRemove(packageData);
    selectionSetter(false);
  };

  const toggleAllSelections = () => {
    const eventName = isSelected ? "unselect-all" : "select-all";
    window.dispatchEvent(new CustomEvent(eventName));
  };

  const onClickHandler = (event) => {
    clearTimeout(timer.current);

    if (event.detail === 1) {
      timer.current = setTimeout(toggleSelection, 200);
    } else if (event.detail === 2) {
      toggleAllSelections();
    }
  };

  useEffect(() => {
    window.addEventListener("select-all", select, false);
    window.addEventListener("unselect-all", unselect, false);
    return () => {
      window.removeEventListener("select-all", select, false);
      window.removeEventListener("unselect-all", unselect, false);
    };
  }, []);

  const convertDate = (dateSeconds) => {
    let date = new Date(dateSeconds*1000);

    return `${date.toLocaleString()}`
  }

  return (
    <div
      onClick={onClickHandler}
      className={
        isSelected ? styles.packageButtonSelected : styles.packageButton
      }
    >
      {convertDate(packageData["time-stamp"].seconds)}
    </div>
  );
}
