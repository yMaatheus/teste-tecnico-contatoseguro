import dayjs from "dayjs";

export const dateToView = (date: string | undefined | null) => {
  const result = dayjs(date).format("DD/MM/YYYY");

  if (dayjs(result).isValid()) return result;
};

export const ViewToDate = (date: string | undefined | null) => {
  const result = dayjs(date, "DD/MM/YYYY").format("YYYY-MM-DD");
  if (dayjs(result).isValid()) return result;
};
