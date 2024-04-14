
const events = [
     {
       title: "Orientation",
       date: new Date("2024-04-13"),
       location: "Board Room",
      attendees: new Set(["All new employees"]),
       organizer: "Mr.Charles Dina"
     },
    {
      title: "Orientation",
      date: new Date("2024-04-14"),
      location: "Board Room",
      attendees: new Set(["All new trainees"]),
      organizer: "Charles Dina"
    },
    {
      title: "Deployment",
      date: new Date("2024-04-15"),
      location: "Staff Room",
      attendees: new Set(["Jason", "Jesse", "Faith" , "Cecelia"]),
      organizer: "Whitney"
    },
    {
      title: "Assignment",
      date: new Date("2024-04-16"),
      location: "Evaluation Centre",
      attendees: new Set(["All trainees to attend"]),
      organizer: "Regan"
    },
    {
      title: "Ranking",
      date: new Date("2024-04-17"),
      location: "Open Arena",
      attendees: new Set(["All to attend as per their assigned day"]),
      organizer: "Group Trainers"
    },
    {
      title: "Certification",
      date: new Date("2024-04-18"),
      location: "Circular Innovation Hub",
      attendees: new Set(["All trainees who passed"]),
      organizer: "Dean of Studies"
    },
    {
      title: "Graduation",
      date: new Date("2024-04-19"),
      location: "Graduation Arena",
      attendees: new Set(["The whole Zindua team"]),
      organizer: "Vice Chancellor"
    },
    {
      title: "After-Party",
      date: new Date("2024-04-20"),
      location: "Roccomamas Sarit Centre",
      attendees: new Set(["Zindua management and graduates"]),
      organizer: "Management team"
    }

  ];

  
  
  // Create a WeakMap to store event organizers
  const eventOrganizers = new WeakMap();
  events.forEach(event => {
    // eventOrganizers.set(event.title, event.organizer);
  });
  
  // Function to add a new attendee to an event
  function addAttendee(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
      console.log(`${attendeeName} added to ${eventTitle}`);
    } else {
      console.log("Event not found");
    }
  }
  
  // Function to convert event array to JSON string with formattedDate property
  function eventsToJSON() {
    return JSON.stringify(events.map(event => ({
      ...event,
      formattedDate: event.date.toLocaleDateString('en-US')
    })));
  }
  
  // Display properties and values of the first event object
  const firstEvent = events[0];
  console.log("Properties:", Object.keys(firstEvent));
  console.log("Values:", Object.values(firstEvent));
  console.log("Entries:", Object.entries(firstEvent));
  
  // Iterate over events and log title and date
  events.forEach(event => {
    console.log(`Title: ${event.title}, Date: ${event.date.toLocaleDateString('en-US')}`);
  });

  // Function to delete an event by title
function deleteEvent(eventTitle) {
    const index = events.findIndex(event => event.title === eventTitle);
    if (index !== -1) {
      events.splice(index, 1);
      console.log(`Event '${eventTitle}' deleted successfully.`);
    } else {
      console.log("Event not found");
    }
  }
  
    // This part should be within a <script> tag at the end of the body or loaded after the DOM content is loaded

    // Function to filter events happening in the next 7 days
    function filterEventsInNextSevenDays() {
      const today = new Date();
      const nextWeek = new Date(today);
      nextWeek.setDate(today.getDate() + 7);
      return events.filter(event => event.date >= today && event.date <= nextWeek);
    }

    // Render events happening in the next 7 days
    function renderEvents() {
      const eventsTable = document.getElementById("events-table");
      eventsTable.innerHTML = ""; // Clear previous content

      const upcomingEvents = filterEventsInNextSevenDays();
      upcomingEvents.forEach(event => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${event.title}</td>
          <td>${event.date.toLocaleDateString('en-US')}</td>
          <td>${event.location}</td>
          <td>${Array.from(event.attendees).join(", ")}</td>
        `;
        eventsTable.appendChild(row);
      });
    }

    // Initial render
    renderEvents();
