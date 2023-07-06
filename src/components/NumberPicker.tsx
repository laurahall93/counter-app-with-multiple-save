import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [countValue, setCountValue] =
    useState(0);
  const [storeCountValue, setStoreCountValue] =
    useState<number[]>([]);

  const handleAddOneToCounter = () => {
    setCountValue(countValue + 1);

  };

  const handleSubtractOneFromCounter = () => {
    setCountValue(countValue - 1);
  };

  const handleStoreCurrentCount = () => {
    setStoreCountValue([
      ...storeCountValue,
      countValue,
    ]);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>Your stored numbers: {storeCountValue.join(", ")}</p>
      <p>Counter: {countValue}</p>
      <button onClick={handleSubtractOneFromCounter}>-1</button>
      <button onClick={handleAddOneToCounter}>+1</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
