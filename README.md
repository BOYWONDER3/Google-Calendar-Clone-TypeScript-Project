# The main goal of this project is to create a simple calendar application similar to Google Calendr, This project was  written entirely in TypeScript. 
## Instructions/Procedures 
1. Created a Calendar component that renders the current month by default.
- This calendar contains buttons for going back/forward a month as well as for jumping to the current month.
2. Added a + button that allows you to create a new event for the specific day.
- This opens a modal form for adding a new event.
- The form includes a name, allDay, startTime, endTime, and color field.
- The name field is required.
- The allDay field is a checkbox that when checked will disable the startTime and endTime fields.
- The startTime is before the endTime and are required if allDay is not checked.
- The color field contains the options red, blue, and green.
3. Rendered events in the calendar view.
- Events are sorted with all day events first and then by start date.
4. Clicking on an event should open an edit modal.
- This modal contains the same fields as the add event modal but is pre-populated with the event data.
- This modal contains a delete button for removing an event.
5. Store events in LocalStorage so they persist on page refresh.
6. If the number of events overflows the calendar day then render a +X More button at the bottom of the day that shows the number of events that overflow.
- These overflow events should be rendered in a modal when the +X More button is clicked.
- Clicking on one of the events in this modal should open the edit modal.
- The overflow events should be hidden and not rendered at all in the DOM (except in the modal).
- When the calendar day is resized the overflow events should be recalculated and rendered again.
- When the number of events changes the overflow events should be recalculated and rendered again.
7. Added a closing animation to the modals.
- A closing class was added to the modal to trigger the closing animation.
- The modal should only be removed from the DOM after the animation finishes to ensure if has a nice smooth transition out.