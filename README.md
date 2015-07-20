How to run this demo
====================

- Install Node.js
- grunt install grunt-cli
- npm install
- bower install
- grunt serve

If you get any error messages, be sure that all the correct npm/bower libraries were installed. It will warn you which one doesn't exist if that is the case

Notes
====================

- I consolodated latitude && longitude into a single json param since I feel like it would reduce the payload a bit - every bit counts. The serve that would return this would just consolodate that for us.
- All service responses are using stubs - no api integration was built out for this demo as time did not allow it
- ui is only meant for a mobile phone, but could be used on a desktop if you wanted (still would look nice)
- Because I wanted to finish in a few hours, I didn't set up any grunt tasks to manage my workflow better. If this was a longer term project I would have set up stuff like
	- grunt serve-app
		- compiles the less
		- concats, minifies, uglifies js -> so I don't have to sweat including new files
		- injects bower dependencies
		- serve with express rather than grunt contrib connect
- regarding styles, i put them in css files because i didn't set up a less task to auto build as i was developing, then inject that into my index.html. with more time I would set something like that up

Nice to haves
====================

- Sort by nearest bar (getting your phones coordinates and filtering by shortest distance)
- filter a pub's menu by manufacturer, price range, beer type (requires more verbose data)
- hamburger icon not an image, but a glyphicon (bootstrap) I had some issues getting it to render correctly and ran out of time

Time spent on this project ~4 hours