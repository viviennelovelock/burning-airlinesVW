# Burning Airlines 
## Vaibhav, Vivienne and Will

[Burning Airlines] - Heroku hosting

Tasked with building a working booking system in Backbone on **two days** and armed with coffee and ignorance we set out.

## Challenges

- Figuring out Backbone, many models, collections and views
- Building confidence in rails and backbone
- **Naming** writing clear code, straightforward logic and consistency (Try not to swear)
- Using  hacks and methods like _.where and utilising them effectively.

## Triumphs!
- setUpListeners - add and remove. AJAX requests
- Working in console
- 

## To Fix
- CSS

## Basic Backbone Wireframes

| Collections       | Models           | Routes  | Views |
| ------------- |:-------------:| ------:| ------:|
| Flights     | Flight | AppRouter | AppView |
|  Planes   | Plane |       |SearchResultsView |
| Reservations | Reservation|    |SearchView|
| Users | User     |     | SeatPlanView |


We utilised [typeahead.js] a flexible ​*JavaScript*​ library that provides a strong foundation for building robust typeaheads



[Burning Airlines]: <https://desolate-journey-8063.herokuapp.com/>
[typeahead.js]: <https://twitter.github.io/typeahead.js/>



### Outline

- A plane has a name, rows, and columns.
- A flight has a flight number, origin, destination, date, and plane.
- An admin can create planes on the /airplanes page.
- When a new plane is saved the page should show a seating diagram.

- When a new flight is saved, the page should show a list with the newest date at the top of the list and the number of available seats on the plane.
- A user can search for flights on the /search page. The search page should have an input form for the origin and destination. When a user creates a search, the page should show a list of flights with the newest date at the top, and include the number of available seats on the flight.
- When the user selects a flight, we should go to the show page ie, /flights/3. The plane show page should show a seating diagram with available seats and seats that have been selected, with their names.
- A user can select a seat.
- When a seat is saved, the available seats on the /flights page should update.