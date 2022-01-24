create table Hostelites(
ID          char(8) primary key not null,
CNIC        char(13) not null,
FIRST_NAME  varchar(20) not null,
LAST_NAME   varchar(20) ,
FATHER_NAME varchar(20) not null,
DOB         date not null,
DOMICILE    varchar(20) ,
PASSWORD    varchar(20) not null,
POSTAL_ADDRESS   varchar(50),
PCNO        CHAR(11) not null
)

insert into Hostelites values('s0000001','4220115323749','Ahmed','Bilal','Muhammad Bilal','27-nov-2001','Sindh','1','Flat A-11 Dawood Heights Sector 5K North Karachi','03352499556')

create table Student(
MERIT_NO  integer not null,
FCNO      char(11),
DISCIPLINE varchar(20) not null,
SEMESTER   char(1) not null,
ID CHAR(8) CONSTRAINT fkstudentid Foreign key
REFERENCES Hostelites(ID) Primary key
)

insert into Student values(823,'03362499556','CSE','3','s0000001')

create table Manager(
RANKS  char(20),
ID CHAR(8) CONSTRAINT fkmanagerid Foreign key
REFERENCES Hostelites(ID) Primary Key
) 

create table TimeTable(
DAY DATE,
SLOT1 varchar(15),
SLOT2 varchar(15),
SLOT3 varchar(15),
SLOT4 varchar(15),
SLOT5 varchar(15),
SLOT6 varchar(15),
SLOT7 varchar(15),
ID CHAR(8) NOT NULL constraint fkid Foreign key 
References Student(ID) Primary Key
)

create table MonthlyBills(
BILL_ID      INT NOT NULL,
MONTHS         DATE,
STATUS       VARCHAR(10),
AMOUNT       INT,
ROOM_RENT    INT,
GAS          INT,   
ELECTRICITY  INT,
WATER        INT,
BEARER_CHARGES INT,
FINE           INT,
LAUNDARY     INT,
MESS         INT,
ARREARS      INT,
EXTRA_MESS    INT,
DUE_DATE      DATE,
ID CHAR(8) NOT NULL References Student(ID) Primary Key
) 


create table ExpenseCalculator(
DETAILS VARCHAR(15),
AMOUNT   INT NOT NULL,
ID CHAR(8) NOT NULL References Student(ID) Primary key
)

create table MessSchedule(
DAYS       DATE, 
BREAKFAST  varchar(15),
LUNCH      varchar(15),
DINNER     varchar(15),
ID CHAR(8) NOT NULL References Manager(ID) Primary Key
)

create table RoomManager(
FLATNO int,
ROOMNO int,
STUDENT1_ID char(8) References Student(ID),
STUDENT2_ID char(8) References Student(ID),
ID CHAR(8) NOT NULL References Manager(ID),
Primary Key(ID,STUDENT2_ID,STUDENT1_ID)
)

create table BillManager(
ELECTRICITY int,
GAS         int,
ROOMRENT    int,
WATER       int,
MESSING     int,
DATE         date,
MID CHAR(8) NOT NULL  References Manager(ID),
SID CHAR(8) NOT NULL  References Student(ID),
primary key(MID,SID)
)

create table Attendance(
DATE    DATE NOT NULL ,
STATUS  VARCHAR(10) NOT NULL,
ID CHAR(8) NOT NULL References Student(ID) Primary key
)

