CREATE TABLE RegularUser (
	user_id INT(10) NOT NULL AUTO_INCREMENT,
	name VARCHAR(100),
	language VARCHAR(100),
	email VARCHAR(100),
	PRIMARY KEY (user_id)
);

CREATE TABLE Company(
    company_id INT(10),
    name VARCHAR(100),
    phone_number INT(11),
    email VARCHAR(100),
    PRIMARY KEY (company_id)
);

CREATE TABLE CompanyUser (
	user_id INT(10) NOT NULL AUTO_INCREMENT,
	name VARCHAR(100),
	language VARCHAR(100),
	email VARCHAR(100),
	company_id INT(10),
	PRIMARY KEY (user_id),
	FOREIGN KEY (company_id) references Company(company_id) ON DELETE CASCADE
);

CREATE TABLE Interests (
	user_id INT(10),
	interests VARCHAR(100),
	PRIMARY KEY (interests),
	FOREIGN KEY (user_id) references RegularUser(user_id) ON DELETE NO ACTION
);

CREATE TABLE CompanyUserManages (
	user_id INT(10),
	employee_id INT(10),
	company_id INT(10),
	PRIMARY KEY (user_id),
	FOREIGN KEY (company_id) references Company(company_id) ON DELETE CASCADE
);

CREATE TABLE Bookmarks (
    user_id INT(10),
    company_id INT(10),
    PRIMARY KEY (user_id, company_id),
    FOREIGN KEY (user_id) references RegularUser(user_id),
    FOREIGN KEY (company_id) references Company(company_id)
);

CREATE TABLE ServiceType (
	name VARCHAR(100),
	description VARCHAR(250),
	PRIMARY KEY (name)
);

CREATE TABLE Service (
	service_id INT(10) PRIMARY KEY,
	name VARCHAR(100),
	company_id INT(10),
	FOREIGN KEY (company_id) references Company(company_id) ON DELETE CASCADE,
    FOREIGN KEY (name) references ServiceType(name) ON DELETE CASCADE
);

CREATE TABLE Provides (
	company_id INT(10),
	SID INT(10),
	PRIMARY KEY(company_id, SID),
	FOREIGN KEY(company_id) references Company(company_id) ON DELETE CASCADE,
	FOREIGN KEY(SID) references Service(service_id) ON DELETE CASCADE
);

CREATE TABLE Location (
	address VARCHAR(100),
	postal_code CHAR(6),
	hours_of_operation VARCHAR(100),
	name VARCHAR(100),
	company_id INT(10),
	service_id INT(10),
	PRIMARY KEY (address, postal_code),
	FOREIGN KEY (company_id) references Company(company_id) ON DELETE CASCADE,
	FOREIGN KEY (service_id) references Service(service_id) ON DELETE CASCADE
);

CREATE TABLE AreaCode (
    postal_code CHAR(6),
    city VARCHAR(100),
    PRIMARY KEY (postal_code)
);

CREATE TABLE Warehouse (
    warehouse_id INT(10),
    company_id INT(10),
    address VARCHAR(100),
    postal_code CHAR(6),
    PRIMARY KEY (warehouse_id),
    FOREIGN KEY (company_id) references Company(company_id) ON DELETE CASCADE,
    FOREIGN KEY (postal_code) references AreaCode(postal_code) ON DELETE CASCADE
);

CREATE TABLE Products (
	item_id INT(10),
	name VARCHAR(20),
	description VARCHAR(250),
	PRIMARY KEY (item_id)
);

CREATE TABLE Inventory (
	item_id INT(20),
	stock INT(10),
	warehouse_id INT(10),
    PRIMARY KEY (item_id, warehouse_id),
    FOREIGN KEY (warehouse_id) references Warehouse(warehouse_id) ON DELETE CASCADE,
    FOREIGN KEY (item_id) references Products(item_id) ON DELETE CASCADE
);

CREATE TABLE Store (
	warehouse_id INT(10),
	item_id INT(10),
	PRIMARY KEY (warehouse_id, item_id),
	FOREIGN KEY (warehouse_id) references Warehouse(warehouse_id) ON DELETE CASCADE,
	FOREIGN KEY (item_id) references Products(item_id) ON DELETE CASCADE
);

CREATE TABLE Event (
	event_name CHAR(100),
	date DATETIME(6),
	location CHAR(100),
	description CHAR(100),
	PRIMARY KEY (event_name, date)
);

CREATE TABLE EventHost (
	event_name CHAR(100),
	date DATETIME(6),
	company_id INT(10),
	PRIMARY KEY (event_name, date),
	FOREIGN KEY (event_name, date) references Event(event_name, date),
	FOREIGN KEY (company_id) references Company(company_id) ON DELETE CASCADE
);

CREATE TABLE Requests (
	user_id INT(10),
	company_id INT(10),
	PRIMARY KEY(user_id, company_id),
	FOREIGN KEY(user_id) references RegularUser(user_id) ON DELETE CASCADE,
	FOREIGN KEY(company_id) references Service(service_id) ON DELETE CASCADE
);