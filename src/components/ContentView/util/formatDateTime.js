function formatDateTime(input) {
  const [datePart, timePart] = input.split(" ");

  const year = datePart.slice(0, 4);
  const month = datePart.slice(4, 6);
  const day = datePart.slice(6, 8);

  const time = timePart.slice(0, 5);

  return `${year}.${month}.${day}. ${time} 편집`;
}
