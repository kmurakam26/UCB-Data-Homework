
drop database econ_db;

create database econ_db;
use econ_db;

create table sp (
date date primary key,
price int,
volume bigint
);

select * from velocity;


create table velocity (
date date primary key,
velocity double
);

create table debt (
date date primary key,
debt double);


select a.date, a.price, a.volume, b.debt, c.velocity
from sp a
join debt b
on a.date=b.date
join velocity c
on b.date=c.date;
