import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth } from "date-fns";

import { ReactComponent as Expand } from "../../svg/Expand.svg";
import { headerProps } from "./RenderHeader";
import styled from "styled-components";

const Days = styled.div`
  font-size: 0.74rem;
`

export const RenderDays = () => {
  const days = [];
  const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 0; i < 7; i++) {
    days.push(
      <Days className="col" key={i}>
        {date[i]}
      </Days>
    );
  }

  return <div className="days row">{days}</div>;
};
