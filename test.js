'use strict';

const fs = require('fs');
const path = require('path');

const apiDir = './api/1.0';
const mapping = {
  '01.json': 'January',
  '02.json': 'February',
  '03.json': 'March',
  '04.json': 'April',
  '05.json': 'May',
  '06.json': 'June',
  '07.json': 'July',
  '08.json': 'August',
  '09.json': 'September',
  '10.json': 'October',
  '11.json': 'November',
  '12.json': 'December'
};

const years = fs.readdirSync(apiDir);

for (const year of years) {
  const yearPath = path.join(apiDir, year);
  const months = fs.readdirSync(yearPath);

  for (const month of months) {
    const monthName = mapping[month];
    const monthPath = path.join(yearPath, month);
    const monthFile = fs.readFileSync(monthPath, 'utf8'); 

    console.log(`Validating ${monthName} ${year} in file: ${monthPath}`);

    let obj;

    try {
      obj = JSON.parse(monthFile);
    } catch(e) {
      bail('Couldn\'t parse JSON file', e);
    }

    let lastStartDate;
    let lastHackathon;

    for (const hackathon of obj[monthName]) {
      let startDate = Date.parse(hackathon.startDate);
      if (startDate !== undefined) {
        if (lastStartDate > startDate) {
          bail(`${hackathon.title} should be before ${lastHackathon.title}`);
        }
      }

      lastStartDate = startDate;
      lastHackathon = hackathon;
    }
  }
}

console.log('Success!');

function bail(msg, e) {
  console.log(msg);
  if (e === undefined) {
    process.exit(1);
  }

  throw e;
}
