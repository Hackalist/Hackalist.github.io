![hackalist-logo](images/logo.png)
![https://img.shields.io/badge/pull%20requests%20closed%20in-6%20minutes-brightgreen.svg?style=flat-square](https://img.shields.io/badge/pull%20requests%20closed%20in-6%20minutes-brightgreen.svg?style=flat-square) [![Build Status](https://travis-ci.org/Hackalist/Hackalist.github.io.svg?branch=master)](https://travis-ci.org/Hackalist/Hackalist.github.io)
=================================
Hackalist is a community-driven database of hackathons that has the most up to date information for all your hackathon needs. Visit our [website](http://www.hackalist.org) to view the live site.

Feel free to submit [Pull Requests](http://github.com/Hackalist/Hackalist.github.io/pulls) and/or [Issues](http://github.com/Hackalist/Hackalist.github.io/issues). Issues can include a request to add a hackathon, bug reports, feature requests, or questions.

If you have any questions or concerns, please open an issue (with the `help wanted` label) or tweet [@KevinPayravi](http://twitter.com/KevinPayravi).

Authorship
=================================
Site initiated by [Kevin Payravi](http://www.kevinpayravi.com/). Special thanks to:
* [Aaroh Mankad](https://github.com/aarohmankad) for implementing automated AngularJS parsing.
* [Harrison Shoebridge](https://github.com/paked) for improving JavaScript, automated page generation, and setting up automated [Travis CI](https://travis-ci.org/) checking.
* [Rodrigo Argumedo](https://github.com/rodrigoargumedo) for continued support.
* [All others](https://github.com/Hackalist/Hackalist.github.io/graphs/contributors) who have submitted hackathon listings and other improvements.

Licensing
=================================
Site code is licensed under the [MIT license](https://github.com/Hackalist/Hackalist.github.io/blob/master/LICENSE).

Hackalist also utilizses some design/style elements from [Skeleton](http://getskeleton.com/), a project by Dave Gamache that is also [licensed under the MIT license](https://github.com/dhg/Skeleton/blob/master/LICENSE.md).

Projects Using Hackalist's API
=================================
* [Mapathon - Mapping Hackathons](http://mding5692.github.io/mapathon/prototype.html) by [Michael Ding](https://github.com/mding5692)
* [CoderCalendar](https://github.com/nishanthvijayan/CoderCalendar), an Android app, Chrome extension, and Firefox add-on that lists upcoming coding contests and allows users to easily add them to their Google Calendar.
* [HackathonHowFar](https://github.com/JoshuaRLi/HackathonHowFar), a small Python script that outputs distance + driving time to a currently available hackathon from a given origin location.

API
=================================
The [Hackalist API](https://github.com/Hackalist/Hackalist.github.io/tree/master/api/1.0) is composed of JSON files organized by year and month. The file system is: `/api/1.0/YEAR/MONTH.json`.

The API is public, so feel free to use it for your own projects. As always, a link back to Hackalist is appreciated!

## Contributing
Hackalist is made possible by dozens of contributors who add hackathon listings to our JSON database. The project accepts hackathons from all around the world as long as they are open to a general populace (hackathons restricted to college students, high schoolers, or large geographic areas are great; hackathons restricted to specific companies, colleges, or cities are too narrow to be listed).

We encourage anyone to create [Pull Requests](http://github.com/Hackalist/Hackalist.github.io/pulls) to submit their favorite hackathons, as well as hackathons they find through search engines and other hackathon directories (such as [Major League Hacking's listings](https://mlh.io/)). If you don't want to make a Pull Request, you may open an [Issue](https://github.com/Hackalist/Hackalist.github.io/issues) to request the addition of a particular hackathon.

Hackathon listings are sorted chronology based on the starting date of the hackathon. If two hackathons start on the same day, they are sorted alphabetically.

Please ensure your JSON syntax is correct before submitting. An easy way to check your JSON synax is through [JSONLint](http://jsonlint.com/).

## JSON Parameters
* `title`: Name of hackathon
* `url:` Official URL
* `startDate:` Starting date, formatted as *Month Day* (e.g. August 30)
* `endDate:` End date, formatted as *Month Day* (e.g. August 30)
* `year:` Year
* `city:` City hackathon is occuring in, formatted as *City, State/Province Abbreviation, Country* (e.g. Miami, FL, United States). If a hackathon has multiple locations (e.g. CodeDay), list as *Various Locations (Country)*, replacing *Country* with a country name (or *Worldwide*).
* `host:` The host (university, company, etc.)
* `length:` Length in hours
* `size:` Number of attendees; if not known, specify *unknown*
* `travel:` Is travel reimbursed, in either part or full? *yes* | *no* | *unknown*
* `prize:` Are prizes awarded to winners? *yes* | *no* | *unknown*
* `highSchoolers:` Are high schoolers allowed to apply or attend? *yes* | *no* | *unknown*
* `cost:` Cost of the event *free* | *$10* | *€10* | *etc.*
* `facebookURL:` URL to official Facebook profile
* `twitterURL:` URL to official Twitter profile
* `googlePlusURL:` URL to official Google+ profile
* `notes:` Any additional notes (limits to who can attend, special requirements, etc.)

## Listing Example
```
{
      "title": "Best Hackathon",
      "url": "http://besthackathon.com/",
      "startDate": "January 20",
      "endDate": "January 21",
      "year": "2016",
      "city": "New York, NY, United States",
      "host": "Best University",
      "length": "36",
      "size": "200",
      "travel": "no",
      "prize": "yes",
      "highSchoolers": "unknown",
      "cost": "free",
      "facebookURL": "https://www.facebook.com/besthackathon",
      "twitterURL": "https://twitter.com/besthackathon",
      "googlePlusURL": "",
      "notes": ""
    }
```
