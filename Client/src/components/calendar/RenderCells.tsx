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
`;

const DayBox = styled.div`
  padding: 0;
  width: fit-content;
`

type dayprops = {
  display: string;
};

const Day = styled.span<dayprops>`
    display: ${(props) => (props.display === 'true' ? "block" : "none")};
`;

export const RenderCells = ({
  currentMonth,
  onDateClick,
}: headerProps) => {
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
        <DayBox className="col cell">
          <Day display={isSameMonth(day, monthStart) ? 'true' : 'false'}>
            {formattedDate}
          </Day>
        </DayBox>
      );
      day = addDays(day, 1);
    }

    rows.push(<div className="row">{days}</div>);

    days = [];
  }

  return <Cells className="cells">{rows}</Cells>;
};
