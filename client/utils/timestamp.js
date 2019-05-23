import moment from "moment";

export const sunTime = timestamp => {
  return moment
    .unix(timestamp)
    .utc()
    .format("HH:mm");
};

export const getDay = (timestamp, truncate = false) => {
  return moment
    .unix(timestamp)
    .utc()
    .format(truncate ? "ddd" : "dddd");
};
