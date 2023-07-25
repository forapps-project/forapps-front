import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth } from "date-fns";

import { ReactComponent as Expand } from "../../svg/Expand.svg";
import styled from "styled-components";

export interface headerProps {
  currentMonth: Date;
  prevMonth?(): void;
  nextMonth?(): void;
  selectedDate?: Date;
  onDateClick?(day:Date): void;
}

const CalHeader = styled.div`
  font-size: 1.25rem;
  width: fit-content;
  margin: 0;
`

const MonthYear = styled.div`
  width: fit-content;
`

export const RenderHeader = ({ currentMonth, prevMonth, nextMonth }: headerProps) => {
    return (
      <CalHeader className="header row">
        <div className="col col-1">
          <Expand onClick={prevMonth} />
        </div>
        <MonthYear className="col col-2">
          <span>
            <span>{format(currentMonth, "M")} </span>
            {format(currentMonth, "yyyy")}
          </span>
        </MonthYear>
        <div className="col col-3">
          <Expand onClick={nextMonth} />
        </div>
      </CalHeader>
    );
  };