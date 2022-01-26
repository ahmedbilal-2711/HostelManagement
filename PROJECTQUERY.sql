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
insert into Hostelites values('m0000001','4220115323749','Wasif','Khan','Sher Khan','27-dec-1962','KPK','1m','House number 502, Street Gola Bazar,KPK','03215436789')
SELECT * from Hostelites
update  Hostelites set ID ='s01.@com' where ID='s0000001'

create table Student(
MERIT_NO  integer not null,
FCNO      char(11),
DISCIPLINE varchar(20) not null,
SEMESTER   char(1) not null,
ID CHAR(8) CONSTRAINT fkstudentid Foreign key
REFERENCES Hostelites(ID) Primary key
)

SELECT FIRST_NAME,LAST_NAME,s.ID,CNIC,DISCIPLINE,PCNO FROM Hostelites AS h INNER JOIN STUDENT AS s ON h.ID = s.ID where s.ID='s0000001'

insert into Student values(823,'03362499556','CSE','3','s0000001')

create table Manager(
RANKS  char(20),
ID CHAR(8) CONSTRAINT fkmanagerid Foreign key
REFERENCES Hostelites(ID) Primary Key
) 

insert into Manager values('Astt','m0000001')
create table TimeTable(
DAY varchar(15),
SLOT1 varchar(15),
SLOT2 varchar(15),
SLOT3 varchar(15),
SLOT4 varchar(15),
SLOT5 varchar(15),
SLOT6 varchar(15),
SLOT7 varchar(15),
ID CHAR(8) NOT NULL constraint fkidn Foreign key 
References Student(ID) Primary Key
)
ALTER Table MonthlyBills ALTER COLUMN MONTHS varchar(15)
create table MonthlyBills(
BILL_ID      INT NOT NULL,
MONTHS         varchar(15),
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

CREATE PROCEDURE perStudentBillCalc(@id  char(8))
AS
SET NOCOUNT ON 

SELECT ROOM_RENT+GAS+ELECTRICITY+WATER+BEARER_CHARGES+FINE+LAUNDARY+MESS+ARREARS,EXTRA_MESS FROM MonthlyBills WHERE ID=@id;
GO

CREATE PROCEDURE signupDetails(@ID  char(8),@CNIC char(13),@FIRST_NAME VARCHAR(20),@LAST_NAME VARCHAR(20),@FATHER_NAME VARCHAR(20),@DOB DATE,@DOMICILE VARCHAR(20),@PASSWORD VARCHAR(20),@POSTAL_ADDRESS VARCHAR(50),@PCNO CHAR(11),@MERIT_NUMBER INT,@FCNUMBER CHAR(11),@DISCIPLINE VARCHAR(20),@SEMESTER CHAR(1))
AS
SET NOCOUNT ON 
INSERT INTO Hostelites VALUES(@ID,@CNIC,@FIRST_NAME,@LAST_NAME,@FATHER_NAME,@DOB,@DOMICILE,@PASSWORD,@POSTAL_ADDRESS,@PCNO)
INSERT INTO Student VALUES(@MERIT_NUMBER,@FCNUMBER,@DISCIPLINE,@SEMESTER,@ID)
GO

--EXEC signupDetails 's0000003','3640219258387','Muhammad','Nabeel','Muhammad Saeed','03-feb-2001','Sahiwal','3','CB801 Kolsar Coloney','03044758269',772,'03017345542','CSE','3'
create table ExpenseCalculator(
DETAILS VARCHAR(15),
AMOUNT   INT NOT NULL,
ID CHAR(8) NOT NULL References Student(ID)
)

create table MessSchedule(
DAYS       varchar(15), 
BREAKFAST  varchar(15),
LUNCH      varchar(15),
DINNER     varchar(15),
)
TRUNCATE TABLE MessSchedule
insert into MessSchedule values('Monday','Egg/Paratha','Andda Khakina','Biryani'),('Tuesday','Egg/Bread','Dal Rice','Daal Chana'),('Wednesday','Egg/Paratha','Mix Vegetable','Qorma'),('Thursday','French Toast','Andda Khakina','Daal Chana'),('Friday','Chocolate/Bread','Biryani','Daal Chana'),('Saturday','Haleem/Roti','Roast',''),('Sunday','Channa/Prattha','Roast','')
SElECT * From MessSchedule

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
ID CHAR(8) NOT NULL References Student(ID),
 Primary key(ID,DATE)
)
create procedure attendancecalculation @ID CHAR(8)
AS
DECLARE @A CHAR(1)
DECLARE @P CHAR(1)
BEGIN
SET @A=(SELECT COUNT(*) FROM Attendance
WHERE STATUS='A' and ID=@ID)
SET @P=(SELECT COUNT(*) FROM Attendance
WHERE STATUS='P' and ID=@ID)
--PRINT 'STUDENT ID '+@ID
PRINT 'ABSENTS    '+@A
PRINT 'PRESENTS   '+@P
END
GO
insert into Attendance values('2021-02-12','P','s0000001')
select status,count(status) from Attendance where id='s0000001' group by STATUS

create procedure ExpenseCalculator_Details(@details char(15),@amount int ,@id char(8) )
As
SET NOCOUNT ON
insert into ExpenseCalculator values(@details,@amount,@id)
GO


create procedure TimeTable_Details(@DAY char(15),@slot1 varchar(15),@slot2 varchar(15),@slot3 varchar(15),@slot4 varchar(15),@slot5 varchar(15),@slot6 varchar(15),@slot7 varchar(15) )
As
SET NOCOUNT ON
insert into TimeTable values(@DAY,@slot1,@slot2,@slot3,@slot4 ,@slot5 ,@slot6,@slot7,'s0000001')
GO

CREATE TRIGGER messManagerNew ON BillManager AFTER INSERT
AS 
BEGIN
SET NOCOUNT ON
DECLARE @roomrent int;
SELECT @roomrent= ROOMRENT from inserted
DECLARE @electricity int;
SELECT @electricity= ELECTRICITY from inserted
DECLARE @gas int;
SELECT @gas= GAS from inserted
DECLARE @water int;
SELECT @water= WATER from inserted
DECLARE @mess int;
SELECT @mess= MESSING from inserted
DECLARE @date date;
SELECT @date= DATE from inserted
INSERT into MonthlyBills values (1,'Dec','Paid',@roomrent,@gas,@electricity,@water,500,0,220,5800,0,0,'27-feb-2020','s0000001')
END
GO
ALTER TABLE MonthlyBills DROP COLUMN Amount

insert into BillManager values(5500,200,5500,400,5800,'27-feb-2020','m0000001','s0000001')

select * from BillManager
select * from ExpenseCalculator