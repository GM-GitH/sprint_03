// Room
//      Properties:
//           Name - string
//           Bookings - array of Booking objects
//           Rate - int price in cents
//           Discount - int percentage
//       Methods:
//           isOccupied(date) returns false if not occupied, returns the booking if occupied
//           occupancyPercentage(startDate, endDate) returns the percentage of days with occupancy within the range of dates provided (inclusive)
//
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
//
// Functions:
//      totalOccupancyPercentage(rooms, startDate, endDate)
//          returns the total occupancy percentage across all rooms in the array
//      availableRooms(rooms, startDate, endDate)
//          returns all rooms in the array that are not occupied for the entire duration

class Room {
  constructor({ name, bookings, rate, discount }) {
    this.bookings = bookings;
    this.discount = discount;
    this.name = name;
    this.rate = rate;
  }

  /* If the date passed in is between the checkIn and checkOut dates of any booking, return true, otherwise return false */
  isOccupied(date) {
    return this.bookings.find((booking) => {
      if (date >= booking.checkIn && date <= booking.checkOut) {
        return true;
      }
    });
  }
  /* This filters out all bookings that are not within the start and end date, 
  maps over the filtered bookings and calculates the number of days each booking is for,
  reduces the mapped array to a single number, calculates the total number of days available between
  the start and end date, and returns the percentage of occupancy */
  occupancyPercentage(dateStart, dateEnd) {
    const day = 1000 * 60 * 60 * 24;
    const onlyFilteredPeriod = this.bookings.filter((booking) => dateStart <= booking.checkIn && dateEnd >= booking.checkOut);
    const daysForEachBooking = onlyFilteredPeriod.map((e) => (new Date(e.checkOut).getTime() - new Date(e.checkIn).getTime()) / day);
    const reduceToInteger = daysForEachBooking.reduce((a, b) => a + b, 0);
    const totalNumberDaysAvailable = (new Date(dateEnd).getTime() - new Date(dateStart).getTime()) / day;
    const result = Math.round((reduceToInteger / totalNumberDaysAvailable) * 100);
    return result;
  }
}

class Booking {
  constructor({ name, email, checkIn, checkOut, discount, room }) {
    this.name = name;
    this.email = email;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.discount = discount;
    this.room = room;
  }

  /* This returns the total price of the room after applying the discounts.*/
  getFee() {
    const totalDiscount = (this.room.discount + this.discount) / 100;
    const Total = totalDiscount < 1 ? this.room.rate - this.room.rate * totalDiscount : 0;
    return Math.round(Total.toFixed(2));
  }
}

/* This takes an array of rooms, a start date and an end date, and returns the average occupancy percentage of all the rooms in the array.
rooms - an array of Room objects
startDate - a string in the format 'YYYY/MM/DD'
endDate - The end date of the date range. */
const totalOccupancyPercentage = (rooms, startDate, endDate) => {
  const brp = rooms.map((room) => room.occupancyPercentage(startDate, endDate)).reduce((a, b) => a + b, 0);
  return Math.round(brp / rooms.length);
};
/* This filters through the rooms array and returns the names of the rooms that have a booking that overlaps with the given date range.
rooms      - an array of objects, each of which represents a room in the hotel
startDate  - a string in the format of "YYYY/MM/DD"
endDate    - The end date of the booking */
const availableRooms = (rooms, startDate, endDate) => {
  const availableRoomArr = rooms.filter((room) => room.bookings.find((booking) => startDate <= booking.checkIn && endDate >= booking.checkOut));
  return availableRoomArr[0] ? availableRoomArr.map((room) => room.name).join(", ") : "No rooms booked";
};

// const f = a.toLocaleString("en-GB");
// console.log(f)
// const myDate = new Date(2020, 01, 01);
// const myDateTransformer = (date) => new Date(date);
// const myNewDate = myDateTransformer(myDate);
// const fillZero = (num) => num.toString().padStart(2, "0");
// const formatDate = (date = new Date()) => [date.getFullYear(), fillZero(date.getMonth()), fillZero(date.getDate())].join("");
// const myFormatedDate = formatDate(myNewDate);
// console.log(myFormatedDate);
// const a = [15.5, 2.3, 1.5, 4.7, 0.5];
// const b=10.00001
// const getSum = (total, num) => total + Math.round(num);
// console.log(a.reduce(getSum, 0));
// console.log(Math.ceil(b))

module.exports = { Room, Booking, totalOccupancyPercentage, availableRooms };
