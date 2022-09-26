// Crear las siguientes clases con las siguientes propiedades y métodos: 
// Room
    //Properties:
        // Name - string
        // Bookings - array of Booking objects
        // Rate - int price in cents
        // Discount - int percentage
    // Methods:
        // isOccupied(date) returns false if not occupied, returns the booking if occupied
        // occupancyPercentage(startDate, endDate) returns the percentage of days with occupancy within the range of dates provided (inclusive)
// Booking
    // Properties:
        // Name - string
        // Email - string
        // Check in - date
        // Check out - date
        // Discount - int percentage
        // Room - a room object
    // Methods:
        // get fee() returns the fee, including discounts on room and guest
// Crear las siguientes funciones:
    // totalOccupancyPercentage(rooms, startDate, endDate) returns the total occupancy percentage across all rooms in the array
    // availableRooms(rooms, startDate, endDate) returns all rooms in the array that are not occupied for the entire duration

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
