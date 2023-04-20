import dayjs from "dayjs";

export const dateToView = (date = "") => {
  const result = dayjs(date).format("DD/MM/YYYY");

  if (dayjs(result).isValid()) return result;
};

export const ViewToDate = (date: string): string =>
  dayjs(date, "DD/MM/YYYY").format("YYYY-MM-DD");
