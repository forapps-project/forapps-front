import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";

import { headerProps } from "./RenderHeader";
import styled from "styled-components";

const Cells = styled.div`
    font-size: 1rem;
`

export const RenderCells = ({ currentMonth, selectedDate, onDateClick }: headerProps) => {

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {

    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;

      days.push(
        <div className={`col cell ${
            !isSameMonth(day, monthStart) 
                /* ? 'disabled' 
                : isSameDay(day, selectedDate) */
                ? 'selected'
                : format(currentMonth, 'M') !== format(day, 'M')
                ? 'not-valid'
                : 'valid'
        }`}
        
        >
            <span>
                {formattedDate}
            </span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
        <div className="row">
            {days}
        </div>
    );
    days = [];
  }

  return <Cells>{rows}</Cells>
};
