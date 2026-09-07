-- KAMF 2026 read-only public data schema
create table if not exists performances (
  id text primary key,
  title text not null,
  type text not null check (type in ('INVITED_ARTIST','OPEN_STAGE','OPEN_BUSKING')),
  date date not null,
  "startAt" timestamptz not null,
  "endAt" timestamptz,
  stage text not null,
  description text,
  part text
);

create table if not exists booths (
  id text primary key,
  "boothNumber" text not null,
  name text not null,
  organization text,
  category text not null check (category in ('INFO_SELF','SPONSOR','INVITED','CLUB','NIGHT_MARKET','FOOD_TRUCK')),
  description text,
  "locationHint" text
);

create table if not exists goods (
  id text primary key,
  name text not null,
  "requiredVisits" integer not null,
  "requiredCategory" text,
  "requiredCategoryLabel" text,
  description text not null
);

alter table performances enable row level security;
alter table booths enable row level security;
alter table goods enable row level security;

drop policy if exists "public read performances" on performances;
create policy "public read performances" on performances for select using (true);
drop policy if exists "public read booths" on booths;
create policy "public read booths" on booths for select using (true);
drop policy if exists "public read goods" on goods;
create policy "public read goods" on goods for select using (true);
