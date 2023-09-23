import React, { useState } from "react";
import format from "date-fns/format";
import { Calandar } from "./Calandar/Calandar";
import { Colors } from "../../styles/Colors";
import "./CalandarDiv.css";

interface CalandarProps {
  isMobile: boolean;
}

export const CalandarDiv = ({ isMobile }: CalandarProps) => {
  const [curDate, setCurDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const today = new Date();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.SilkCaramel,
          borderRadius: 7,
          maxWidth: isMobile ? "98%" : "27%",
          marginLeft: isMobile ? "0" : "1vh",
        }}
      >
        <p style={{ color: Colors.SilkBrown, fontSize: 30, marginBottom: 0 }}>
          Calandar Component
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: Colors.SilkCaramel,
            marginLeft: "1vh",
            maxWidth: isMobile ? "80%" : "70%",
            textAlign: "center",
          }}
        >
          <p>
            A self-made calandar component, easily select any date and store
            that data for future use. This is also the first component I used
            tailwind CSS on.{" "}
          </p>
        </div>
        <div>
          <p style={{ color: Colors.SilkBrown }}>
            Selected Date:{" "}
            {format(selectedDate ? selectedDate : curDate, "dd LLLL yyyy")}
          </p>
        </div>
        <div>
          <button
            className={"rounded text-white p-1 m-1  hover:opacity-90 "}
            style={{
              borderColor: "transparent",
              fontFamily: "Poppins",
              backgroundColor: Colors.SilkBrown,
              color: Colors.SilkCaramel,
            }}
            onClick={() => {
              setCurDate(today);
              setSelectedDate(today);
            }}
          >
            Return to today
          </button>
        </div>
        <Calandar
          value={curDate}
          SetCurDate={setCurDate}
          SetSelectedDate={setSelectedDate}
          selectedValue={selectedDate}
        />
      </div>
    </>
  );
};
