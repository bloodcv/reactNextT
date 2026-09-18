// @ts-nocheck

"use client";

import { useCallback, useEffect, useState } from "react";

const useControlHook = ({
  value,
  defaultValue,
  onChange,
}: {
  value?: number;
  defaultValue?: number;
  onChange?: (param?: number) => void;
}): [number | undefined, (newValue?: number) => void] => {
  const [v, setV] = useState(defaultValue);
  const isControl = value !== undefined;

  useEffect(() => {
    if (isControl) {
      setV(value);
    }
  }, [value]);

  const change = (newValue?: number) => {
    if (isControl) {
      onChange?.(newValue && newValue * 2);
    } else {
      setV(newValue);
    }
  };

  return [v, change];
};

const My1 = ({
  value,
  onChange,
  defaultValue,
}: {
  value?: number;
  defaultValue?: number;
  onChange?: (param?: number) => void;
}) => {
  const [data, setData] = useControlHook({
    value,
    onChange,
    defaultValue,
  });

  return (
    <div className="flex flex-col gap-2">
      <h1>非受控</h1>
      <h3>{data}</h3>
      <button
        className="border px-4 py-2 cursor-pointer w-20"
        onClick={() => setData(value && value++)}
      >
        +
      </button>
      <button
        className="border px-4 py-2 cursor-pointer w-20"
        onClick={() => setData(value && value--)}
      >
        -
      </button>
    </div>
  );
};

const useControlStateHook = ({
	value, defaultValue, onChange
}) => {
	const isControl = value !== undefined

	const [inner, setInner] = useState(defaultValue)

	const state = isControl ? value : inner

	const setState = useCallback((v) => {
		if (!isControl) {
			setInner(v)
		}
		onChange?.(v)
	}, [isControl, onChange])

	return [state, setState]
};

export const My2 = ({ value, defaultValue, onChange }) => {
	const [data, setData] = useControlStateHook({
		value, defaultValue, onChange
	})

	return <div className="flex flex-col gap-2">
		<h1>{data}</h1>
		<button className="w-20 py-2 border cursor-pointer" onClick={() => setData(data + 1)}>+</button>
		<button className="w-20 py-2 border cursor-pointer" onClick={() => setData(data - 1)}>-</button>
	</div>
};

export default My1;
