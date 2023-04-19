import dayjs from "dayjs";

export const dateToView = (date = ""): string =>
  dayjs(date).format("DD/MM/YYYY");

export const ViewToDate = (date: string): string =>
  dayjs(date, "DD/MM/YYYY").format("YYYY-MM-DD");
