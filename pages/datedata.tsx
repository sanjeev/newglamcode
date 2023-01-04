import React from "react";
import { Datepicker, DatepickerEvent} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";

const Example = () => {
  const [date, setDate] = React.useState<{
    endValue: Date | null;
    startValue: Date | null;
    rangeDates: Date[] | null;
  }>({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  return (
    <Datepicker
      onChange={handleChange}
      locale={enUS}
      startValue={date.startValue}
      endValue={date.endValue}

    />
  );
};
export default Example;