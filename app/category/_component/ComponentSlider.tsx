import React, { useCallback, useEffect, useState, useRef } from 'react';
// import classnames from "classnames";

interface Props {
  //   step: number;
  min: number;
  max: number;
  //   value: {
  //     min: number;
  //     max: number;
  //   };
  //   onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  //   onChange: React.Dispatch<
  //     React.SetStateAction<{
  //       min: number;
  //       max: number;
  //     }>
  //   >;
  //   onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onChange: ({ min, max }: { min: number; max: number }) => void;
}

const ComponentSlider = ({ min, max, onChange }: Props) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement | null>(null);
  const maxValRef = useRef<HTMLInputElement | null>(null);
  const range = useRef<HTMLInputElement | null>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Styling purposes
  let right_n2 = 0;
  let left_n2 = 0;
  if (maxValRef.current) {
    left_n2 = getPercent(minVal);
    right_n2 = getPercent(maxVal);
  }

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);
      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container relative">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        // className={classnames('thumb thumb--zindex-3', {
        //   'thumb--zindex-5': minVal > max - 100,
        // })}
        className={
          minVal > max - 100 ? 'thumb--zindex-3' : 'thumb thumb--zindex-3'
        }
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div
          className={`absolute mt-4 font-satoshi text-sm font-medium`}
          style={{ left: left_n2 > 0 ? `${left_n2 - 5}%` : '0' }}
        >
          ${minVal}
        </div>
        <div
          className="absolute mt-4 right-0 font-satoshi text-sm font-medium"
          style={{ left: right_n2 > 0 ? `${right_n2 - 15}%` : '85%' }}
        >
          ${maxVal}
        </div>
      </div>
    </div>
  );
};

export default ComponentSlider;
