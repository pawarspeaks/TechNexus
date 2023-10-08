const events = document.querySelectorAll('.event');

function filterEvents() {
  const sortDate = new Date(document.getElementById('sort-date').value);
  const sortLocation = document.getElementById('sort-location').value.toLowerCase();

  events.forEach(event => {
    const eventDate = new Date(event.querySelector('.event-date').textContent);
    const eventLocation = event.querySelector('.event-location').textContent.toLowerCase();

    const datePass = isNaN(sortDate) || eventDate >= sortDate;
    const locationPass = eventLocation.includes(sortLocation);

    event.style.display = datePass && locationPass ? 'block' : 'none';
  });
}

document.getElementById('sort-date').addEventListener('input', filterEvents);
document.getElementById('sort-location').addEventListener('input', filterEvents);

const hamburgerIcon = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburgerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
