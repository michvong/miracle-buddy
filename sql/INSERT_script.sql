INSERT INTO RegularUser VALUES (0001,'Alexander','English','alex763@gmail.com');
INSERT INTO RegularUser VALUES (0002,'Jenna','English','jln@gmail.com');
INSERT INTO RegularUser VALUES (0003,'Sam','Cantonese','smm3@gmail.com');
INSERT INTO RegularUser VALUES (0004,'Juan','Spanish','JSeb@hotmail.com');
INSERT INTO RegularUser VALUES (0005,'Xixi','English','xi.l33@gmail.com');

INSERT INTO Company VALUES (101,'St. Johns',604382189,'med.st@stjohns.ca');
INSERT INTO Company VALUES (102,'Thrift Care',604287283,'clothes@thriftcare.ca');
INSERT INTO Company VALUES (103,'Saving Bite',604289292,'bb_food@igrace.ca');
INSERT INTO Company VALUES (104,'Infantile Grace',604238291,'med.st@stjohns.ca');
INSERT INTO Company VALUES (105,'Peace of Mind',604867397,'therapy@pom.ca');

INSERT INTO CompanyUser VALUES (0001,'Sebastian','Spanish','sbh301@hotmail.com',101);
INSERT INTO CompanyUser VALUES (0002,'Kelly','Cantonese','kelly_088@outlook.com',102);
INSERT INTO CompanyUser VALUES (0003,'Frederic','German','frf0194@gmail.com',103);
INSERT INTO CompanyUser VALUES (0004,'Linda','English','linsn001@outlook.com',104);
INSERT INTO CompanyUser VALUES (0005,'Alphonse','German','allphn81x@gmail.com',105);

INSERT INTO Interests VALUES (0004, 'Shelter');
INSERT INTO Interests VALUES (0003, 'Food');
INSERT INTO Interests VALUES (0001, 'Clothing');
INSERT INTO Interests VALUES (0005, 'Medical');
INSERT INTO Interests VALUES (0002, 'Mental Health');

INSERT INTO CompanyUserManages VALUES (0101, 1000, 101);
INSERT INTO CompanyUserManages VALUES (0102, 2000, 102);
INSERT INTO CompanyUserManages VALUES (0103, 3000, 103);
INSERT INTO CompanyUserManages VALUES (0104, 4000, 104);
INSERT INTO CompanyUserManages VALUES (0105, 5000, 105);

INSERT INTO Bookmarks VALUES (0001,101);
INSERT INTO Bookmarks VALUES (0002,102);
INSERT INTO Bookmarks VALUES (0003,103);
INSERT INTO Bookmarks VALUES (0004,104);
INSERT INTO Bookmarks VALUES (0005,105);

INSERT INTO ServiceType VALUES ('Shelter','Our shelter is committed to ensuring that all of our residents are able to');
INSERT INTO ServiceType VALUES ('Food','We distribute food to those who have difficulty purchasing');
INSERT INTO ServiceType VALUES ('Clothing','We provide to those who aren’t able to afford clothes');
INSERT INTO ServiceType VALUES ('Medical','We provide walk-in appointments with any of our medical professionals.');
INSERT INTO ServiceType VALUES ('Mental Health','We provide therapy sessions to those struggling with mental health');

INSERT INTO Service VALUES (0001, 'Shelter', 101);
INSERT INTO Service VALUES (0002, 'Clothing', 102);
INSERT INTO Service VALUES (0003, 'Food', 103);
INSERT INTO Service VALUES (0004, 'Medical', 104);
INSERT INTO Service VALUES (0005, 'Mental Health', 105);

INSERT INTO Provides VALUES (101, 0001);
INSERT INTO Provides VALUES (102, 0002);
INSERT INTO Provides VALUES (103, 0003);
INSERT INTO Provides VALUES (104, 0004);
INSERT INTO Provides VALUES (105, 0005);

INSERT INTO Location VALUES ('1117 Industrial Way','V8B0H1','Monday to Friday, 8:00AM - 5:00PM','Donation Circle Society',101,0001);
INSERT INTO Location VALUES ('2616 Cedar Park Pl','V2T3S5','Saturday to Wednesday, 12:00PM - 7:00PM','Variety - The Children’s Charity',101,0002);
INSERT INTO Location VALUES ('3564 Hastings Street','V6C1B4','Monday to Friday, 1:00PM - 7:00PM','Big Brothers of Greater Vancouver',101,0003);
INSERT INTO Location VALUES ('15 Tanner Street','V5R2T4','Monday to Friday, 9:00AM - 4:00PM','Baobab Inclusive Empowerment Society',101,0004);
INSERT INTO Location VALUES ('3812 James Street','V5W3C3','Thursday to Monday, 10:00AM - 5:00PM','HOPE International Development Agency',101,0005);

INSERT INTO AreaCode VALUES ('V7L2C1', 'North Van');
INSERT INTO AreaCode VALUES ('V6B3K9', 'Vancouver');
INSERT INTO AreaCode VALUES ('V6C1B4', 'Vancouver');
INSERT INTO AreaCode VALUES ('V5G1J9', 'Burnaby');
INSERT INTO AreaCode VALUES ('V3W4E3', 'Surrey');

INSERT INTO Warehouse VALUES (5930, 101, '5930 4103 Jade St', 'V7L2C1');
INSERT INTO Warehouse VALUES (5324, 102, '2964 Robson St', 'V6B3K9');
INSERT INTO Warehouse VALUES (6542, 103, '3080 Hastings Street', 'V6C1B4');
INSERT INTO Warehouse VALUES (2062, 104, '1577 James Street', 'V5G1J9');
INSERT INTO Warehouse VALUES (6928, 105, '4104 King George Blvd', 'V3W4E3');

INSERT INTO Products VALUES (5829, 'Formula', 'Nutrition for babies');
INSERT INTO Products VALUES (1949, 'Diapers', 'Disposable/reusable underwear for babies');
INSERT INTO Products VALUES (0175, 'Scarves', 'Warm clothing for winter');
INSERT INTO Products VALUES (6720, 'Canned Food', 'Non-perishable food');
INSERT INTO Products VALUES (7466, 'Fruits', 'Fresh Fruits');

INSERT INTO Inventory VALUES (5829, 0, 5930);
INSERT INTO Inventory VALUES (1949, 56, 5324);
INSERT INTO Inventory VALUES (0175, 5, 6542);
INSERT INTO Inventory VALUES (6720, 28, 2062);
INSERT INTO Inventory VALUES (7466, 7, 6928);

INSERT INTO Store VALUES (5930, 5829);
INSERT INTO Store VALUES (5324, 1949);
INSERT INTO Store VALUES (6542, 0175);
INSERT INTO Store VALUES (2062, 6720);
INSERT INTO Store VALUES (6928, 7466);

INSERT INTO Event VALUES ('NY Potluck','2022-01-01 05:00:00', 'Willingdon', 'Celebratory dinner');
INSERT INTO Event VALUES ('Exploring Empathy','2022-04-02 02:00:00', 'Cameron', 'Talk');
INSERT INTO Event VALUES ('Summer Picnic','2022-07-10 11:00:00', 'Park', 'Celebratory');
INSERT INTO Event VALUES ('Clothes Trading','2022-08-28 01:00:00', 'Creekside', 'Clothes');
INSERT INTO Event VALUES ('Christmas Carolling','2022-12-25 04:00:00', 'Flea Market', 'Carols');

INSERT INTO EventHost VALUES ('NY Potluck','2022-01-01 05:00:00', 101);
INSERT INTO EventHost VALUES ('Exploring Empathy','2022-04-02 02:00:00', 102);
INSERT INTO EventHost VALUES ('Summer Picnic','2022-07-10 11:00:00', 103);
INSERT INTO EventHost VALUES ('Clothes Trading','2022-08-28 01:00:00', 104);
INSERT INTO EventHost VALUES ('Christmas Carolling','2022-12-25 04:00:00', 105);

INSERT INTO Requests VALUES (0001, 0003);
INSERT INTO Requests VALUES (0002, 0001);
INSERT INTO Requests VALUES (0003, 0004);
INSERT INTO Requests VALUES (0004, 0002);
INSERT INTO Requests VALUES (0005, 0005);