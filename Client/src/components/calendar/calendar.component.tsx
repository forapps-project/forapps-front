import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth } from "date-fns";

import { ReactComponent as Expand } from "../../svg/Expand.svg";

import { RenderDays } from "./RenderDays";
import { RenderHeader } from "./RenderHeader";
import { RenderCells } from "./RenderCells";
import styled from "styled-components";

interface headerProps {
  currentMonth: Date;
  prevMonth(): void;
  nextMonth(): void;
}

const Wrapper = styled.div`
  width: 21.875rem;
  height: 18.75rem;
  color: white;
  background-color:rgba(77, 77, 77, 0.30);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.40);
  text-align: center;

  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translate(-50%, 0%);
`

const Contents = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2.44rem 1rem;
`

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  return (
    <Wrapper className="calendar">
      <Contents>
        <RenderHeader
          currentMonth={currentMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <RenderDays />
        <RenderCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
      </Contents>
    </Wrapper>
  );
};

export default Calendar;
