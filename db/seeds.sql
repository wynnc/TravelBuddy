

INSERT INTO users (userName, userId, email) VALUES ("Sam Vimes", "1313", "myemail@gmail.com");

INSERT INTO users (userName, userId, email) VALUES ("Satchel Heller", "1337", "thisisanemail@gmail.com");

INSERT INTO users (userName, userId, email) VALUES ("Kassie Heller", "1000", "dogsdogsdogs@gmail.com");

INSERT INTO users (userName, userId, email) VALUES ("Lyrn Switch", "2001", "2br02b@gmail.com");



INSERT INTO tripNames (tripName, startDate, endDate, usersId) VALUES ("Ankh Morpork Trip", "03/15/2020", "03/20/2020", 1);

INSERT INTO tripNames (tripName, startDate, endDate, usersId) VALUES ("Los Angeles Trip", "01/05/2020", "01/09/2020", 2);

-- INSERT INTO tripnames (tripName, createdAt, updatedAt, UserId) VALUES ("Boston Trip", "0000-00-00 00:00:00", "0000-00-00 00:00:00", 3);

-- INSERT INTO tripnames (tripName, createdAt, updatedAt, UserId) VALUES ("Colorado Trip", "0000-00-00 00:00:00", "0000-00-00 00:00:00", 4);

-- INSERT INTO flights (userName, airline, flightConNum, dateStartFly, dateEndFly, flightTime, flightNotes) VALUES ("Sam Vimes", "United", 1313, 03/11/2020, 03/16/2020, "12:30", "Must get back to work.");

-- INSERT INTO flights (userName, airline, flightConNum, dateStartFly, dateEndFly, flightTime, flightNotes) VALUES ("Satchel Heller", "Frontier", 1337, 03/12/2020, 03/17/2020, "12:45", "Bring dog food.");

-- INSERT INTO flights (userName, airline, flightConNum, dateStartFly, dateEndFly, flightTime, flightNotes) VALUES ("Kassie Heller", "American", 1000, 04/11/2020, 04/16/2020, "11:30", "Make a to do list.");

-- INSERT INTO flights (userName, airline, flightConNum, dateStartFly, dateEndFly, flightTime, flightNotes) VALUES ("Lyrn Switch", "Southwest", 2001, 05/11/2020, 05/16/2020, "01:20", "Save the Wombats.");


-- UPDATE flights SET userName="Sam Vimes", airline="United", flightConNum=25678, dateStartFly=03/11/2020, dateEndFly=03/16/2020, flightTime="12:30", cancelledFly=false, flightNotes="Must get back to work." WHERE id=6;