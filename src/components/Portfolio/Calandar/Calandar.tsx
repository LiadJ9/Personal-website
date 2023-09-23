import React from "react";
import {
  startOfMonth,
  endOfMonth,
  differenceInDays,
  getMonth,
  sub,
  getYear,
  add,
  setDate,
  setMonth,
  setYear,
} from "date-fns";
import { months, daysOfWeek } from "../../../consts/calandar";
import Cell from "./Cell";
import { Button } from "./Button";
import { Colors } from "../../../styles/Colors";

interface CalProps {
  value: Date;
  SetCurDate?: (value: Date) => void;
  SetSelectedDate?: (value: Date) => void;
  selectedValue?: Date;
}

export const Calandar = ({
  value = new Date(),
  SetCurDate,
  SetSelectedDate,
  selectedValue,
}: CalProps) => {
  const startDate = startOfMonth(value); // start of selected month
  const endDate = endOfMonth(value); // end of selected month
  const numDays = differenceInDays(endDate, startDate) + 1; // calculate the total amount of days in selected month
  const calMonth = getMonth(value); // gets current month
  const year = getYear(value); // gets current year
  const prefixDays = startDate.getDay(); // which day of the week it is (for proper day to date display)
  const suffixDays = 42 - numDays - prefixDays; // number of tiles that should be at the start of each month
  const prevMonth = sub(value, { months: 1 }); // previous month handling
  const prevStart = startOfMonth(prevMonth); // for Total days calc
  const prevEnd = endOfMonth(prevMonth); // for total days calc
  const prevDays = differenceInDays(prevEnd, prevStart) + 1; // Total days in previous month
  const prevDaysArr: Array<number> = []; // Array containing only the needed days for the previous month
  let pre = prevDays; // Handle for loop array
  // Loop to create previous month's days for spacer placeholder
  for (let i = prefixDays; i != 0; i--) {
    prevDaysArr.unshift(pre);
    pre--;
  }
  const ToPrevMonth = () => {
    SetCurDate && SetCurDate(sub(value, { months: 1 }));
  };

  const ToNextMonth = () => {
    SetCurDate && SetCurDate(add(value, { months: 1 }));
  };

  const HandleSetDate = (date: number) => {
    const curDay = setDate(value, date);
    const curMonth = setMonth(curDay, calMonth);
    const curDate = setYear(curMonth, year);
    SetSelectedDate && SetSelectedDate(curDate);
  };

  return (
    <div className="w-[380px]  rounded-md  drop-shadow-2xl bg-yellow-900 bg-opacity-30 mb-1">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell className="col-span-3  font-extrabold text-lg ">{`${months[calMonth]} ${year}`}</Cell>
        <div className="col-span-2"></div>
        <div className="col-span-2 flex ">
          <Button onClick={ToPrevMonth}>{"<"}</Button>
          <Button onClick={ToNextMonth}>{">"}</Button>
        </div>
        <div
          style={{
            border: "solid 2px",
            borderColor: Colors.DarkerBrown,
            backgroundColor: Colors.DarkerBrown,
          }}
          className="col-span-7"
        ></div>
        {daysOfWeek.map((day, index) => (
          <Cell key={index} className="text-md font-extrabold">
            {day}
          </Cell>
        ))}
        {[...Array(prefixDays)].map((_, index) => (
          <Cell className=" text-amber-100" key={index}>
            {prevDaysArr[index]}
          </Cell>
        ))}
        {[...Array(numDays)].map((_, index) => {
          const date = index + 1;
          const isCurrentDate = /// This constant checks if the iterated date is the current date | selected date for choosing and displaying the selected date
            date ===
              (selectedValue ? selectedValue?.getDate() : value.getDate()) &&
            calMonth ===
              (selectedValue ? selectedValue?.getMonth() : value.getMonth()) &&
            year === (selectedValue ? getYear(selectedValue) : getYear(value));
          return (
            <Cell
              isCurrentDate={isCurrentDate}
              key={index}
              onClick={() => HandleSetDate(date)}
            >
              {date}
            </Cell>
          );
        })}
        {[...Array(suffixDays)].map((_, index) => (
          <Cell className=" text-amber-100" key={index}>
            {index + 1}
          </Cell>
        ))}
      </div>
    </div>
  );
};
