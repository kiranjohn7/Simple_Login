$(document).ready(function () {
  // Define an array of user objects with usernames, emails, and passwords
  const users = [
    {
      username: "Conestoga",
      email: "conestoga@college.com",
      password: "asdfgh",
    },
    {
      username: "Javascript",
      email: "javascript@college.com",
      password: "qwerty",
    },
  ];

  // Event listener for the login form submission
  $("#loginForm").submit(function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the input values for username and password
    const loginUsername = $("#loginUsername").val();
    const loginPassword = $("#loginPassword").val();

    // Find the user object in the array based on the entered username
    const user = users.find((user) => user.username === loginUsername);

    // Check if the user exists
    if (!user) {
      $("#loginError").text("User does not exist"); // Display an error message
      return; // Exit the function
    }

    // Check if the entered password matches the user's password
    if (user.password !== loginPassword) {
      $("#loginError").text("Incorrect password"); // Display an error message
      return; // Exit the function
    }

    // Redirect the user to the home page
    window.location.href = "home.html";
  });
});

$(document).ready(function () {
  var currentIndex = 0;
  var slides = $(".slider img");
  var totalSlides = slides.length;

  // Hide all images except the first one
  slides.hide();
  slides.eq(currentIndex).show();

  // Function to transition to the next slide
  function nextSlide() {
    slides.eq(currentIndex).fadeOut(500);
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.eq(currentIndex).fadeIn(500);
  }

  setInterval(nextSlide, 3000);
});

// Function to add animations to various elements on the page
function addAnimations() {
  // Animate the font size of the h1 element in the header
  $("header h1").animate({ fontSize: "2em" }, "slow");

  // Fade in each navigation link with a delay based on its index
  $("nav ul li a").each(function (index) {
    $(this)
      .delay(200 * index)
      .fadeIn(1000);
  });

  $("main").fadeIn(1500);

  var screenWidth = $(window).width();

  if (screenWidth < 600) {
    $("header h1").css("color", "#dbff4d").fadeIn("slow");

    // Hide the navigation menu and then slide it down with animation
    $("nav").hide().slideDown(1000);

    // Hide the footer and then fade it in with animation
    $("footer").hide().fadeIn(1000);
  } else {
    $("header h1").css("color", "#ccff00").fadeIn("slow");

    $("nav").show().fadeIn(1000);

    // Hide the footer and then fade it in with animation
    $("footer").hide().fadeIn(1000);
  }
}

$("#categories section").each(function (index) {
  $(this)
    .delay(300 * index)
    .fadeIn(1000);
});

$("#heroimg").css("opacity", "0").animate({ opacity: "1" }, 1500);

$(".footnav a").each(function (index) {
  $(this)
    .delay(200 * index)
    .fadeIn(1000);
});

// Add hover effect to anchor elements within the navigation menu
$("nav a").hover(
  function () {
    // When mouse enters change text color to light gray
    $(this).css("color", "#eee");
  },
  function () {
    // When mouse leaves change text color back to dark blue
    $(this).css("color", "#0b0b31");
  }
);

$(".footnav a").hover(
  function () {
    // When mouse enters change text color to light yellow
    $(this).css("color", "#dbff4d");
  },
  function () {
    // When mouse leaves change text color back to light gray
    $(this).css("color", "#eee");
  }
);

// Add hover effect to items within the multicol section
$("#multicol .item").hover(
  function () {
    // When mouse enters change background color to dark blue
    $(this).css("background-color", "#0b0b31");
  },
  function () {
    // When mouse leaves change background color back to light yellow
    $(this).css("background-color", "#dbff4d");
  }
);

// Call the addAnimations function when the document is ready
$(document).ready(function () {
  addAnimations();

  // Re-run addAnimations function when window is resized
  $(window).resize(function () {
    addAnimations();
  });
});

// Add hover class to elements with class 'flex1'
$(document).ready(function () {
  $(".flex1").hover(
    function () {
      // When mouse enters, add class 'hovered'
      $(this).addClass("hovered");
    },
    function () {
      // When mouse leaves, remove class 'hovered'
      $(this).removeClass("hovered");
    }
  );
});

$(document).ready(function () {
  $(".button").click(function () {
    // When button is clicked, animate its properties to change font-size, padding, and background-color
    $(this).animate(
      {
        "font-size": "20px",
        padding: "15px 30px",
        "background-color": "#0056b3",
      },
      500, // Duration of animation
      function () {
        // Once first animation is complete, animate properties back to original values
        $(this).animate(
          {
            "font-size": "16px",
            padding: "10px 20px",
            "background-color": "#007bff",
          },
          500 // Duration of animation
        );
      }
    );
  });
});

// When the document is ready, hide all rows in the tbody of table with id 'animatedTable'
$(document).ready(function () {
  $("#animatedTable tbody tr").hide();

  // For each row in the tbody, delay and then fade it in gradually
  $("#animatedTable tbody tr").each(function (index) {
    $(this)
      .delay(200 * index) // Delay for each row based on its index
      .fadeIn(500); // Fade in with a duration of 500 milliseconds
  });
});
