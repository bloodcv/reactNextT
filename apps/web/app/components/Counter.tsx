"use client";

import { useState } from "react";

export interface CounterProps {
  /** 受控模式下的当前值。 */
  value?: number;
  /** 非受控模式的初始值，默认 0。 */
  defaultValue?: number;
  /** 数值变化时触发；受控模式下由父组件据此更新 value。 */
  onChange?: (value: number) => void;
  /** 每次增减的步长，默认 1。 */
  step?: number;
  /** 可选的最小值。 */
  min?: number;
  /** 可选的最大值。 */
  max?: number;
}

export function Counter({
  value,
  defaultValue = 0,
  onChange,
  step = 1,
  min,
  max,
}: CounterProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const updateValue = (nextValue: number) => {
    const clampedValue = Math.min(Math.max(nextValue, min ?? -Infinity), max ?? Infinity);

    if (!isControlled) {
      setInternalValue(clampedValue);
    }

    onChange?.(clampedValue);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => updateValue(currentValue - step)}
        disabled={min !== undefined && currentValue <= min}
      >
        减一
      </button>
      <output aria-live="polite">{currentValue}</output>
      <button
        type="button"
        onClick={() => updateValue(currentValue + step)}
        disabled={max !== undefined && currentValue >= max}
      >
        加一
      </button>
    </div>
  );
}
