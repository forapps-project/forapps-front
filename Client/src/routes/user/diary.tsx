import { useContext, useState } from "react";
import { useModal } from "../../hooks/useModal";
import "react-pull-to-refresh"
import Calendar from "../../components/calendar/calendar.component";


const Diary = () => {
  

  return (
    <div >
      <Calendar />
    </div>
  );
};

export default Diary;
