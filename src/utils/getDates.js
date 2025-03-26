export default function getDates() {
  const today = new Date();

  const year = today.getFullYear();
  const month =
    9 < today.getMonth() + 1 ? `${today.getMonth()}` : `0${today.getMonth()}`;
  const date =
    9 < today.getDate() ? `${today.getDate()}` : `0${today.getDate()}`;
  const day = today.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = week[day];
  const todayDate = `${year}. ${month}. ${date}. ${dayName}`;
  return todayDate;
}
