![hackalist-logo](images/logo.png)
=================================
Hackalist is a database of hackathons that has the most up to date information for all your hackathon needs. Visit our [website](http://www.hackalist.org) to view the live site.

Feel free to submit [Pull Requests](http://github.com/Hackalist/Hackalist.github.io/pulls) and/or [Issues](http://github.com/Hackalist/Hackalist.github.io/issues).

If you have any questions or concerns, please tweet [@KevinPayravi](http://twitter.com/KevinPayravi).

Authorship
=================================
Site initiated by [Kevin Payravi](http://www.kevinpayravi.com/). Special thanks to:
* [Aaroh Mankad](https://github.com/aarohmankad) for implementing automated AngularJS parsing.
* [Harrison Shoebridge](https://github.com/paked) for improving JavaScript and automated page generation.
* [Rodrigo Argumedo](https://github.com/rodrigoargumedo) for continued support.
* [All others](https://github.com/Hackalist/Hackalist.github.io/graphs/contributors) who have submitted hackathon listings.

Licensing
=================================
Site code is licensed under the [MIT license](https://github.com/Hackalist/Hackalist.github.io/blob/master/LICENSE).

Hackalist also utilizses some design/style elements from [Skeleton](http://getskeleton.com/), a project by Dave Gamache that is also [licensed under the MIT license](https://github.com/dhg/Skeleton/blob/master/LICENSE.md).

API
=================================
The [Hackalist API](https://github.com/Hackalist/Hackalist.github.io/tree/master/api/1.0) is split into separate JSON files for each month of each year, following the file pattern `/api/1.0/YEAR/MONTH.json`.

The API is public, so feel free to use it for your own projects. As always, a link back to Hackalist is appreciated.

## Contributing
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
* `facebookURL:` URL to official Facebook profile
* `twitterURL:` URL to official Twitter profile
* `googlePlusURL:` URL to official Google+ profile
* `notes:` Any additional notes (limits to who can attend, special requirements, etc.)
