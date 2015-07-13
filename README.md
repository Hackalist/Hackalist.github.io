![hackalist-logo](images/logo.png)
=================================
Visit our [website](http://www.hackalist.org) to view the live site.

Hackalist is a database of hackathons that has the most up to date information for all your hackathon needs.

Feel free to submit [Pull Requests](http://github.com/Hackalist/Hackalist.github.io/pulls) and/or [Issues](http://github.com/Hackalist/Hackalist.github.io/issues).

If you have any questions or concerns, please tweet [@KevinPayravi](http://twitter.com/KevinPayravi).

Authorship
=================================
Site initiated by [Kevin Payravi](http://www.kevinpayravi.com/). Special thanks to:
* [Aaroh Mankad](https://github.com/aarohmankad) for implementing automated AngularJS parsing.
* [Harrison Shoebridge](https://github.com/paked) for improving JavaScript and automated page generation.
* [Rodrigo Argumedo](https://github.com/rodrigoargumedo) for continued support.
* [All others](https://github.com/Hackalist/Hackalist.github.io/graphs/contributors) who have submitted hackathon listings.

API
=================================
The Hackalist API is split into separate JSON files for each month of each year, following the file pattern `/api/1.0/YEAR/MONTH.json`.

The API is public, so feel free to use it. As always, a link back to Hackalist is appreciated.

Listings are sorted chronology based on the starting date of the hackathon. If two hackathons start on the same day, they are sorted alphabetically.

##2014
* August - http://www.hackalist.org/api/1.0/2014/08.json
* September - http://www.hackalist.org/api/1.0/2014/09.json
* October - http://www.hackalist.org/api/1.0/2014/10.json
* November - http://www.hackalist.org/api/1.0/2014/11.json
* December - http://www.hackalist.org/api/1.0/2014/12.json


##2015
* January - http://www.hackalist.org/api/1.0/2015/01.json
* February - http://www.hackalist.org/api/1.0/2015/02.json
* March - http://www.hackalist.org/api/1.0/2015/03.json
* April - http://www.hackalist.org/api/1.0/2015/04.json
* May - http://www.hackalist.org/api/1.0/2015/05.json
* June - http://www.hackalist.org/api/1.0/2015/06.json
* July - http://www.hackalist.org/api/1.0/2015/07.json
* August - http://www.hackalist.org/api/1.0/2015/08.json
* September - http://www.hackalist.org/api/1.0/2015/09.json
* October - http://www.hackalist.org/api/1.0/2015/10.json

##Parameters
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
* `facebookURL:` URL to official Facebook profile
* `twitterURL:` URL to official Twitter profile
* `googlePlusURL:` URL to official Google+ profile
* `notes:` Any additional notes (limits to who can attend, special requirements, etc.)
