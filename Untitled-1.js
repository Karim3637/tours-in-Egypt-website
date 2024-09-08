function addStyles() {
  const style = document.createElement('style');
  style.textContent = `
      @media (max-width: 768px) {
          nav {
              font-size: 16px;
          }
          .elementsec div:nth-child(1) {
              padding: 10px;
              font-size: 16px;
          }
          .elementsec {
              flex-direction: column;
          }
          img {
              width: 100%;
              height: auto;
          }
          h1 {
              font-size: 24px;
          }
          p {
              font-size: 14px;
          }
          .choice {
              margin-top: 100px;
              font-size: 32px;
              margin-left: 0px;
          }
          .itemcontainer {
              flex-direction: column;
          }
          .back-button {
              margin: 10px 0;
              padding: 8px 16px;
          }
      }
      @media (max-width: 576px) {
          nav {
              flex-direction: column;
              align-items: center;
          }
          .elementsec div:nth-child(1) {
              margin-bottom: 20px;
          }
          .elementsec div:nth-child(3) {
              font-size: 14px;
          }
          .play-button {
              width: 40px;
              height: 40px;
          }
      }
      .active {
          color: red;
          font-weight: bold;
      }
  `;
  document.head.appendChild(style);
}

// Call the function to add styles
addStyles();
let nav = document.createElement('nav');
let nav1 = document.createElement('div');
let nav2 = document.createElement('a');
let nav3 = document.createElement('a');
let nav4 = document.createElement('a');
let nav5 = document.createElement('a');
let nav6 = document.createElement('a');
let nav7 = document.createElement('a');
let img = document.createElement('img');

let logoImg = document.createElement('img');
logoImg.src = 'imagess/hrm.png'; // Replace with the actual path to your logo image
logoImg.alt = 'Company Logo'; // Alt text for accessibility
logoImg.style.width = '50px'; // Set the width of the logo
logoImg.style.height = 'auto';
let home = document.createTextNode('home');
let dest = document.createTextNode('destination');
let gallery = document.createTextNode('Gallery');
let aboutus = document.createTextNode('about us');
let signup = document.createTextNode('sign up');
let login = document.createTextNode('login');
let address = document.createElement('h1');
let addresstext = document.createTextNode(
  'plan your trip visiting tour in Egypt'
);
let paragraph = document.createElement('p');
let paragtext = document.createTextNode(
  'Egypt has many great historical places for anyone to visit, enjoy your trip visiting egypt tours to get your own satisfaction'
);
let elementsec = document.createElement('div');
let element1 = document.createElement('div');
let element2 = document.createElement('div'); // This is the play button
let element3 = document.createElement('div'); // This is the "Watch with video" text
let element1t = document.createTextNode('Explore with me');
let element3t = document.createTextNode('Watch with video');
let thirdsec = document.createElement('div');
let thirdtext = document.createTextNode('plan now :');
let formcontainer = document.createElement('form');
let loc = document.createElement('input');
let where = document.createElement('input');
let date = document.createElement('input');
let discover = document.createElement('button');
let choice = document.createElement('h2');
let choicetext = document.createTextNode('why choice with us ?');
loc.setAttribute('placeholder', 'Your Location');
where.setAttribute('placeholder', 'Where are you going?');

date.setAttribute('placeholder', 'When?');
nav6.href = '#'; // Prevents default behavior of a link
nav6.style.cursor = 'pointer';
nav5.href = '#'; // Prevents default behavior of a link
nav5.style.cursor = 'pointer';
nav4.href = '#'; // Prevents default behavior of a link
nav4.style.cursor = 'pointer';
nav3.href = '#'; // Prevents default behavior of a link
nav3.style.cursor = 'pointer';
nav2.href = '#'; // Prevents default behavior of a link
nav2.style.cursor = 'pointer';
nav7.href = '#'; // Prevents default behavior of a link
nav7.style.cursor = 'pointer';
discover.textContent = 'Discover Now';
let whatdo=document.createElement('h2');
whatdo.textContent='What do they say?';
let itemcontainer = document.createElement('div');
// Injecting the style dynamically using JavaScript
function addActiveClassStyle() {
  const style = document.createElement('style');
  style.textContent = `
      .active{
          color: red; /* Change the color for the active link */
          font-weight: bold; /* Optionally make it bold */
        
      }`
  ;
  document.head.appendChild(style);
}

// Call the function to add the active class style
addActiveClassStyle();
nav2.classList.add('active');
// Assuming you have multiple navigation links
const navLinks = [nav2, nav3, nav4, nav5, nav6, nav7];

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(l => l.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

const cards = [
  {
    icon: 'imagess/ii.png', // replace with actual icon path
    title: 'Professional Tour Guide',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis a mauris, in maecenas luctus.',
  },
  {
    icon: 'imagess/travel.png', // replace with actual icon path
    title: 'Travel Ease',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis a mauris, in maecenas luctus.',
  },
  {
    icon: 'imagess/sec.png', // replace with actual icon path
    title: 'Security Guarantee',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis a mauris, in maecenas luctus.',
  },
];

function createCard(card) {
  // Create card container
  const cardElement = document.createElement('div');
  cardElement.style.width = '300px';
  cardElement.style.border = '3px solid #D5BEBE';
  cardElement.style.borderRadius = '10px';
  cardElement.style.padding = '20px';
  cardElement.style.margin = '10px';
  cardElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  cardElement.style.textAlign = 'center';
  cardElement.style.backgroundColor = '#fff';
  cardElement.style.display = 'inline-block';
  cardElement.style.verticalAlign = 'top';
  cardElement.style.marginLeft = '80px';


  // Create icon element
  const iconElement = document.createElement('img');
  iconElement.src = card.icon;
  iconElement.alt = card.title;
  iconElement.style.width = '48px';
  iconElement.style.height = '48px';
  iconElement.style.marginBottom = '15px';

  // Create title element
  const titleElement = document.createElement('h3');
  titleElement.textContent = card.title;
  titleElement.style.fontSize = '20px';
  titleElement.style.marginBottom = '10px';

  // Create description element
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = card.description;
  descriptionElement.style.fontSize = '14px';
  descriptionElement.style.color = '#777';

  // Append elements to card
  cardElement.appendChild(iconElement);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(descriptionElement);

  // Append card to container
  itemcontainer.appendChild(cardElement);
}

// Loop through each card and create it
cards.forEach(createCard);

// Create the play button elements

nav1.appendChild(logoImg);
nav2.appendChild(home);
nav3.appendChild(dest);
nav4.appendChild(gallery);
nav5.appendChild(aboutus);
nav6.appendChild(signup);
nav7.appendChild(login);

nav.appendChild(nav1);
nav.appendChild(nav2);
nav.appendChild(nav3);
nav.appendChild(nav4);
nav.appendChild(nav5);
nav.appendChild(nav6);
nav.appendChild(nav7);

img.setAttribute('src', 'imagess/75a890f715deaabc44a6f318b4ffceec.jpg');

address.appendChild(addresstext);
paragraph.appendChild(paragtext);
element1.appendChild(element1t);

// Set up the play button structure
element3.appendChild(element3t);

document.body.append(
  nav,
  img,
  address,
  paragraph,
  elementsec,
  thirdsec,
  formcontainer,
  choice,
  itemcontainer,
  
);
choice.appendChild(choicetext);
elementsec.append(element1, element2, element3);
thirdsec.appendChild(thirdtext);
formcontainer.append(loc, where, date, discover);

nav.classList.add('nav');
elementsec.classList.add('elementsec');
element2.classList.add('play-button');
thirdsec.classList.add('thirdsec');
choice.classList.add('choice');
paragraph.classList.add('pa');
nav2.addEventListener('click', function (event) {
  event.preventDefault();
displayHomePage(); // Trigger the sign-in form
});

// Carousel Implementation
const carouselImages = [
  { src: 'imagess/sharmsea.png', title: 'Sharm El Sheikh', price: '$250/person' },
  { src: 'imagess/pyramid.png', title: 'Pyramid Giza', price: '$350/person' },
  { src: 'imagess/temple.png', title: 'Temple Of Kom Ombo', price: '$150/person' },
  { src: 'imagess/pyramid.png', title: 'Pyramid Giza', price: '$350/person' },
  { src: 'imagess/museum.jpeg', title: 'Egyptian Museum', price: '$250/person' },
  { src: 'imagess/temple.png', title: 'Temple Of Kom Ombo', price: '$150/person' },
  { src: 'imagess/sharmsea.png', title: 'Sharm El Sheikh', price: '$250/person' },
  { src: 'imagess/pyramid.png', title: 'Pyramid Giza', price: '$350/person' },
];

// Create carousel container
const carouselContainer = document.createElement('div');
carouselContainer.style.overflow = 'hidden';
carouselContainer.style.position = 'relative';
carouselContainer.style.width = '100%';
carouselContainer.style.maxWidth = '1000px';
carouselContainer.style.margin = 'auto';
document.body.appendChild(carouselContainer);

// Create carousel inner container for sliding effect
const carouselInner = document.createElement('div');
carouselInner.style.display = 'flex';
carouselInner.style.transition = 'transform 0.5s ease';
carouselContainer.appendChild(carouselInner);

// Create image elements
carouselImages.forEach((image) => {
  const imgContainer = document.createElement('div');
  imgContainer.style.minWidth = '300px';
  imgContainer.style.margin = '10px';

  const imgElement = document.createElement('img');
  imgElement.src = image.src;
  imgElement.alt = image.title;
  imgElement.style.width = '100%';
  imgElement.style.height = '100%';
  imgElement.style.borderRadius = '10px';
  imgElement.style.cursor = 'pointer';

  // Check the title to trigger the correct function
  imgElement.addEventListener('click', function() {
      if (image.title === 'Temple Of Kom Ombo') {
          displayTemplePage(); // Function to display the temple page
      }
  });
  imgElement.addEventListener('click', function() {
    if (image.title === 'Pyramid Giza') {
        displaypyramidPage(); // Function to display the temple page
    }
});
imgElement.addEventListener('click', function() {
  if (image.title === 'Sharm El Sheikh') {
    displaysharmPage();// Function to display the temple page
  }
});

  const title = document.createElement('p');
  title.textContent = image.title;
  title.style.fontWeight = 'bold';
  title.style.textAlign = 'center';

  const price = document.createElement('p');
  price.textContent = image.price;
  price.style.textAlign = 'center';

  imgContainer.appendChild(imgElement);
  imgContainer.appendChild(title);
  imgContainer.appendChild(price);

  carouselInner.appendChild(imgContainer);
});

// Navigation buttons
const prevButton = document.createElement('button');
prevButton.textContent = '◀';
prevButton.style.position = 'absolute';
prevButton.style.top = '13%';
prevButton.style.left = '950px';
prevButton.style.transform = 'translateY(-50%)';
prevButton.style.zIndex = '1';
prevButton.style.backgroundColor = 'white';
prevButton.style.color = 'red';
prevButton.style.border = 'none';


prevButton.style.cursor = 'pointer';
carouselContainer.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.textContent = '▶';
nextButton.style.position = 'absolute';
nextButton.style.top = '13%';
nextButton.style.right = '0px';
nextButton.style.transform = 'translateY(-50%)';
nextButton.style.zIndex = '1';
nextButton.style.backgroundColor = 'white';
nextButton.style.color = 'blue';
nextButton.style.border = 'none';


nextButton.style.cursor = 'pointer';
carouselContainer.appendChild(nextButton);

// View All button
const viewAllButton = document.createElement('button');
viewAllButton.textContent = 'View All';
viewAllButton.style.display = 'block';
viewAllButton.style.margin = '85px auto';
viewAllButton.style.padding = '10px 20px';
viewAllButton.style.border = 'none';
viewAllButton.style.backgroundColor = '#A77ED4';
viewAllButton.style.color = 'white';
viewAllButton.style.borderRadius = '10px';
viewAllButton.style.cursor = 'pointer';
carouselContainer.appendChild(viewAllButton);

// Back button (Initially hidden)
const backButton = document.createElement('button');
backButton.textContent = 'Back to default mode';
backButton.style.display = 'none';
backButton.style.margin = '20px auto';
backButton.style.padding = '10px 20px';
backButton.style.border = 'none';
backButton.style.backgroundColor = '#A77ED4';
backButton.style.color = 'white';
backButton.style.borderRadius = '10px';
backButton.style.cursor = 'pointer';
carouselContainer.appendChild(backButton);

// Function to handle sliding effect
let currentIndex = 0;
const imageCount = carouselImages.length;
const visibleImages = 3; // Number of images to show at a time

function showSlide(index) {
    const offset = -(index * 100) / visibleImages;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % (imageCount - visibleImages + 1);
    showSlide(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + (imageCount - visibleImages + 1)) % (imageCount - visibleImages + 1);
    showSlide(currentIndex);
}

// Event listeners for buttons
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Initialize first image display
showSlide(currentIndex);

// Event listener for View All button
viewAllButton.addEventListener('click', () => {
  carouselInner.style.flexWrap = 'wrap';
  carouselInner.style.display = 'flex';
  carouselInner.style.justifyContent = 'center';
  carouselInner.style.transform = 'none';
  carouselInner.style.transition = 'none';
  header.style.display = 'none';
  // Add spacing between items in view all mode
  const items = carouselInner.querySelectorAll('div');
  items.forEach(item => {
      item.style.marginBottom = '40px'; // Adjust this value as needed for spacing
      item.style.marginRight = '2px';  // Optional: Adds horizontal spacing between items
  });

  const images = carouselInner.querySelectorAll('img');
  images.forEach(img => {
    img.style.width='600px';
      img.style.marginBottom = '2px'; // Adds space between the image and the text
  });

  prevButton.style.display = 'none';
  nextButton.style.display = 'none';
  viewAllButton.style.display = 'none';
  backButton.style.display = 'block';
});


// Event listener for Back button
backButton.addEventListener('click', () => {
    carouselInner.style.flexWrap = 'nowrap';
    carouselInner.style.display = 'flex';
    carouselInner.style.justifyContent = 'flex-start';
    carouselInner.style.transition = 'transform 0.5s ease';

    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
    viewAllButton.style.display = 'block';
    backButton.style.display = 'none';
    header.style.display = 'block';
    const images = carouselInner.querySelectorAll('img');
  images.forEach(img => {
    img.style.width='100%';
    // Adds space between the image and the text
  });

    // Reset to first slide
    showSlide(currentIndex = 0);
});

// Inject styles dynamically
function styleInject(cssText) {
    const head = document.head;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(cssText));
    head.appendChild(style);
}

styleInject(`
    * {
      margin: 0;
      padding: 0;
    }
    
  nav {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around; /* Keeps the spacing around the links */
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: purple;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for depth */
    padding: 0 20px; /* Adds horizontal padding for better spacing */
}

nav a {
    color: purple; /* Maintains the purple text color */
    text-decoration: none; /* Removes underlines */
    padding: 10px 20px; /* Adds padding around the text for better spacing */
    transition: color 0.3s ease, background-color 0.3s ease, border-radius 0.3s ease;
}

nav a:hover {
    color: #fff; /* Changes text color to white on hover */
    background-color: purple; /* Purple background on hover */
    border-radius: 5px; /* Rounds the corners slightly on hover */
}

nav .active {
    color: #fff; /* White color for the active link */
    background-color: purple; /* Purple background for the active link */
    font-weight: bold;
    border-radius: 5px; /* Rounds the corners of the active link */
}

nav img {
    height: 50px; /* Adjust the logo size */
    margin-right: 15px;
}

    nav > div:nth-child(1){
      background-image: url('imagess/logo.jpg');
    }
    nav > div:nth-child(2) {
      padding-left: 150px;
    }
    
    nav > div:nth-child(6) {
      padding-left: 100px;
    }

    img {
      width: 1499px;
      height: 653px;
    }

    h1 {
      text-align: center;
      position: absolute; /* Absolute positioning */
      top: 25%;           /* Center vertically */
      left: 45%;        /* Absolute positioning */
      transform: translate(-50%, -50%);
      color: white;
      font-family: 'Poppins', sans-serif;
      font-size: 40px;
      font-style: italic;
    }

    .pa {
      text-align: center;
      margin-top: 20px;
      font-size: 24px;
      font-family: 'Poppins', sans-serif;
      color: white;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
      width: 60%;  /* Width relative to the page or container */
      margin: 20px auto 0;  /* Center the paragraph with margin auto */
      border-radius: 10px; /* Optional: Rounded corners */
      position: absolute;
      top: 35%;  /* Position it below the h1 */
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .elementsec {
      display: flex;
      align-items: center;
      justify-content: space-around;
      justify-content: center;
      position: relative;
      margin-top: -375px;
    }

    .elementsec div:first-child {
      background-color: rgba(0, 0, 0, 0.5); /* Example: change background color */
      color: white;
      padding: 20px;
      border-radius: 8px;
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      margin-right: 50px;
    }

    .play-button {
  background-image: url('imagess/play.jpeg');

      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 62px; /* Size of the play button */
      height: 59px;
      border-radius: 65%; /* Make it a circle */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .elementsec div:nth-child(3) {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      color: white;
      border-radius: 16px;
      background-color: rgba(0, 0, 0, 0.5);
      margin-left: 10px;
      padding: 10px;
      border: 2px solid white; /* Add a white border */
    }

    .thirdsec {
      font-size: 30px;
      font-style: italic;
      color: white;
      text-align: center;
      padding: 30px;
      animation: pulse 2s infinite;
    }

    /* Define the keyframes for the pulse animation */
    @keyframes pulse {
      0% {
        transform: scale(1); /* Start at normal size */
      }
      50% {
        transform: scale(1.1); /* Grow slightly */
      }
      100% {
        transform: scale(1); /* Return to normal size */
      }
    }

    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }

    input {
      padding: 15px 20px;
      
    }

    button {
      padding: 1  .5px 20px;
      font-size: 15px;
      font-family: 'Poppins', sans-serif;
      color: white;
      background-color: blue;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: red;
    }

    .choice {
      font-family: 'poppins';
      margin-top: 180px;
      font-size: 42px;
      margin-left: 540px;
      padding-bottom: 50px;
    }
  .whatdo {
color:black;
font-size:30px;
font-weight:bold;

    
    text-align: center;
    margin-top: 50px;
}
  `  
);


// Insert the header before the carouselInner (photos)
const header = document.createElement('h2');
header.textContent = 'Recommended Destination For You';
header.style.textAlign = 'center';
header.style.fontFamily = "'Poppins', sans-serif";
header.style.fontSize = '28px';
header.style.marginTop = '70px ';
carouselContainer.insertBefore(header, carouselInner);
document.body.appendChild(whatdo);
whatdo.classList.add('whatdo');



// Create a container for the second set of cards that will be sliding
// Set the number of visible cards
// Set the number of visible cards
/// Constants for the cards
const visibleCards2 = 3; // Number of cards to show initially
const cardWidth2 = 200;
const cardHeight2 = 300;  
const cardMargin2 = 7;  // Margin around each card

// Create a container for the cards
const itemcontainerof = document.createElement('div');
itemcontainerof.style.display = 'flex';
itemcontainerof.style.flexWrap = 'wrap';
itemcontainerof.style.justifyContent = 'center';
itemcontainerof.style.margin = 'auto';
const cardWrapper2 = document.createElement('div'); // Wrapper for all cards
cardWrapper2.style.display = 'flex';
cardWrapper2.style.flexWrap = 'wrap';
cardWrapper2.style.justifyContent = 'flex-start';
itemcontainerof.style.marginLeft = '200px';
itemcontainerof.style.marginTop = '30px';
itemcontainerof.appendChild(cardWrapper2);

// Data for the cards
const cardsof = [{
  name: 'Alexander R',
  imae: 'imagess/person1.png', // replace with actual icon path
  country: 'belgium',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis a mauris.',
},
{
  name: 'Olivia',
  imae: 'imagess/WOMENNNNN.jpeg', // replace with actual icon path
  country: 'portugal',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis a mauris.',
},
{
  name: 'stephen',
  imae: 'imagess/ANOTHERMAN.jpeg', // replace with actual icon path
  country: 'argentina',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis a mauris.',
},
  {
    name: 'mark',
    imae: 'imagess/manwi.jpeg', // replace with actual icon path
    country: 'england',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis a mauris.',
  },
  {
    name: 'Ronaldo',
    imae: 'imagess/ronaldo.jpeg', // replace with actual icon path
    country: 'portugal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis a mauris.',
  },
  {
    name: 'Messi',
    imae: 'imagess/MESSI.jpeg', // replace with actual icon path
    country: 'argentina',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis a mauris.',
  }
  
  
];

// Function to create each card for the carousel
function createCardsof(x, index) {
  // Create card container
  const cardElement = document.createElement('div');
  cardElement.style.width = `${cardWidth2}px`;
   cardElement.style.height='200px'
  cardElement.style.padding = '20px';
  cardElement.style.margin = `${cardMargin2}px`; // Set card margin
  cardElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  cardElement.style.backgroundColor = '#fdeae6'; // Background color similar to the one in the image
  cardElement.style.borderRadius = '10px';
  cardElement.style.display = 'inline-block';
  cardElement.style.verticalAlign = 'top';
  cardElement.style.border = '1px solid #d3d3d3'; // Light border color
  cardElement.style.textAlign = 'left';


  // Hide the cards that should not be visible initially
  if (index >= visibleCards2) {
    cardElement.style.display = 'none';
  }

  // Create and set the card image
  const cardImage = document.createElement('img');
  cardImage.src = x.imae;
  cardImage.alt = x.name;
  cardImage.style.width = '50px';
  cardImage.style.height = '50px';
  cardImage.style.borderRadius = '50%'; // Make the image circular
  cardImage.style.float = 'left'; // Align image to the left
  cardImage.style.marginRight = '15px'; // Spacing between image and text
  cardElement.appendChild(cardImage);

  // Create a div to hold text content
  const textContent = document.createElement('div');
  
  // Create and set the card name
  const cardname = document.createElement('h3');
  cardname.textContent = x.name;
  cardname.style.margin = '0';
  cardname.style.fontSize = '18px';
  cardname.style.fontWeight = 'bold';
  cardname.style.color = '#333';
  textContent.appendChild(cardname);

  // Create and set the card country
  const cardCountry = document.createElement('p');
  cardCountry.textContent = x.country;
  cardCountry.style.margin = '0';
  cardCountry.style.fontSize = '14px';
  cardCountry.style.color = '#777';
  textContent.appendChild(cardCountry);

  // Create and set the card description
  const cardDescription = document.createElement('p');
  cardDescription.textContent = x.description;
  cardDescription.style.marginTop = '10px';
  cardDescription.style.fontSize = '14px';
  cardDescription.style.color = '#666';
  textContent.appendChild(cardDescription);

  // Append text content to the card element
  cardElement.appendChild(textContent);

  // Append the card to the wrapper container
  cardWrapper2.appendChild(cardElement);
}


// Generate and append each card
cardsof.forEach((card, index) => createCardsof(card, index));

// Add View All button
const viewAllButton2 = document.createElement('button');
viewAllButton2.textContent = 'View All';
viewAllButton2.style.display = 'block';
viewAllButton2.style.margin = '120px  250px 140px 10px';
viewAllButton2.style.padding = '10px 20px';
viewAllButton2.style.backgroundColor = '#00237E';
viewAllButton2.style.color = 'white';
viewAllButton2.style.border = 'none';
viewAllButton2.style.borderRadius = '5px';
viewAllButton2.style.cursor = 'pointer';

// Add View Less button
const viewLessButton2 = document.createElement('button');
viewLessButton2.textContent = 'View Less';
viewLessButton2.style.display = 'none'; // Initially hidden
viewLessButton2.style.margin = '20px auto';
viewLessButton2.style.padding = '10px 20px';
viewLessButton2.style.backgroundColor = '#00237E';
viewLessButton2.style.color = 'white';
viewLessButton2.style.border = 'none';
viewLessButton2.style.borderRadius = '5px';
viewLessButton2.style.cursor = 'pointer';

viewAllButton2.addEventListener('click', () => {
    const cards = cardWrapper2.children;
    for (let i = visibleCards2; i < cards.length; i++) {
        cards[i].style.display = 'inline-block';
    }
    viewAllButton2.style.display = 'none';
    viewLessButton2.style.display = 'block'; // Show View Less button
});

viewLessButton2.addEventListener('click', () => {
    const cards = cardWrapper2.children;
    for (let i = visibleCards2; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    viewLessButton2.style.display = 'none';
    viewAllButton2.style.display = 'block'; // Show View All button again
});

itemcontainerof.appendChild(viewAllButton2);
itemcontainerof.appendChild(viewLessButton2);

// Add the container to the body or a specific section of the page
document.body.appendChild(itemcontainerof);


// Append the container to the body
document.body.appendChild(itemcontainerof);
// Create the subscribe section
const subscribeSection = document.createElement('div');
subscribeSection.style.backgroundImage = "url('imagess/writeemail.png')"; // Replace with your image path
subscribeSection.style.backgroundSize = 'cover';
subscribeSection.style.backgroundPosition = 'center';
subscribeSection.style.padding = '50px';
subscribeSection.style.borderRadius = '20px';
subscribeSection.style.textAlign = 'center';
subscribeSection.style.color = 'white';
subscribeSection.style.fontFamily = "'Poppins', sans-serif";
subscribeSection.style.position = 'relative';
subscribeSection.style.marginTop = '50PX';
subscribeSection.style.marginRight = '50PX';
subscribeSection.style.marginLeft = '50PX';
// Create and style the heading
const heading = document.createElement('h2');
heading.textContent = 'Get Interesting Information For You About Traveling In Egypt';
heading.style.fontSize = '30px';
heading.style.marginBottom = '20px';
heading.style.fontWeight = '500';
subscribeSection.appendChild(heading);

// Create the email form container
const emailForm = document.createElement('div');
emailForm.style.display = 'flex';
emailForm.style.justifyContent = 'center';
emailForm.style.alignItems = 'center';
emailForm.style.marginTop = '20px';

// Create the email input field
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Enter Your Email Address';
emailInput.style.padding = '15px 20px';
emailInput.style.border = 'none';
emailInput.style.borderRadius = '30px 0 0 30px';
emailInput.style.outline = 'none';
emailInput.style.width = '300px';
emailInput.style.maxWidth = '100%';
emailInput.style.fontSize = '16px';
emailInput.style.fontFamily = "'Poppins', sans-serif";
emailInput.style.color = '#333';
emailInput.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
emailForm.appendChild(emailInput);

// Create the submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'Submit Email Address';
submitButton.style.padding = '15px 30px';
submitButton.style.border = 'none';
submitButton.style.backgroundColor = '#5a2774';
submitButton.style.color = 'white';
submitButton.style.borderRadius = '0 30px 30px 0';
submitButton.style.cursor = 'pointer';
submitButton.style.fontSize = '16px';
submitButton.style.fontFamily = "'Poppins', sans-serif";
submitButton.style.transition = 'background-color 0.3s ease';
submitButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = '#34174d';
});
submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '#5a2774';
});
emailForm.appendChild(submitButton);

// Append the email form to the subscribe section
subscribeSection.appendChild(emailForm);

// Append the subscribe section to the body
document.body.appendChild(subscribeSection);

  // Create the footer container
  const footerContainer = document.createElement('div');
  footerContainer.style.backgroundColor = '#00237E';
  footerContainer.style.color = 'white';
  footerContainer.style.padding = '15px 0';
  footerContainer.style.display = 'flex';
  footerContainer.style.justifyContent = 'space-around';
  footerContainer.style.flexWrap = 'wrap';
  footerContainer.style.marginTop = '20px';
  // Create the logo section
  const logoSection = document.createElement('div');
  logoSection.style.flex = '1';
  logoSection.style.minWidth = '150px';

  // Add logo (could be an image or a simple div like in the image)
  const logoo = document.createElement('div');
  logoo.style.width = '50px';
  logoo.style.height = '50px';
  logoo.style.borderRadius = '50%';
  logoo.style.backgroundColor = 'white';
  logoo.style.marginBottom = '20px';
  logoSection.appendChild(logoo);

  // Add some text under the logo
  const logoText = document.createElement('p');
  logoText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem erat purus commodo mollis viverra vitae fusce. ';
  logoText.style.maxWidth = '200px';
  logoText.style.lineHeight = '1.5';
  logoSection.appendChild(logoText);

  // Create the company section
  const companySection = document.createElement('div');
  companySection.style.flex = '1';
  companySection.style.minWidth = '150px';

  const companyTitle = document.createElement('h3');
  companyTitle.textContent = 'Company';
  companyTitle.style.marginBottom = '20px';
  companySection.appendChild(companyTitle);

  // Links for the company section
  const companyLinks = [
      { text: 'About US', url: '#about-us' },
      { text: 'Contact US', url: '#contact-us' },
      { text: 'Help me', url: '#help' }
  ];
  companyLinks.forEach(link => {
      const anchor = document.createElement('a');
      anchor.textContent = link.text;
      anchor.href = link.url;
      anchor.style.display = 'block';
      anchor.style.marginBottom = '10px';
      anchor.style.color = 'white';
      anchor.style.textDecoration = 'none';
      companySection.appendChild(anchor);
  });
  

  const linksSection = document.createElement('div');
  linksSection.style.flex = '1';
  linksSection.style.minWidth = '150px';
  
  const linksTitle = document.createElement('h3');
  linksTitle.textContent = 'Links';
  linksTitle.style.marginBottom = '20px';
  linksSection.appendChild(linksTitle);
  
  // Links for the links section
  const links = [
      { text: 'Destination', url: '#destination', action :displayDestinationsOverview },
      { text: 'Gallery', url: '#gallery', action: displayGallery },
      { text: 'About US', url: '#about-us', action: aboutu}
  ];
  
  links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.textContent = link.text;
      anchor.href = link.url;
      anchor.style.display = 'block';
      anchor.style.marginBottom = '10px';
      anchor.style.color = 'white';
      anchor.style.textDecoration = 'none';
  
      // Add event listener for each link
      anchor.addEventListener('click', event => {
          event.preventDefault();
        
          link.action(); // Call the associated action function
      });
  
      linksSection.appendChild(anchor);
  });
  function removeActiveClass() {
    anchorElements.forEach(anchor => anchor.classList.remove('active'));
}

  // Create the social media section
  const socialSection = document.createElement('div');
  socialSection.style.flex = '1';
  socialSection.style.minWidth = '150px';

  const socialTitle = document.createElement('h3');
  socialTitle.textContent = 'Follow Me:';
  socialTitle.style.marginBottom = '20px';
  socialSection.appendChild(socialTitle);

  const socialLinks = ['Youtube', 'Facebook', 'LinkedIn', 'Instagram'];
  socialLinks.forEach(socialText => {
      const socialLink = document.createElement('p');
      socialLink.textContent = socialText;
      socialLink.style.cursor = 'pointer';
      socialLink.style.marginBottom = '10px';
      socialSection.appendChild(socialLink);
  });

  // Append all sections to the footer container
  footerContainer.appendChild(logoSection);
  footerContainer.appendChild(companySection);
  footerContainer.appendChild(linksSection);
  footerContainer.appendChild(socialSection);

  // Append the footer container to the body or wherever you want it to be
  document.body.appendChild(footerContainer);


  function displaySignUpForm() {
    // Clear the current content of the body
    
    document.body.innerHTML = '';
    document.body.append(nav);

    const signUpFormContainer = document.createElement('div');
    signUpFormContainer.style.width = '400px';
    signUpFormContainer.style.margin = '50px auto';
    signUpFormContainer.style.padding = '40px 30px';
    signUpFormContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    signUpFormContainer.style.borderRadius = '10px';
    signUpFormContainer.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
    signUpFormContainer.style.textAlign = 'center';

    // Create and add the form heading for sign-up
    const signUpHeading = document.createElement('h2');
    signUpHeading.textContent = 'Create Your Account';
    signUpHeading.style.marginBottom = '30px';
    signUpHeading.style.fontSize = '28px';
    signUpHeading.style.color = 'purple'; // Dark blue color
    signUpFormContainer.appendChild(signUpHeading);

    // Shared styles for all input fields
    const inputStyles = `
        width: 100%;
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-size: 16px;`
    ;

    // Create and add the username input for sign-up
    const signUpUsernameInput = document.createElement('input');
    signUpUsernameInput.type = 'text';
    signUpUsernameInput.placeholder = 'Username';
    signUpUsernameInput.style.cssText = inputStyles;
    signUpFormContainer.appendChild(signUpUsernameInput);

    // Create and add the email input for sign-up
    const signUpEmailInput = document.createElement('input');
    signUpEmailInput.type = 'email';
    signUpEmailInput.placeholder = 'Email';
    signUpEmailInput.style.cssText = inputStyles;
    signUpFormContainer.appendChild(signUpEmailInput);

    // Create and add the phone number input for sign-up
    const signUpPhoneNumberInput = document.createElement('input');
    signUpPhoneNumberInput.type = 'text';
    signUpPhoneNumberInput.placeholder = 'Phone Number';
    signUpPhoneNumberInput.style.cssText = inputStyles;
    signUpFormContainer.appendChild(signUpPhoneNumberInput);

    // Create and add the country input for sign-up
    const signUpCountryInput = document.createElement('input');
    signUpCountryInput.type = 'text';
    signUpCountryInput.placeholder = 'Country';
    signUpCountryInput.style.cssText = inputStyles;
    signUpFormContainer.appendChild(signUpCountryInput);

    // Create and add the password input for sign-up
    const signUpPasswordInput = document.createElement('input');
    signUpPasswordInput.type = 'password';
    signUpPasswordInput.placeholder = 'Password';
    signUpPasswordInput.style.cssText = inputStyles;
    signUpFormContainer.appendChild(signUpPasswordInput);

    // Create and add the sign-up button
    const signUpButton = document.createElement('button');
    signUpButton.textContent = 'Sign Up';
    signUpButton.style.width = '100%';
    signUpButton.style.padding = '15px';
    signUpButton.style.border = 'none';
    signUpButton.style.borderRadius = '5px';
    signUpButton.style.backgroundColor = 'purple'; // Dark blue color
    signUpButton.style.color = 'white';
    signUpButton.style.fontSize = '16px';
    signUpButton.style.cursor = 'pointer';
    signUpButton.addEventListener('click', function (event) {
        event.preventDefault();
        displaySignInForm(); // Trigger the sign-in form
    });
    signUpFormContainer.appendChild(signUpButton);

    // Create and add the "Already have an account? Log in" link within the sign-up form
    const alreadyAccountContainer = document.createElement('p');
    alreadyAccountContainer.style.marginTop = '20px';
    alreadyAccountContainer.textContent = "Already have an account? ";

    const signInLink = document.createElement('a');
    signInLink.textContent = 'Login';
    signInLink.href = '#';
    signInLink.style.color = '#00008B';
    signInLink.style.cursor = 'pointer';
    signInLink.style.textDecoration = 'none';
    signInLink.style.fontWeight = 'bold';

    signInLink.addEventListener('click', function (event) {
        event.preventDefault();
        displaySignInForm(); // Trigger the sign-in form
    });

    alreadyAccountContainer.appendChild(signInLink);
    signUpFormContainer.appendChild(alreadyAccountContainer);

    // Set the background image for the entire page
  

    // Append the sign-up form container to the body
    document.body.appendChild(signUpFormContainer);
}


// Function to display the sign-in form
function displaySignInForm() {
  
    // Clear the current content of the body
    document.body.innerHTML = '';
    
   document.body.appendChild(nav);
    // Create the main container
    const formContainer = document.createElement('div');
    formContainer.style.width = '1500px';
    formContainer.style.height = '600px';
    formContainer.style.margin = '0px 0px';
    formContainer.style.padding = '40px 30px';
    formContainer.style.backgroundColor = 'rgba(0, 0, 4, 0.7)';
    formContainer.style.borderRadius = '10px';
    formContainer.style.color = 'white';
    formContainer.style.position = 'relative';
    formContainer.style.textAlign = 'center';
    formContainer.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    formContainer.style.background = `
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
    url('imagess/tomb.png')`;
    formContainer.style.backgroundSize = 'cover';
    formContainer.style.backgroundPosition = 'center';
    formContainer.style.backgroundRepeat = 'no-repeat';
    formContainer.style.maxWidth = '10000px'; // Adjust width to cover more area
    formContainer.style.display = 'flex';
    formContainer.style.flexDirection = 'column';
    formContainer.style.alignItems = 'center';
    // Create and add the logo
    

    // Create and add the form heading
    const heading = document.createElement('h2');
    heading.textContent = 'Sign In Your Account';
    heading.style.marginBottom = '30px';
    heading.style.fontSize = '28px';
    formContainer.appendChild(heading);

    // Create and add the email input
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email Address';
    emailLabel.style.display = 'block';
    emailLabel.style.textAlign = 'left';
    emailLabel.style.marginBottom = '10px';
    emailLabel.style.marginLeft = '-450px';
  
    formContainer.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'name@example.com';
    emailInput.style.width = '550px';
    
    emailInput.style.padding = '15px';
    emailInput.style.marginBottom = '20px';
    
    emailInput.style.borderRadius = '5px';
    emailInput.style.border = '1px solid #ccc';
    emailInput.style.boxSizing = 'border-box';
    formContainer.appendChild(emailInput);

    // Create and add the password input
    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password';
    passwordLabel.style.display = 'block';
    passwordLabel.style.textAlign = 'left';
    passwordLabel.style.marginBottom = '10px';
    passwordLabel.style.marginLeft = '-470px';
    formContainer.appendChild(passwordLabel);

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = '*******';
    passwordInput.style.width = '550px';
    passwordInput.style.padding = '15px';
    passwordInput.style.marginBottom = '20px';
    passwordInput.style.marginRight = '5px';
    passwordInput.style.borderRadius = '5px';
    passwordInput.style.border = '1px solid #ccc';
    passwordInput.style.boxSizing = 'border-box';
    formContainer.appendChild(passwordInput);

    // Create and add the sign-in button
    const signInButton = document.createElement('button');
    signInButton.textContent = 'Login';
    signInButton.style.width = '250px';
    signInButton.style.padding = '15px';
    signInButton.style.border = 'none';
    signInButton.style.borderRadius = '5px';
    signInButton.style.backgroundColor = '#00008B'; // Dark blue color
    signInButton.style.color = 'white';
    signInButton.style.cursor = 'pointer';
    signInButton.style.marginTop = '20px';
    signInButton.style.display = 'block';
    formContainer.appendChild(signInButton);

    // Create and add the "Sign Up" link within the sign-in form
    const signUpLink = document.createElement('a');
    signUpLink.textContent = 'Sign Up';
    signUpLink.href = '#';
    signUpLink.style.color = '#00008B';
    signUpLink.style.marginTop = '10px';
    signUpLink.style.display = 'inline-block';
    signUpLink.style.cursor = 'pointer';

    signUpLink.addEventListener('click', function(event) {
        event.preventDefault();
        displaySignUpForm(); // Trigger the sign-up form
    });

    const signUpContainer = document.createElement('p');
    signUpContainer.textContent = "Don't have an account yet? ";
    signUpContainer.appendChild(signUpLink);
    formContainer.appendChild(signUpContainer);

    // Append the form container to the body
    document.body.appendChild(formContainer);
}
function displayHomePage() {
  window.scrollTo(0, 0);
  // Clear the current content of the body
  document.body.innerHTML = '';

  // Append the navigation bar
  document.body.appendChild(nav);

  // Rebuild the entire home page content
  document.body.append(
    nav,
    img,
    address,
    paragraph,
    elementsec,
    thirdsec,
    formcontainer,
    choice,
    itemcontainer,
    carouselContainer,
   whatdo,
    itemcontainerof,
    subscribeSection,
    footerContainer
  );

  header.textContent = 'Recommended Destination For You';
header.style.textAlign = 'center';
header.style.fontFamily = "'Poppins', sans-serif";
header.style.fontSize = '28px';
header.style.marginTop = '70px ';
}
function displayGallery() {
  // Clear the current content of the body
  document.body.innerHTML = '';

  // Append the navigation bar to the body
  document.body.appendChild(nav);

  // Create the gallery content container with the background image
  let galleryupcontent = document.createElement('div');
  galleryupcontent.style.backgroundImage = "url('imagess/gallery.png')";
  galleryupcontent.style.height = '100vh'; // Full viewport height
  galleryupcontent.style.backgroundSize = 'cover'; // Ensure the image covers the entire div
  galleryupcontent.style.backgroundPosition = 'center';
  galleryupcontent.style.display = 'flex';
  galleryupcontent.style.flexDirection = 'column';
  galleryupcontent.style.alignItems = 'center';
  galleryupcontent.style.justifyContent = 'center';

  // Create and style the heading text
  let gallerytexting = document.createElement('div');
  gallerytexting.textContent = 'Gallery';
  gallerytexting.style.fontFamily = 'Poppins, sans-serif';
  gallerytexting.style.fontSize = '48px';
  gallerytexting.style.fontStyle = 'italic';
  gallerytexting.style.color = 'white';
  gallerytexting.style.textAlign = 'center';
  gallerytexting.style.marginBottom = '20px'; // Space between heading and paragraph

  // Create and style the paragraph text
  let gallerypar = document.createElement('p');
  gallerypar.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint obcaecati iste maxime laudantium, similique eligendi rem eaque reiciendis sequi vero.';
  gallerypar.style.fontFamily = 'Poppins, sans-serif';
  gallerypar.style.fontSize = '20px';
  gallerypar.style.color = 'white';
  gallerypar.style.textAlign = 'center';
  gallerypar.style.maxWidth = '60%'; // Restrict the width of the paragraph
  gallerypar.style.lineHeight = '1.5'; // Improve readability

  // Append the heading and paragraph to the gallery content
  galleryupcontent.appendChild(gallerytexting);
  galleryupcontent.appendChild(gallerypar);

  // Create a separate container for the grid and buttons
  let gridAndButtonsContainer = document.createElement('div');
  gridAndButtonsContainer.style.padding = '20px';
  gridAndButtonsContainer.style.backgroundColor = 'white'; // Or any other color you prefer
  gridAndButtonsContainer.style.marginTop = '30px'; // Space between background section and grid

  // Create and style the gallery grid
  let galleryGrid = document.createElement('div');
  galleryGrid.style.display = 'grid';
  galleryGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
  galleryGrid.style.gridGap = '10px';
  galleryGrid.style.maxWidth = '800px';
  galleryGrid.style.margin = '0 auto';

  // Array of image sources (replace with actual paths)
  const images = [
      'imagess/first.png', 'imagess/second.png', 'imagess/third.png',
      'imagess/fourth.png', 'imagess/fifth.png', 'imagess/six.png',
      'imagess/seventh.png', 'imagess/eight.png', 'imagess/9th.png',
      'imagess/first.png', 'imagess/third.png', 'imagess/second.png',
      'imagess/fourth.png', 'imagess/seventh.png', 'imagess/six.png'
  ];

  // Initial number of images to show in collapsed mode
  let initialImageCount = 6;

  // Create and append each image to the grid
  images.forEach((src, index) => {
      let imgContainer = document.createElement('div');
      let imgElement = document.createElement('img');
      imgElement.src = src;
      imgElement.style.width = '100%';
      imgElement.style.height = 'auto';
      imgElement.style.borderRadius = '8px';

      
      

      imgContainer.appendChild(imgElement);
      galleryGrid.appendChild(imgContainer);
  });

  // Show only the initial set of images
  function collapseGallery() {
    const allImages = galleryGrid.children;
    for (let i = 0; i < allImages.length; i++) {
      if (i < initialImageCount) {
        allImages[i].style.display = 'block';
      } else {
        allImages[i].style.display = 'none';
      }
    }
  }

  // Show all images
  function expandGallery() {
    const allImages = galleryGrid.children;
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].style.display = 'block';
    }
  }

  // Initially collapse the gallery
  collapseGallery();

  // Append the gallery grid to the new container
  gridAndButtonsContainer.appendChild(galleryGrid);

  // Create and style the "View All" button
  let viewAllButton = document.createElement('button');
  viewAllButton.textContent = 'View All';
  viewAllButton.style.marginLeft = '600px';
  viewAllButton.style.marginTop = '30px';
  viewAllButton.style.padding = '10px 20px';
  viewAllButton.style.border = 'none';
  viewAllButton.style.backgroundColor = 'blue';
  viewAllButton.style.color = 'white';
  viewAllButton.style.borderRadius = '10px';
  viewAllButton.style.cursor = 'pointer';

  // Create and style the "Back to Default Mode" button (initially hidden)
  let backButton = document.createElement('button');
  backButton.textContent = 'Back to Default Mode';
  backButton.style.marginLeft = '560px';
  backButton.style.padding = '10px 20px';
  backButton.style.border = 'none';
  backButton.style.backgroundColor = 'blue';
  backButton.style.color = 'white';
  backButton.style.borderRadius = '10px';
  backButton.style.cursor = 'pointer';
  backButton.style.display = 'none';

  // Append the buttons to the new container
  gridAndButtonsContainer.appendChild(viewAllButton);
  gridAndButtonsContainer.appendChild(backButton);

  // Function to handle "View All" mode
  viewAllButton.addEventListener('click', function() {
    expandGallery();
    viewAllButton.style.display = 'none';
    backButton.style.display = 'block';
  });

  // Function to handle "Back to Default Mode"
  backButton.addEventListener('click', function() {
    collapseGallery();
    viewAllButton.style.display = 'block';
    backButton.style.display = 'none';
  });

  // Append the galleryupcontent to the body (background section)
  document.body.appendChild(galleryupcontent);

  // Append the grid and buttons container to the body
  document.body.appendChild(gridAndButtonsContainer);
  document.body.appendChild(footerContainer);
}
function aboutu(){
  document.body.innerHTML = '';

  // Append the navigation bar
  document.body.appendChild(nav);
  let aboutSection = document.createElement('section');
  aboutSection.style.backgroundImage = "url('imagess/about.png')"; // Replace with your background image path
  aboutSection.style.backgroundSize = 'cover';
  aboutSection.style.backgroundPosition = 'center';
  aboutSection.style.height = '80vh';
  aboutSection.style.display = 'flex';
  aboutSection.style.alignItems = 'center';
  aboutSection.style.justifyContent = 'center';
  aboutSection.style.textAlign = 'center';
  aboutSection.style.color = 'white';
  document.body.appendChild(aboutSection);

  let aboutContent = document.createElement('div');
  aboutSection.appendChild(aboutContent);

  let aboutTitle = document.createElement('h1');
  aboutTitle.textContent = 'About Us';
  aboutTitle.style.fontSize = '48px';
  aboutTitle.style.margintop= '10px';
  aboutContent.appendChild(aboutTitle);

  let aboutText = document.createElement('p');
  aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolor pharetra a rhoncus sed, imperdiet id varius nunc vitae sed pretium ante. Gravida mauris leo, faucibus eget at suspendisse magna.';
  aboutText.style.maxWidth = '60%';
  aboutText.style.margin = '0 auto';
  aboutText.style.fontSize = '20px';
  aboutText.style.lineHeight = '1.5';
  aboutContent.appendChild(aboutText);

  // Find Out About Us Section
  let findOutSection = document.createElement('section');
  findOutSection.style.padding = '50px 0';
  findOutSection.style.backgroundColor = '#f7f7f7';
  document.body.appendChild(findOutSection);

  let findOutTitle = document.createElement('h2');
  findOutTitle.textContent = 'Find Out About Us';
  findOutTitle.style.textAlign = 'center';
  findOutTitle.style.fontSize = '32px';
  findOutTitle.style.marginBottom = '30px';
  findOutSection.appendChild(findOutTitle);

  let findOutContent = document.createElement('div');
  findOutContent.style.display = 'flex';
  findOutContent.style.justifyContent = 'space-between';
  findOutContent.style.alignItems = 'center';
  findOutContent.style.gap = '20px';
  findOutContent.style.maxWidth = '1200px';
  findOutContent.style.margin = '0 auto';
  findOutSection.appendChild(findOutContent);

  let infoContainer = document.createElement('div');
  infoContainer.style.flex = '1';
  infoContainer.style.display = 'flex';
  infoContainer.style.flexDirection = 'column';
  infoContainer.style.gap = '20px';
  findOutContent.appendChild(infoContainer);

  let infos = [
    { icon: 'imagess/109.png', title: '100 Destinations in Egypt', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolor pharetra.' },
    { icon: 'imagess/ii.png', title: '200 Professional Tour Guides', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolor pharetra.' },
    { icon: 'imagess/10years.png', title: '10 Years Experience', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolor pharetra.' }
  ];

  infos.forEach(info => {
    let infoItem = document.createElement('div');
    infoItem.style.display = 'flex';
    infoItem.style.alignItems = 'center';
    infoItem.style.gap = '20px';
    infoContainer.appendChild(infoItem);

    let infoIcon = document.createElement('img');
    infoIcon.src = info.icon;
    infoIcon.style.width = '50px';
    infoIcon.style.height = '50px';
    infoItem.appendChild(infoIcon);

    let infoTextContainer = document.createElement('div');
    infoItem.appendChild(infoTextContainer);

    let infoTitle = document.createElement('h3');
    infoTitle.textContent = info.title;
    infoTitle.style.marginBottom = '5px';
    infoTitle.style.fontSize = '20px';
    infoTextContainer.appendChild(infoTitle);

    let infoText = document.createElement('p');
    infoText.textContent = info.text;
    infoTextContainer.appendChild(infoText);
  });

  let imageContainer = document.createElement('div');
  imageContainer.style.flex = '1';
  findOutContent.appendChild(imageContainer);

  let imageElement = document.createElement('img');
  imageElement.src = 'imagess/about us.png'; // Replace with your image path
  imageElement.style.width = '500px';
  imageElement.style.height = '400px';

  imageElement.style.borderRadius = '10px';
  imageContainer.appendChild(imageElement);

  // What Will You Get Section
  let whatYouGetSection = document.createElement('section');
  whatYouGetSection.style.padding = '50px 0';
  document.body.appendChild(whatYouGetSection);

  let whatYouGetTitle = document.createElement('h2');
  whatYouGetTitle.textContent = 'What Will You Get If You Choose With Us?';
  whatYouGetTitle.style.textAlign = 'center';
  whatYouGetTitle.style.fontSize = '32px';
  whatYouGetTitle.style.marginBottom = '30px';
  whatYouGetSection.appendChild(whatYouGetTitle);

  let whatYouGetContent = document.createElement('div');
  whatYouGetContent.style.display = 'flex';
  whatYouGetContent.style.justifyContent = 'space-between';
  whatYouGetContent.style.alignItems = 'center';
  whatYouGetContent.style.gap = '20px';
  whatYouGetContent.style.maxWidth = '1200px';
  whatYouGetContent.style.margin = '0 auto';
  whatYouGetSection.appendChild(whatYouGetContent);

  let highlightedImageContainer = document.createElement('div');
  highlightedImageContainer.style.flex = '1';
  whatYouGetContent.appendChild(highlightedImageContainer);

  let highlightedImage = document.createElement('img');
  highlightedImage.src = 'imagess/gmal.png'; // Replace with your image path
  highlightedImage.style.width = '607px';
  highlightedImage.style.height = '400px';
  highlightedImage.style.borderRadius = '10px';
  highlightedImageContainer.appendChild(highlightedImage);

  let benefitsContainer = document.createElement('div');
  benefitsContainer.style.flex = '1';
  benefitsContainer.style.display = 'flex';
  benefitsContainer.style.flexDirection = 'column';
  benefitsContainer.style.gap = '20px';
  whatYouGetContent.appendChild(benefitsContainer);

  let benefits = [
    { icon: 'imagess/ii.png', title: 'Professional Tour Guide', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolor pharetra.' },
    { icon: 'imagess/travel.png', title: 'Travel Ease', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolor pharetra.' },
    { icon: 'imagess/sec.png', title: 'Security Guarantee', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolor pharetra.' }
  ];

  benefits.forEach(benefit => {
    let benefitItem = document.createElement('div');
    benefitItem.style.display = 'flex';
    benefitItem.style.alignItems = 'center';
    benefitItem.style.gap = '20px';
    benefitsContainer.appendChild(benefitItem);

    let benefitIcon = document.createElement('img');
    benefitIcon.src = benefit.icon;
    benefitIcon.style.width = '50px';
    benefitIcon.style.height = '50px';
    benefitItem.appendChild(benefitIcon);

    let benefitTextContainer = document.createElement('div');
    benefitItem.appendChild(benefitTextContainer);

    let benefitTitle = document.createElement('h3');
    benefitTitle.textContent = benefit.title;
    benefitTitle.style.marginBottom = '5px';
    benefitTitle.style.fontSize = '20px';
    benefitTextContainer.appendChild(benefitTitle);

    let benefitText = document.createElement('p');
    benefitText.textContent = benefit.text;
    benefitTextContainer.appendChild(benefitText);
  });

document.body.appendChild(carouselContainer);

header.textContent='other tours'



}



nav4.addEventListener('click', function(event) {
  event.preventDefault();
  displayGallery()
});
nav5.addEventListener('click', function(event) {
  event.preventDefault();
  aboutu();
});
nav6.addEventListener('click', function(event) {
    event.preventDefault();
    displaySignUpForm();
});

// Adding event listener to the "Sign In" link (if you have one)
nav7.addEventListener('click', function(event) {
  
    event.preventDefault();
    displaySignInForm();
});
const templeInfoContent = {
  shortText: 'The Kom Ombo Temple was built between 332 BC and 395 AD, during the Ptolemaic period, by Ptolemy VI Philometor. Ptolemy XII Neos Dionysos continued the work and built the exterior and interior Hypostyle halls. The temple was built with local limestone by men who rode on elephants, considered to be a Ptolemaic innovation. Little remains of the original structure. Unfortunately, a good portion of the temple has been destroyed over the millennia by earthquakes, erosion by the Nile River and builders who stole stone for unrelated projects.',
  moreText:' In 1893, a French archaeologist by the name of Jacques de Morgan cleared the Southern portion (the half dedicated to Sobek) of debris and restored it. During the Roman period, additions to the temple were made in the form of decorations in the main court. At this time, an outer corridor was also added. Augustus built an outer enclosure wall and a portion of the court, but those structures have since been lost. The Coptic Church took over the temple and converted it into their own place of worship. It was at this time that many of the ancient reliefs were defaced and removed. Kom Ombo was dedicated mainly to Horus and Sobek, however, some of their family members were part of the temple\'s dedication as well. The Southern portion of the temple was not just dedicated to Sobek, the god of fertility, but also to Hathor.'

};

const templeGalleryImages = ['imagess/one temple.png', 'imagess/temple2.png', 'imagess/temple4.png', 'imagess/4444.png'];



const templeIncludeCategories =  [
  {
      title: 'Transport',
      items: ['AC Bus', 'Non AC Bus']
  },
  {
      title: 'Hotel',
      items: ['Double Bed', 'Deluxe Room']
  },
  {
      title: 'Food & Drink',
      items: ['Breakfast', 'Lunch', 'Dinner']
  },
  {
      title: 'Snack',
      items: ['cola', 'peannuts', 'Doritos']
  }
];

const pyramidInfoContent = `{
  shortText: 'the Pyramids of Giza were constructed during the Fourth Dynasty of the Old Kingdom of Egypt, around 2580 - 2560 BC. The site consists of three major pyramids: the Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure. These monumental structures served as the final resting places for the pharaohs and are among the most well-preserved and iconic symbols of ancient Egyptian civilization.'
          ,
  moreText: The Great Pyramid of Khufu, also known as the Pyramid of Cheops, is the largest of the three and was originally 146.6 meters (481 feet) tall, making it the tallest man-made structure in the world for over 3,800 years. Built with over 2.3 million limestone blocks, each weighing an average of 2.5 tons, the pyramid’s construction remains a marvel of engineering. Inside, the pyramid contains the King's Chamber, Queen's Chamber, and the Grand Gallery, all of which demonstrate the Egyptians advanced architectural and mathematical knowledge
The Pyramid of Khafre is slightly smaller than the Great Pyramid, standing at 143.5 meters (471 feet) tall. It is best known for the Great Sphinx, a massive limestone statue with the body of a lion and the head of a pharaoh, which is thought to represent Khafre himself. The pyramid still retains some of its original casing stones at the top, giving a glimpse of its original appearance
}`;

const pyramidGalleryImages = ['imagess/netpyramid1.jpeg', 'imagess/netpyramid2.jpeg', 'imagess/netpyramid3.jpeg', 'imagess/pyramidnet5'];



const pyramidIncludeCategories = [
  { title: 'Transport', items: ['AC Bus', 'Non AC Bus'] },
  { title: 'Hotel', items: ['Single Bed', 'Deluxe Room']
   }
  , {title: 'Food & Drink',
                items: [ 'Lunch', 'Dinner']
            },
            {
                title: 'Snack',
                items: ['fresh fruits', 'fries', 'burger']
            }
];

const sharmInfoContent = {
  shortText: 'Sharm El Sheikh is perhaps best known for its stunning natural beauty. The Red Sea coastline offers some of the best diving and snorkeling experiences in the world. The coral reefs in the area are home to a dazzling array of marine life, including vibrant corals, exotic fish, and even larger species such as sharks and rays. Ras Mohammed National Park, located nearby, is a protected area that showcases the incredible biodiversity of the region. The park is a must-visit for nature lovers and those interested in exploring the underwater world.'
          ,
  moreText: 'The town is also surrounded by picturesque desert landscapes and mountains, offering opportunities for desert safaris, quad biking, and camel rides. The nearby Mount Sinai, where Moses is said to have received the Ten Commandments, is a significant pilgrimage site and offers breathtaking views for those willing to make the climb.'};

const sharmGalleryImages = ['imagess/sharmmm.jpeg', 'imagess/sharmm2.jpeg', 'imagess/sharmm3.jpeg', 'imagess/sharm-elsheikh-night-life.webp','imagess/sharmfinal.jpeg','imagess/aerial_view_sharm_el-sheikh.jpg'];



const sharmIncludeCategories = [
  { title: 'Transport', items: ['AC Bus', 'Non AC Bus'] },
  { title: 'Hotel', items: ['Single Bed', 'Deluxe Room']
   }
  , {title: 'Food & Drink',
                items: [ 'Lunch', 'Dinner']
            },
            {
                title: 'Snack',
                items: ['fresh fruits', 'fries', 'burger']
            }
];
function displayTabContent(tabName,infoContent,galleryImages,tripPlanDays,includeCategories) {
  const contentSection = document.querySelector('.content-section');
  contentSection.innerHTML = ''; // Clear previous content

  if (tabName === 'Information') {
      const infoText = document.createElement('p');
      infoText.textContent = infoContent.shortText;
      
      const moreText = document.createElement('span');
      moreText.className = 'read-more';
      moreText.textContent = infoContent.moreText;
      moreText.style.display = 'none'; // Hidden initially

      const readMoreLink = document.createElement('a');
      readMoreLink.href = '#';
      readMoreLink.style.color = 'blue';
      readMoreLink.style.cursor = 'pointer';
      readMoreLink.textContent = ' Read More';

      readMoreLink.addEventListener('click', function(event) {
          event.preventDefault();
          moreText.style.display = 'inline';
          readMoreLink.style.display = 'none';
      });

      contentSection.appendChild(infoText);
      contentSection.appendChild(moreText);
      contentSection.appendChild(readMoreLink);

  } else if (tabName === 'Gallery') {
      const gallerySection = document.createElement('div');
      gallerySection.className = 'gallery-section';

      galleryImages.forEach(src => {
          const img = document.createElement('img');
          img.src = src; // Replace with actual image paths
          gallerySection.appendChild(img);
      });

      contentSection.appendChild(gallerySection);

  } else if (tabName === 'Trip Plan') {
      displayTripPlan(tripPlanDays);

  } else if (tabName === 'Include') {
      const includeSection = document.createElement('div');
      includeSection.className = 'include-section';
  
      const includeTitle = document.createElement('h3');
      includeTitle.textContent = 'Include';
      includeSection.appendChild(includeTitle);
  
      includeCategories.forEach(category => {
          const categoryContainer = document.createElement('div');
          categoryContainer.className = 'category-container';
  
          const categoryTitle = document.createElement('h4');
          categoryTitle.textContent = category.title;
          categoryContainer.appendChild(categoryTitle);
  
          const itemsContainer = document.createElement('ul');
          itemsContainer.className = 'items-container';
  
          category.items.forEach(item => {
              const itemElement = document.createElement('li');
              itemElement.textContent = item;
              itemsContainer.appendChild(itemElement);
          });
  
          categoryContainer.appendChild(itemsContainer);
          includeSection.appendChild(categoryContainer);
      });
  
      contentSection.appendChild(includeSection);
  }
}


function displayTemplePage() {
  window.scrollTo(0, 0);
    document.body.innerHTML = '';

    // Inject Styles
    const style = document.createElement('style');
    style.textContent = `
        /* General Styles */
        body {
            font-family: 'Poppins', sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }

        /* Hero Section */
        .hero-section {
            background-size: contain;
            background-position: center;
            height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
        }

        .hero-section h1 {
            font-size: 48px;
            margin-bottom: 10px;
        }

        .hero-section p {
            font-size: 20px;
            margin-top: 63px;
        }

        /* Tour Info Section */
        .tour-info {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
            padding: 20px;
            border: 3px solid purple;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .tour-info div {
            text-align: center;
        }

        .tour-info img {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
        }

        .tour-info p {
            font-size: 18px;
            color: #00237E;
        }

        /* Tabs Section */
        .tabs-section {
            padding: 20px 0;
            background-color: #f7f7f7;
            display: flex;
            justify-content: space-around;
        }

        .tabs-section button {
            padding: 10px 20px;
            border: 1px solid purple;
            cursor: pointer;
            background-color: #fff;
            color: #00237E;
            font-size: 16px;
            font-weight: bold;
        }

        .tabs-section button.active {
            background-color: #00237E;
            color: white;
        }

        /* Content Section */
        .content-section {
            padding: 20px;
        }

        /* Read More Section */
        .read-more {
            display: none;
        }

        /* Other Tours Section */
        .other-tours-section {
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            margin: 20px 0;
        }

        .other-tours-section h2 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        .other-tours-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
        }

        .tour-card {
            border: 1px solid #ccc;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .tour-card img {
            width: 100%;
            height: auto;
        }

        .tour-info-card {
            padding: 10px;
        }

        .tour-info-card h3 {
            margin: 10px 0;
            font-size: 18px;
        }

        .tour-info-card p {
            margin: 0;
            font-size: 16px;
            color: #666;
        }

        
        /* Gallery Section */
        .gallery-section {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
            margin-top: 20px;
        }

        .gallery-section img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }
            .trip-plan-title {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
        }

        .day-container {
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            background-color: #fefefe;
        }

        .day-header {
    cursor: pointer;
    padding: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    position: relative;
    font-weight: bold;
}
    .day-header::before {
    content: '\\25B6'; /* Right-pointing triangle */
    display: inline-block;
    margin-right: 10px;
    transition: transform 0.3s ease;
}

        .day-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            padding: 0 15px;
        }

        .day-content.active {
            max-height: 500px; /* adjust as necessary based on content */
            padding: 15px;
        }

        .plan-container {
            margin-bottom: 10px;
        }

        .plan-container h4 {
            font-size: 16px;
            margin-bottom: 5px;
        }

        .plan-container p {
            font-size: 14px;
            margin: 0;
            color: #666;
        }
            .include-section {
    padding: 20px;
    background-color: #fdeae6;
    border-radius: 8px;
}

.include-section h3 {
    font-size: 24px;
    margin-bottom: 20px;
}

.category-container {
    margin-bottom: 15px;
}

.category-container h4 {
    font-size: 20px;
    margin-bottom: 10px;
}

.items-container {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.items-container li {
    position: relative;
    padding-left: 20px;
    font-size: 16px;
    color: #666;
}

.items-container li::before {
    content: '●';
    color: #dcb5a1;
    position: absolute;
    left: 0;
    top: 0;
}
    .back-button {
    display: inline-block;
    margin: 20px;
    padding: 10px 20px;
    background-color: #00237E;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.back-button:hover {
    background-color: #003a99;
}

`
    ;
    document.head.appendChild(style);
    const backButton = document.createElement('button');
    backButton.textContent = 'Back to Home';
    backButton.className = 'back-button';
    backButton.addEventListener('click', function() {
        // Assuming there's a function to display the home page
        displayHomePage();
    });

    // Append the back button to the body
  
    // Hero Section
    const heroSection = document.createElement('div');
    heroSection.className = 'hero-section';
    heroSection.style.backgroundImage = "url('imagess/templedest.png')"; // Replace with actual image path

    const heroContent = document.createElement('div');
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Temple Of Kom Ombo';

    const heroSubtitle = document.createElement('p');
    heroSubtitle.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magnam, facere autem cum quisquam ducimus numquam placeat cumque officiis obcaecati? ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis.';

    heroContent.appendChild(heroTitle);
    heroContent.appendChild(heroSubtitle);
    heroSection.appendChild(heroContent);

    // Tour Info Section
    const tourInfoSection = document.createElement('div');
    tourInfoSection.className = 'tour-info';

    // Location Information
    const locationInfo = document.createElement('div');
    const locationIcon = document.createElement('img');
    locationIcon.src = 'imagess/location.png'; // Replace with actual icon path
    locationIcon.alt = 'Location Icon';
    const locationText = document.createElement('p');
    locationText.textContent = 'Aswan, Kom Ombo';
    locationInfo.appendChild(locationIcon);
    locationInfo.appendChild(locationText);

    // Tour Duration Information
    const durationInfo = document.createElement('div');
    const durationIcon = document.createElement('img');
    durationIcon.src = 'imagess/duration.png'; // Replace with actual icon path
    durationIcon.alt = 'Duration Icon';
    const durationText = document.createElement('p');
    durationText.textContent = '3 Day';
    durationInfo.appendChild(durationIcon);
    durationInfo.appendChild(durationText);

    // Price Information
    const priceInfo = document.createElement('div');
    const priceIcon = document.createElement('img');
    priceIcon.src = 'imagess/price.png'; // Replace with actual icon path
    priceIcon.alt = 'Price Icon';
    const priceText = document.createElement('p');
    priceText.textContent = '$150/person';
    priceInfo.appendChild(priceIcon);
    priceInfo.appendChild(priceText);

    tourInfoSection.appendChild(locationInfo);
    tourInfoSection.appendChild(durationInfo);
    tourInfoSection.appendChild(priceInfo);

    // Tabs Section
    const tabsSection = document.createElement('div');
    tabsSection.className = 'tabs-section';
    const tabs = ['Information', 'Gallery', 'Trip Plan', 'Include'];

    tabs.forEach(tab => {
        const tabButton = document.createElement('button');
        tabButton.textContent = tab;
        tabButton.className = 'tab-button';
        tabButton.addEventListener('click', function () {
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
    displayTabContent(tab, templeInfoContent, templeGalleryImages, mytripdays3, templeIncludeCategories);
        });
        tabsSection.appendChild(tabButton);
    });

    // Set the first tab as active
    tabsSection.firstChild.classList.add('active');

    // Content Section
    const contentSection = document.createElement('div');
    contentSection.className = 'content-section';

    // Display initial content for "Information" tab
  

    

    document.body.appendChild(heroSection);
    document.body.appendChild(tourInfoSection);
    document.body.appendChild(tabsSection);
    document.body.appendChild(contentSection);
    document.body.appendChild(backButton);
  
  
    displayTabContent('Information', templeInfoContent, templeGalleryImages, mytripdays3, templeIncludeCategories);

    const formContainer = createBookingForm();
    document.body.appendChild(formContainer);
    
}
function displayTripPlan(days) {
      const contentSection = document.querySelector('.content-section');
      contentSection.innerHTML = ''; // Clear any existing content
  
      const tripPlanTitle = document.createElement('h3');
      tripPlanTitle.textContent = 'Trip Plan';
      tripPlanTitle.className = 'trip-plan-title';
  
  
      days.forEach(dayData => {
          const dayContainer = document.createElement('div');
          dayContainer.className = 'day-container';
  
          const dayHeader = document.createElement('div');
          dayHeader.className = 'day-header';
          dayHeader.textContent = dayData.day;
          dayHeader.addEventListener('click', () => {
              dayContent.classList.toggle('active');
          });
  
          const dayContent = document.createElement('div');
          dayContent.className = 'day-content';
  
          dayData.plans.forEach(plan => {
              const planContainer = document.createElement('div');
              planContainer.className = 'plan-container';
  
              const planTitle = document.createElement('h4');
              planTitle.textContent = plan.title;
  
              const planDescription = document.createElement('p');
              planDescription.textContent = plan.description;
  
              planContainer.appendChild(planTitle);
              planContainer.appendChild(planDescription);
              dayContent.appendChild(planContainer);
          });
  
          dayContainer.appendChild(dayHeader);
          dayContainer.appendChild(dayContent);
          contentSection.appendChild(dayContainer);
      });
  }
  const mytripdays3 = [
    {
        day: 'Day 1',
        plans: [
            { title: 'Plan 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' },
            { title: 'Plan 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' }
        ]
    },
    {
        day: 'Day 2',
        plans: [
            { title: 'Plan 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' },
            { title: 'Plan 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' }
        ]
    },
    {
        day: 'Day 3',
        plans: [
            { title: 'Plan 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' },
            { title: 'Plan 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' }]
  }]
  const mytripdays2 = [
    {
      day: 'Day 1',
      plans: [
          { title: 'Plan 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' },
          { title: 'Plan 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' }
      ]
  },
  {
      day: 'Day 2',
      plans: [
          { title: 'Plan 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' },
          { title: 'Plan 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus nec turpis magna vestibulum eu. Convallis aenean leo aenean vitae suscipit eget.' }
      ]
  }]
  
function displaypyramidPage() {
  window.scrollTo(0, 0);
  document.body.innerHTML = '';

  // Inject Styles
  const style = document.createElement('style');
  style.textContent = `
      /* General Styles */
      body {
          font-family: 'Poppins', sans-serif;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f7f7f7;
      }

      /* Hero Section */
      .hero-section {
          background-size: cover;
          background-position: center;
          height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
      }

      .hero-section h1 {
          font-size: 48px;
          margin-bottom: 10px;
        color :white;
          font-weight:bold;
        font-style:italic;
        text-decoration:underline;
        text-decoration-color:black;
        background-color:black;
      }

      .hero-section p {
          font-size: 20px;
          margin-top: 63px;
            font-style:italic;
            background-color:black;
          color:white;
      }

      /* Tour Info Section */
      .tour-info {
          display: flex;
          justify-content: space-around;
          margin: 20px 0;
          padding: 20px;
          border: 3px solid purple;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .tour-info div {
          text-align: center;
      }

      .tour-info img {
          width: 40px;
          height: 40px;
          margin-bottom: 10px;
      }

      .tour-info p {
          font-size: 18px;
          color: #00237E;
      }

      /* Tabs Section */
      .tabs-section {
          padding: 20px 0;
          background-color: #f7f7f7;
          display: flex;
          justify-content: space-around;
      }

      .tabs-section button {
          padding: 10px 20px;
          border: 1px solid purple;
          cursor: pointer;
          background-color: #fff;
          color: #00237E;
          font-size: 16px;
          font-weight: bold;
      }

      .tabs-section button.active {
          background-color: #00237E;
          color: white;
      }

      /* Content Section */
      .content-section {
          padding: 20px;
      }

      /* Read More Section */
      .read-more {
          display: none;
      }

      /* Other Tours Section */
      .other-tours-section {
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          margin: 20px 0;
      }

      .other-tours-section h2 {
          font-size: 24px;
          margin-bottom: 20px;
      }

      .other-tours-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px;
      }

      .tour-card {
          border: 1px solid #ccc;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .tour-card img {
          width: 100%;
          height: auto;
      }

      .tour-info-card {
          padding: 10px;
      }

      .tour-info-card h3 {
          margin: 10px 0;
          font-size: 18px;
      }

      .tour-info-card p {
          margin: 0;
          font-size: 16px;
          color: #666;
      }

      
      /* Gallery Section */
      .gallery-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 36px;
          margin-top: 20px;
      }

      .gallery-section img {
          width: 300px;
          height:200px;
          
    object-fit: cover; /* This ensures the images cover the area without distortion */
    
        
          border-radius: 8px;
      }
          .trip-plan-title {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
      }

      .day-container {
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          background-color: #fefefe;
      }

      .day-header {
  cursor: pointer;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  position: relative;
  font-weight: bold;
}
  .day-header::before {
  content: '\\25B6'; /* Right-pointing triangle */
  display: inline-block;
  margin-right: 10px;
  transition: transform 0.3s ease;
}

      .day-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 15px;
      }

      .day-content.active {
          max-height: 500px; /* adjust as necessary based on content */
          padding: 15px;
      }

      .plan-container {
          margin-bottom: 10px;
      }

      .plan-container h4 {
          font-size: 16px;
          margin-bottom: 5px;
      }

      .plan-container p {
          font-size: 14px;
          margin: 0;
          color: #666;
      }
          .include-section {
  padding: 20px;
  background-color: #fdeae6;
  border-radius: 8px;
}

.include-section h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.category-container {
  margin-bottom: 15px;
}

.category-container h4 {
  font-size: 20px;
  margin-bottom: 10px;
}

.items-container {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.items-container li {
  position: relative;
  padding-left: 20px;
  font-size: 16px;
  color: #666;
}

.items-container li::before {
  content: '●';
  color: #dcb5a1;
  position: absolute;
  left: 0;
  top: 0;
}
  .back-button {
  display: inline-block;
  margin: 20px;
  padding: 10px 20px;
  background-color: #00237E;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.back-button:hover {
  background-color: #003a99;
}`


  ;
  document.head.appendChild(style);
  const backButton = document.createElement('button');
  backButton.textContent = 'Back to Home';
  backButton.className = 'back-button';
  backButton.addEventListener('click', function() {
      // Assuming there's a function to display the home page
      displayHomePage();
  });

  // Append the back button to the body

  // Hero Section
  const heroSection = document.createElement('div');
  heroSection.className = 'hero-section';
  heroSection.style.backgroundImage = "url('imagess/pyramids-giza.jpg')"; // Replace with actual image path

  const heroContent = document.createElement('div');
  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'Giza Pyramid';

  const heroSubtitle = document.createElement('p');
  heroSubtitle.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magnam, facere autem cum quisquam ducimus numquam placeat cumque officiis obcaecati? ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis.';

  heroContent.appendChild(heroTitle);
  heroContent.appendChild(heroSubtitle);
  heroSection.appendChild(heroContent);

  // Tour Info Section
  const tourInfoSection = document.createElement('div');
  tourInfoSection.className = 'tour-info';

  // Location Information
  const locationInfo = document.createElement('div');
  const locationIcon = document.createElement('img');
  locationIcon.src = 'imagess/location.png'; // Replace with actual icon path
  locationIcon.alt = 'Location Icon';
  const locationText = document.createElement('p');
  locationText.textContent = 'Giza pyramid';
  locationInfo.appendChild(locationIcon);
  locationInfo.appendChild(locationText);

  // Tour Duration Information
  const durationInfo = document.createElement('div');
  const durationIcon = document.createElement('img');
  durationIcon.src = 'imagess/duration.png'; // Replace with actual icon path
  durationIcon.alt = 'Duration Icon';
  const durationText = document.createElement('p');
  durationText.textContent = '2 Day';
  durationInfo.appendChild(durationIcon);
  durationInfo.appendChild(durationText);

  // Price Information
  const priceInfo = document.createElement('div');
  const priceIcon = document.createElement('img');
  priceIcon.src = 'imagess/price.png'; // Replace with actual icon path
  priceIcon.alt = 'imagess/Price Icon';
  const priceText = document.createElement('p');
  priceText.textContent = '$350/person';
  priceInfo.appendChild(priceIcon);
  priceInfo.appendChild(priceText);

  tourInfoSection.appendChild(locationInfo);
  tourInfoSection.appendChild(durationInfo);
  tourInfoSection.appendChild(priceInfo);

  // Tabs Section
  const tabsSection = document.createElement('div');
  tabsSection.className = 'tabs-section';
  const tabs = ['Information', 'Gallery', 'Trip Plan', 'Include'];

  tabs.forEach(tab => {
      const tabButton = document.createElement('button');
      tabButton.textContent = tab;
      tabButton.className = 'tab-button';
      tabButton.addEventListener('click', function () {
          document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          displayTabContent(tab, pyramidInfoContent, pyramidGalleryImages, mytripdays2, pyramidIncludeCategories);
      });
      tabsSection.appendChild(tabButton);
  });

  // Set the first tab as active
  tabsSection.firstChild.classList.add('active');

  // Content Section
  const contentSection = document.createElement('div');
  contentSection.className = 'content-section';

  // Display initial content for "Information" tab



  document.body.appendChild(heroSection);
  document.body.appendChild(tourInfoSection);
  document.body.appendChild(tabsSection);
  document.body.appendChild(contentSection);
  document.body.appendChild(backButton);
  displayTabContent('Information', pyramidInfoContent, pyramidGalleryImages, mytripdays2, pyramidIncludeCategories);

  const formContainer = createBookingForm();
  document.body.appendChild(formContainer);
    

}
function displaysharmPage() {
  window.scrollTo(0, 0);
  document.body.innerHTML = '';

  // Inject Styles
  const style = document.createElement('style');
  style.textContent = `
      /* General Styles */
      body {
          font-family: 'Poppins', sans-serif;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f7f7f7;
      }

      /* Hero Section */
      .hero-section {
          background-size: cover;
          background-position: center;
          height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        
      }

      .hero-section h1 {
          font-size: 48px;
          margin-bottom: 10px;
        color :white;
          font-weight:bold;
        font-style:italic;
        text-decoration:underline;
        text-decoration-color:white;
      
      }

      .hero-section p {
          font-size: 20px;
          margin-top: 63px;
            font-style:italic;
          
          color:white;
      }

      /* Tour Info Section */
      .tour-info {
          display: flex;
          justify-content: space-around;
          margin: 20px 0;
          padding: 20px;
          border: 3px solid purple;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .tour-info div {
          text-align: center;
      }

      .tour-info img {
          width: 40px;
          height: 40px;
          margin-bottom: 10px;
      }

      .tour-info p {
          font-size: 18px;
          color: #00237E;
      }

      /* Tabs Section */
      .tabs-section {
          padding: 20px 0;
          background-color: #f7f7f7;
          display: flex;
          justify-content: space-around;
      }

      .tabs-section button {
          padding: 10px 20px;
          border: 1px solid purple;
          cursor: pointer;
          background-color: #fff;
          color: #00237E;
          font-size: 16px;
          font-weight: bold;
      }

      .tabs-section button.active {
          background-color: #00237E;
          color: white;
      }

      /* Content Section */
      .content-section {
          padding: 20px;
      }

      /* Read More Section */
      .read-more {
          display: none;
      }

      /* Other Tours Section */
      .other-tours-section {
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          margin: 20px 0;
      }

      .other-tours-section h2 {
          font-size: 24px;
          margin-bottom: 20px;
      }

      .other-tours-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px;
      }

      .tour-card {
          border: 1px solid #ccc;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .tour-card img {
          width: 100%;
          height: auto;
      }

      .tour-info-card {
          padding: 10px;
      }

      .tour-info-card h3 {
          margin: 10px 0;
          font-size: 18px;
      }

      .tour-info-card p {
          margin: 0;
          font-size: 16px;
          color: #666;
      }

      
      /* Gallery Section */
      .gallery-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 36px;
          margin-top: 20px;
      }

      .gallery-section img {
          width: 300px;
          height:200px;
          
    object-fit: cover; /* This ensures the images cover the area without distortion */
    
        
          border-radius: 8px;
      }
          .trip-plan-title {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
      }

      .day-container {
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          background-color: #fefefe;
      }

      .day-header {
  cursor: pointer;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  position: relative;
  font-weight: bold;
}
  .day-header::before {
  content: '\\25B6'; /* Right-pointing triangle */
  display: inline-block;
  margin-right: 10px;
  transition: transform 0.3s ease;
}

      .day-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 15px;
      }

      .day-content.active {
          max-height: 500px; /* adjust as necessary based on content */
          padding: 15px;
      }

      .plan-container {
          margin-bottom: 10px;
      }

      .plan-container h4 {
          font-size: 16px;
          margin-bottom: 5px;
      }

      .plan-container p {
          font-size: 14px;
          margin: 0;
          color: #666;
      }
          .include-section {
  padding: 20px;
  background-color: #fdeae6;
  border-radius: 8px;
}

.include-section h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.category-container {
  margin-bottom: 15px;
}

.category-container h4 {
  font-size: 20px;
  margin-bottom: 10px;
}

.items-container {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.items-container li {
  position: relative;
  padding-left: 20px;
  font-size: 16px;
  color: #666;
}

.items-container li::before {
  content: '●';
  color: #dcb5a1;
  position: absolute;
  left: 0;
  top: 0;
}
  .back-button {
  display: inline-block;
  margin: 20px;
  padding: 10px 20px;
  background-color: #00237E;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.back-button:hover {
  background-color: #003a99;
}`


  ;
  document.head.appendChild(style);
  const backButton = document.createElement('button');
  backButton.textContent = 'Back to Home';
  backButton.className = 'back-button';
  backButton.addEventListener('click', function() {
      // Assuming there's a function to display the home page
      displayHomePage();
  });

  // Append the back button to the body

  // Hero Section
  const heroSection = document.createElement('div');
  heroSection.className = 'hero-section';
  heroSection.style.backgroundImage = "url('imagess/sharmelsheikh5.webp')"; // Replace with actual image path

  const heroContent = document.createElement('div');
  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'sharm elsheikh';

  const heroSubtitle = document.createElement('p');
  heroSubtitle.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magnam, facere autem cum quisquam ducimus numquam placeat cumque officiis obcaecati? ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis.';

  heroContent.appendChild(heroTitle);
  heroContent.appendChild(heroSubtitle);
  heroSection.appendChild(heroContent);

  // Tour Info Section
  const tourInfoSection = document.createElement('div');
  tourInfoSection.className = 'tour-info';

  // Location Information
  const locationInfo = document.createElement('div');
  const locationIcon = document.createElement('img');
  locationIcon.src = 'imagess/location.png'; // Replace with actual icon path
  locationIcon.alt = 'Location Icon';
  const locationText = document.createElement('p');
  locationText.textContent = 'Giza pyramid';
  locationInfo.appendChild(locationIcon);
  locationInfo.appendChild(locationText);

  // Tour Duration Information
  const durationInfo = document.createElement('div');
  const durationIcon = document.createElement('img');
  durationIcon.src = 'imagess/duration.png'; // Replace with actual icon path
  durationIcon.alt = 'Duration Icon';
  const durationText = document.createElement('p');
  durationText.textContent = '2 Day';
  durationInfo.appendChild(durationIcon);
  durationInfo.appendChild(durationText);

  // Price Information
  const priceInfo = document.createElement('div');
  const priceIcon = document.createElement('img');
  priceIcon.src = 'imagess/price.png'; // Replace with actual icon path
  priceIcon.alt = 'Price Icon';
  const priceText = document.createElement('p');
  priceText.textContent = '$350/person';
  priceInfo.appendChild(priceIcon);
  priceInfo.appendChild(priceText);

  tourInfoSection.appendChild(locationInfo);
  tourInfoSection.appendChild(durationInfo);
  tourInfoSection.appendChild(priceInfo);

  // Tabs Section
  const tabsSection = document.createElement('div');
  tabsSection.className = 'tabs-section';
  const tabs = ['Information', 'Gallery', 'Trip Plan', 'Include'];

  tabs.forEach(tab => {
      const tabButton = document.createElement('button');
      tabButton.textContent = tab;
      tabButton.className = 'tab-button';
      tabButton.addEventListener('click', function () {
          document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          displayTabContent(tab, sharmInfoContent, sharmGalleryImages, mytripdays2, sharmIncludeCategories);
      });
      tabsSection.appendChild(tabButton);
  });

  // Set the first tab as active
  tabsSection.firstChild.classList.add('active');

  // Content Section
  const contentSection = document.createElement('div');
  contentSection.className = 'content-section';

  // Display initial content for "Information" tab



  document.body.appendChild(heroSection);
  document.body.appendChild(tourInfoSection);
  document.body.appendChild(tabsSection);
  document.body.appendChild(contentSection);
  document.body.appendChild(backButton);
  displayTabContent('Information', sharmInfoContent, sharmGalleryImages, mytripdays2, sharmIncludeCategories);

  // Other Tours Section
  const formContainer = createBookingForm();
    document.body.appendChild(formContainer);
    

}
function createBookingForm() {
    // Create form container
    const formContainer = document.createElement('div');
    formContainer.style.width = '100%';
    formContainer.style.maxWidth = '400px';
    formContainer.style.margin = '-50px 0px -19px  880px';
    formContainer.style.padding = '20px';
    formContainer.style.backgroundColor = '#fff';
    formContainer.style.borderRadius = '10px';
    formContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    formContainer.style.textAlign = 'center';

    // Create form title
    const formTitle = document.createElement('h3');
    formTitle.textContent = 'Book a Destination';
    formTitle.style.marginBottom = '20px';
    formTitle.style.fontSize = '20px';
    formTitle.style.fontWeight = 'bold';
    formTitle.style.color = '#333';

    // Create form element
    const form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = '15px';
    form.style.alignItems = 'center'; // Align items in the center
    form.style.width = '100%'; // Make sure form takes full width

    // Shared styles for all input fields
    const inputStyles = `
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #ddd;
        background-color: #fdeae6;
        width: 100%; /* Make sure all inputs take full width */
        box-sizing: border-box;
    `
    ;

    // Create input fields
    const inputFields = [
        { type: 'text', placeholder: 'Full Name', required: true },
        { type: 'email', placeholder: 'Email Address', required: true },
        { type: 'tel', placeholder: 'Phone Number', required: true },
        { type: 'select', options: ['Number Of People', '1', '2', '3', '4', '5+'], required: true },
        { type: 'date', placeholder: 'Set Date', required: true },
        { type: 'textarea', placeholder: 'Message', rows: 4, required: false }
    ];

    inputFields.forEach(field => {
        let input;
        if (field.type === 'select') {
            input = document.createElement('select');
            
            field.options.forEach(optionText => {
                const option = document.createElement('option');
                option.textContent = optionText;
                option.value = optionText;
              
                input.appendChild(option);
            });
        } else if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.placeholder = field.placeholder;
            input.rows = field.rows;
            input.style.height = '100px'; // Larger height for the message textarea
            input.style.resize = 'none';
            input.style.marginLeft='150px';
        } else {
            input = document.createElement('input');
            input.type = field.type;
            input.placeholder = field.placeholder;
            input.style.marginLeft = '5px';
        }

        input.required = field.required;
        input.style.cssText = inputStyles;

        form.appendChild(input);
    });

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Book Now';
    submitButton.style.padding = '15px';
    submitButton.style.borderRadius = '5px';
    submitButton.style.border = 'none';
    submitButton.style.backgroundColor = '#00237E';
    submitButton.style.color = 'white';
    submitButton.style.fontSize = '16px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.width = '100%'; // Make sure the button takes full width

    form.appendChild(submitButton);
    formContainer.appendChild(formTitle);
    formContainer.appendChild(form);
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting in the traditional way
      displayCheckoutForm(); // Call the function to display the checkout form
  });
    return formContainer;
  

}
function displayCheckoutForm() {
  document.body.innerHTML = ''; // Clear the current HTML content

  // Create the checkout form container with a unique class
  const checkoutContainer = document.createElement('div');
  checkoutContainer.className = 'checkout-form'; // Unique class for the checkout form

  const checkoutTitle = document.createElement('h3');
  checkoutTitle.textContent = 'Credit Card Details';
  checkoutContainer.appendChild(checkoutTitle);

  // Create the Back button
  const backButton = document.createElement('button');
  backButton.textContent = 'Back to Home';
  backButton.style.marginBottom = '20px';
  backButton.style.padding = '10px';
  backButton.style.backgroundColor = '#6c757d';
  backButton.style.color = 'white';
  backButton.style.border = 'none';
  backButton.style.borderRadius = '5px';
  backButton.style.cursor = 'pointer';
  backButton.style.marginTop = '20px';
  // Navigate to the home page when clicked
  backButton.addEventListener('click', function() {
      displayHomePage(); // Replace 'index.html' with your actual home page URL
  });

  checkoutContainer.appendChild(backButton);

  const form = document.createElement('form');
  form.style.display = 'grid';
  form.style.gridTemplateColumns = 'repeat(2, 1fr)';
  form.style.gap = '20px';
  form.style.marginTop = '20px';

  // Create Card Holder input
  const cardHolderContainer = document.createElement('div');
  cardHolderContainer.style.gridColumn = 'span 2';
  const cardHolderLabel = document.createElement('label');
  cardHolderLabel.textContent = 'CARD HOLDER';
  cardHolderLabel.style.display = 'block';
  cardHolderLabel.style.marginBottom = '5px';
  const cardHolderInput = document.createElement('input');
  cardHolderInput.type = 'text';
  cardHolderInput.required = true;
  cardHolderInput.placeholder = 'Card Holder';
  cardHolderInput.style.width = '100%';
  cardHolderInput.style.padding = '10px';
  cardHolderInput.style.border = '1px solid #ccc';
  cardHolderInput.style.borderRadius = '5px';
  cardHolderContainer.appendChild(cardHolderLabel);
  cardHolderContainer.appendChild(cardHolderInput);

  // Create Expiration Date inputs
  const expirationContainer = document.createElement('div');
  const expirationLabel = document.createElement('label');
  expirationLabel.textContent = 'EXPIRATION DATE';
  expirationLabel.style.display = 'block';
  expirationLabel.style.marginBottom = '5px';
  const expirationInputMM = document.createElement('input');
  expirationInputMM.type = 'text';
  expirationInputMM.required = true;
  expirationInputMM.placeholder = 'MM';
  expirationInputMM.style.width = '45%';
  expirationInputMM.style.padding = '10px';
  expirationInputMM.style.border = '1px solid #ccc';
  expirationInputMM.style.borderRadius = '5px';
  expirationInputMM.style.marginRight = '10%';
  const expirationInputYY = document.createElement('input');
  expirationInputYY.type = 'text';
  expirationInputYY.placeholder = 'YY';
  expirationInputYY.required = true;
  expirationInputYY.style.width = '45%';
  expirationInputYY.style.padding = '10px';
  expirationInputYY.style.border = '1px solid #ccc';
  expirationInputYY.style.borderRadius = '5px';
  expirationContainer.appendChild(expirationLabel);
  expirationContainer.appendChild(expirationInputMM);
  expirationContainer.appendChild(expirationInputYY);

  // Create Card Number input
  const cardNumberContainer = document.createElement('div');
  const cardNumberLabel = document.createElement('label');
  cardNumberLabel.textContent = 'CARD NUMBER';
  cardNumberLabel.style.display = 'block';
  cardNumberLabel.style.marginBottom = '5px';
  const cardNumberInput = document.createElement('input');
  cardNumberInput.type = 'text';
  cardNumberInput.required = true;
  cardNumberInput.placeholder = 'Card Number';
  cardNumberInput.style.width = '100%';
  cardNumberInput.style.padding = '10px';
  cardNumberInput.style.border = '1px solid #ccc';
  cardNumberInput.style.borderRadius = '5px';
  cardNumberContainer.appendChild(cardNumberLabel);
  cardNumberContainer.appendChild(cardNumberInput);

  // Create CVC input
  const cvcContainer = document.createElement('div');
  const cvcLabel = document.createElement('label');
  
  cvcLabel.textContent = 'CVC';
  cvcLabel.style.display = 'block';
  cvcLabel.style.marginBottom = '5px';
  const cvcInput = document.createElement('input');
  cvcInput.type = 'text';
  cvcInput.required = true;
  cvcInput.placeholder = 'CVC';
  cvcInput.style.width = '100%';
  cvcInput.style.padding = '10px';
  cvcInput.style.border = '1px solid #ccc';
  cvcInput.style.borderRadius = '5px';
  cvcContainer.appendChild(cvcLabel);
  cvcContainer.appendChild(cvcInput);

  // Create the proceed button
  const proceedButton = document.createElement('button');
  proceedButton.type = 'submit';
  proceedButton.textContent = 'Proceed';
  proceedButton.style.gridColumn = 'span 2';
  proceedButton.style.padding = '15px';
  proceedButton.style.backgroundColor = '#007bff';
  proceedButton.style.color = 'white';
  proceedButton.style.border = 'none';
  proceedButton.style.borderRadius = '5px';
  proceedButton.style.cursor = 'pointer';
  proceedButton.style.fontSize = '16px';

  form.addEventListener('submit', function(event) {
    // Check if the form is valid
    
        event.preventDefault(); 
    
        
        alert('Thank you for reserving with us!');
    }
);


  // Append all fields and button to the form
  form.appendChild(cardHolderContainer);
  form.appendChild(expirationContainer);
  form.appendChild(cardNumberContainer);
  form.appendChild(cvcContainer);
  form.appendChild(proceedButton);

  checkoutContainer.appendChild(form);
  document.body.appendChild(checkoutContainer);

  // Inject scoped styles for the checkout form
  const style = document.createElement('style');
  style.textContent = `
      .checkout-form {
          max-width: 500px;
          margin: 50px auto;
          padding: 20px;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }`
  ;
  document.head.appendChild(style);
}

function displayDestinationsOverview() {
  
  const setTitle = (titleText) => {
      const titleElement = document.querySelector('title');
      if (titleElement) {
          titleElement.textContent = titleText;
      } else {
          const newTitleElement = document.createElement('title');
          newTitleElement.textContent = titleText;
          document.head.appendChild(newTitleElement);
      }
  };
  setTitle('Destinations Overview');

  // Clear the existing content
  document.body.innerHTML = '';
  document.body.appendChild(nav);

  // Create the container for the destinations overview
  const overviewContainer = document.createElement('div');
  overviewContainer.style.padding = '20px';

  // Create the title for the page
  const pageTitle = document.createElement('h1');
  pageTitle.textContent = 'Destinations Overview';
  pageTitle.style.textAlign = 'center';
  pageTitle.style.marginBottom = '40px';


  // Array of destination objects with images
  const destinations = [
      {
          name: 'Pyramids of Giza',
          overview: 'The Pyramids of Giza are among the most iconic structures in the world, representing ancient Egypts power and architectural prowess.',
          reason: 'A must-see for history buffs and anyone fascinated by ancient civilizations. Experience one of the Seven Wonders of the Ancient World with breathtaking views, particularly at sunrise and sunset.',
          image: 'imagess/pyramid.png' // Replace with actual image path or URL
      },
      {
          name: 'Sharm El Sheikh',
          overview: 'Sharm El Sheikh is a world-renowned resort town known for its stunning beaches, crystal-clear waters, and vibrant coral reefs.',
          reason: 'Ideal for those seeking relaxation and adventure, offering some of the best diving and snorkeling spots in the world, along with luxurious resorts and vibrant nightlife.',
          image: 'imagess/sharmm6.eg' // Replace with actual image path or URL
      },
      {
          name: 'Temple of Kom Ombo',
          overview: 'The Temple of Kom Ombo is a unique dual temple dedicated to both Sobek, the crocodile god, and Horus, the falcon-headed god.',
          reason: 'Experience a unique piece of Egyptian history in a picturesque riverside setting, perfect for history enthusiasts and those on a Nile cruise.',
          image: 'imagess/temple.png' // Replace with actual image path or URL
      },
      {
          name: 'Egyptian Museum',
          overview: 'The Egyptian Museum in Cairo houses the world’s most extensive collection of ancient Egyptian artifacts, including the treasures of Tutankhamun.',
          reason: 'A treasure trove for history lovers, offering an in-depth look into Egypt’s rich history and culture with expert-guided tours.',
          image: 'imagess/museum.jpeg' // Replace with actual image path or URL
      },
      {
          name: 'Cairo Opera House',
          overview: 'The Cairo Opera House is the main performing arts venue in Egypt, hosting a variety of performances including ballet, opera, and orchestral music.',
          reason: 'A sophisticated night out in Cairo, ideal for culture enthusiasts interested in classical music, dance, or theater.',
          image: 'imagess/opera.jpeg' // Replace with actual image path or URL
      },
      {
          name: 'Mount Sinai',
          overview: 'Mount Sinai is a significant religious site, believed to be where Moses received the Ten Commandments.',
          reason: 'Perfect for adventure seekers and those interested in religious history, offering a spiritual experience with breathtaking sunrise views.',
          image: 'imagess/sainai.eg' // Replace with actual image path or URL
      },
      {
          name: 'Siwa Oasis',
          overview: 'Siwa Oasis is one of Egypt’s most isolated settlements, famous for its natural springs, salt lakes, and ancient ruins.',
          reason: 'Ideal for those looking to escape the hustle and bustle, offering serenity, adventure like sandboarding, and a unique cultural experience.',
          image: 'imagess/siwa.jpeg' // Replace with actual image path or URL
      },
      {
          name: 'Giza Zoo',
          overview: 'The Giza Zoo is one of the oldest zoos in the world, offering a wide variety of animals and lush gardens.',
          reason: 'Perfect for families and animal lovers, providing a peaceful escape within the city with opportunities to learn about different species.',
          image: 'imagess/giza zoo.jpg' // Replace with actual image path or URL
      }
  ];

  // Loop through the destinations and create a card for each
  destinations.forEach(destination => {
      const card = document.createElement('div');
      card.style.border = '1px solid #ddd';
      card.style.borderRadius = '10px';
      card.style.marginBottom = '20px';
      card.style.padding = '20px';
      card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
      card.style.backgroundColor = '#fff';
      card.style.display = 'flex'; // To place image next to text
      card.style.alignItems = 'center'; // Align items vertically

      const imageContainer = document.createElement('div');
      imageContainer.style.flex = '0 0 150px'; // Control the image size
      imageContainer.style.marginRight = '20px';

      const image = document.createElement('img');
      image.src = destination.image;
      image.alt = destination.name;
      image.style.width = '100%';
      image.style.height = '100px';
      image.style.borderRadius = '8px';

      imageContainer.appendChild(image);
      card.appendChild(imageContainer);

      const textContainer = document.createElement('div');

      const name = document.createElement('h2');
      name.textContent = destination.name;
      name.style.color = '#333';
      name.style.marginBottom = '10px';

      const overview = document.createElement('p');
      overview.textContent = destination.overview;
      overview.style.color = '#555';

      const reason = document.createElement('p');
      reason.textContent = destination.reason;
      reason.style.fontStyle = 'italic';
      reason.style.color = '#888';

      textContainer.appendChild(name);
      textContainer.appendChild(overview);
      textContainer.appendChild(reason);

      card.appendChild(textContainer);

      overviewContainer.appendChild(card);
  });

  // Append the container to the body
  document.body.appendChild(overviewContainer);
}



nav3.addEventListener('click', function (event) {
  event.preventDefault();
  displayDestinationsOverview();});