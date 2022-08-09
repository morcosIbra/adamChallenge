export const getDay = date => {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return {
    dayName: weekday[date.getDay()],
    dayNum: date.getDate()
  }
}

export const getMonth = date => {
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return month[date.getMonth()];
}

export const getHourseMin = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const timeFormat = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutes} ${timeFormat}`
}

