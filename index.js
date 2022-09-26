// Crear las siguientes clases con propiedades y métodos:
// Room
//      Properties:
//           Name - string
//           Bookings - array of Booking objects
//           Rate - int price in cents
//           Discount - int percentage
//       Methods:
//           isOccupied(date) returns false if not occupied, returns the booking if occupied
//           occupancyPercentage(startDate, endDate) returns the percentage of days with occupancy within the range of dates provided (inclusive)
// Booking
//       Properties:
//           Name - string
//           Email - string
//           Check in - date
//           Check out - date
//           Discount - int percentage
//           Room - a room object
//       Methods:
//           get fee() returns the fee, including discounts on room and guest
// Crear las siguientes funciones:
//      totalOccupancyPercentage(rooms, startDate, endDate) returns the total occupancy percentage across all rooms in the array
//      availableRooms(rooms, startDate, endDate) returns all rooms in the array that are not occupied for the entire duration

class Room {
  constructor({ name, bookings, rate, discount }) {
    this.name = name;
    this.bookings = bookings;
    this.rate = rate;
    this.discount = discount;
  }
  isOccupied(date) {}
  occupancyPercentage(dateStart, dateEnd) {}
}
class Booking {
  constructor({ name, email, dateStart, dateEnd, discount, room }) {
    this.name = name;
    this.email = email;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.discount = discount;
    this.room = room;
  }
  getFee(rate, discount) {}
}

const totalOccupancyPercentage = (dateStart, dateEnd) => {
  const dateRange = this.dateRange(dateStart, dateEnd);
  let daysOccupied = 0;
  dateRange.forEach((date) => {
    if (this.isOccupied(date) !== false) daysOccupied += 1;
  });
  const percentage = (daysOccupied * 100) / dateRange.length;
  return percentage;
};
const availableRooms = (rooms, startDate, endDate) => {};
const a = new Date(2020, 01, 09);
const f = a.toLocaleString("en-GB");
// console.log(f)

const myDate = new Date(2020, 01, 01);
const myDateTransformer = (date) => new Date(date);
const myNewDate = myDateTransformer(myDate);
const fillZero = (num) => num.toString().padStart(2, "0");
const formatDate = (date = new Date()) => [date.getFullYear(), fillZero(date.getMonth()), fillZero(date.getDate())].join("");
const myFormatedDate = formatDate(myNewDate);
console.log(myFormatedDate);
