// Each date choice card
const dateChoices = document.querySelectorAll(".card-date");
// The hidden input field to record the user's choices
const dateInput = document.getElementById("date-votes");

const dateListeners = () => {
  dateChoices.forEach(date => {
    date.addEventListener('click', (event) => {
      // Toggle whether the card has checked style class or not
      date.classList.toggle("checked");

      // Get the id of the date_choice via dataset
      const id = date.dataset.id;
      if (dateInput.value === "") {
        // If there's no input yet, add the choice
        dateInput.value = id;
      } else {
        // Else, split the input into an array and see if chosen id is already there
        const inputsArray = dateInput.value.split(",");
        const index = inputsArray.findIndex((x) => x === id);
        if (index === -1) {
          // If it's not there, add it after a comma
          dateInput.value += `,${id}`;
        } else {
          // Else, remove it, and reset the date input
          inputsArray.splice(index, 1);
          dateInput.value = inputsArray.join();
        }
      }
    });
  });
};

const going = document.getElementById("going");
const maybe = document.getElementById("maybe");
const no = document.getElementById("no");
const rsvp = [going, maybe, no];
const rsvpInput = document.getElementById("attendance");

const rsvpListeners = () => {
  if (going !== null && maybe !== null && no !== null) {
    rsvp.forEach(answer => {
      answer.addEventListener('click', (event) => {
        rsvpInput.value = answer.dataset.id
      });
    });
  }
};

export { dateListeners, rsvpListeners };