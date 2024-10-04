function showDropdown() {
    var dropdownMenu = document.getElementById("shelter-dropdown-menu");
    dropdownMenu.classList.add("show");
}
$('.InnerBannerSlide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    nextArrow: '.FeatureArrowLeft',
    prevArrow: '.FeatureArrowRight',
    variableWidth: false,
    fade: true, // Add fade effect
    autoplay: true, // Autoplay slider
    autoplaySpeed: 3000, // Autoplay speed in milliseconds (3 seconds in this example)
    responsive: [{
        breakpoint: 990,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 570,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        }
    }]
});



// testiSlick slick start
$('.testiSlick').slick({
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true, // Autoplay slider
    autoplaySpeed: 3000, // Autoplay speed in milliseconds (3 seconds in this example)
    swipe: true,
    swipeToSlide: true,
    variableWidth: false,

    nextArrow: '.slick-next-testi',
    prevArrow: '.slick-prev-testi',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});
// Initialize Slick Slider
// logoSlick slick start
$('.logoSlick').slick({
    speed: 800,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    arrows: false,
    dots: false,
    swipe: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,

    // nextArrow: '.slick-next-testi',
    // prevArrow: '.slick-prev-testi',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }]
});
// logoSlick slick end
$('.glanceImg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    nextArrow: '.glanceArrowRight',
    prevArrow: '.glanceArrowLeft',
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true // Enable dots for navigation
});
$(document).ready(function () {
    const modal = $("#myModal");
    const modalImg = $("#modalImg");
    const sliderCards = $(".slider_card");
    const leftArrow = $(".modal-left-arrow");
    const rightArrow = $(".modal-right-arrow");
    let currentImageIndex = 0;
    let scrollPosition = 0;

    // Function to open the modal and display the selected image
    function openModal(index) {
        currentImageIndex = index;
        modal.css("display", "block");
        modalImg.attr("src", sliderCards.eq(index).find("img").attr("src"));

        // Save the current scroll position and disable scrolling
        scrollPosition = $(window).scrollTop();
        $("body").css({
            position: "fixed",
            top: `-${scrollPosition}px`,
            width: "100%"
        });
    }

    // Function to close the modal
    function closeModal() {
        modal.css("display", "none");

        // Re-enable scrolling and restore the previous scroll position
        $("body").css({
            position: "",
            top: "",
            width: ""
        });
        $(window).scrollTop(scrollPosition);
    }

    // Add click event listeners to each zoom icon
    // sliderCards.each(function (index) {
    //     $(this).find(".zoom-icon").on("click", function (e) {
    //         e.preventDefault();
    //         openModal(index);
    //     });
    // });

    // // Add click event listener to the close button
    // modal.find(".close").on("click", closeModal);

    // // Add click event listener to the left arrow (previous image)
    // leftArrow.on("click", function () {
    //     if (currentImageIndex > 0) {
    //         openModal(currentImageIndex - 1);
    //     }
    // });

    // // Add click event listener to the right arrow (next image)
    // rightArrow.on("click", function () {
    //     if (currentImageIndex < sliderCards.length - 1) {
    //         openModal(currentImageIndex + 1);
    //     }
    // });

    // // Close modal when clicking outside the modal content
    // $(document).on("click", function (e) {
    //     if ($(e.target).is(modal)) {
    //         closeModal();
    //     }
    // });
});


var scrollTimeout; // Variable to store the timeout ID

// Add an event listener for the "scroll" event
$(window).on("scroll", function () {
    // Clear any previous timeout
    clearTimeout(scrollTimeout);

    // Set a new timeout for 2 seconds (2000 milliseconds)
    scrollTimeout = setTimeout(function () {
        // Get the current scroll position
        var scrollY = window.scrollY || window.pageYOffset;

        // Define the scroll position at which you want to add the class
        var scrollThreshold = 100; // Adjust this value as needed

        // Check if the scroll position is beyond the threshold
        if (scrollY > scrollThreshold) {
            // Add the class to the element with class "mainNavbar" after the 2-second delay
            $(".MainNavbarFixed").addClass("FixedNavbar");
        } else {
            // Remove the class from the element with class "mainNavbar" if not scrolled far enough
            $(".MainNavbarFixed").removeClass("FixedNavbar");
        }
    }, 100);
});


$(window).on('load scroll', function () {
    var animated = false; // Flag to prevent multiple animations

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function startCounters() {
        if (animated) return; // Prevent multiple animations
        animated = true; // Set flag to true

        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            // Animate the counter
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },
                {
                    duration: 1500, // Duration of the counter animation
                    easing: 'linear', // Easing effect
                    step: function () {
                        $this.text(Math.floor(this.countNum)); // Update the displayed number during animation
                    },
                    complete: function () {
                        $this.text(this.countNum + '+'); // Append "+" after the final value
                    }
                });
        });
    }

    // Check on load and scroll
    if (isElementInViewport(document.querySelector('.AboutImg'))) {
        startCounters(); // Start counters if the section is in view
    }
});

window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none'; // Hide the loader

        const content = document.getElementById('content');
        content.classList.add('fade-in'); // Add fade-in class to content
    }, 2000); // 2000 milliseconds = 2 seconds
});


$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};

var animated = false; // Flag to prevent multiple animations

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function startCounters() {
    if (animated) return; // Prevent multiple animations
    animated = true; // Set flag to true

    $('#number1').jQuerySimpleCounter({ end: 109, duration: 3000 });
    $('#number2').jQuerySimpleCounter({ end: 485, duration: 3000 });
    $('#number3').jQuerySimpleCounter({ end: 789, duration: 2000 });
    $('#number4').jQuerySimpleCounter({ end: 246, duration: 2500 });
}

$(window).on('scroll', function () {
    if (isElementInViewport(document.querySelector('.ProjectCounter'))) {
        startCounters(); // Start counters if the section is in view
    }
});


/* AUTHOR LINK */
$('.about-me-img').hover(function () {
    $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function () {
    $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});

// $(document).ready(function () {
//     const $progressBar = $('#progress-bar');
//     const $fractionDisplay = $('#fraction-display'); // Fraction display element
//     const totalSteps = 3;
//     let currentStep = 1; // Track the current step

//     // Function to update progress bar width and fraction display based on step index
//     function updateProgress(stepIndex) {
//         const progress = (stepIndex / totalSteps) * 100;
//         $progressBar.css('width', `${progress}%`);
//         $fractionDisplay.text(`${stepIndex}/${totalSteps}`);

//         // Change button text based on the current step
//         if (stepIndex === totalSteps) {
//             $('#nextButton').text('Submit');
//         } else {
//             $('#nextButton').text('Next');
//         }
//     }

//     // Handle click events for navigation tabs
//     $('#home-tab').click(function () {
//         currentStep = 1;
//         $('.nav-link').removeClass('active');
//         $(this).addClass('active');
//         updateProgress(currentStep); // Update progress when switching tabs
//     });

//     $('#profile-tab').click(function () {
//         currentStep = 2;
//         $('.nav-link').removeClass('active');
//         $(this).addClass('active');
//         updateProgress(currentStep); // Update progress when switching tabs
//     });

//     $('#contact-tab').click(function () {
//         currentStep = 3;
//         $('.nav-link').removeClass('active');
//         $(this).addClass('active');
//         updateProgress(currentStep); // Update progress when switching tabs
//     });

//     // Handle click events for the "Next" button
//     $('#nextButton').click(function (event) {
//         event.preventDefault(); // Prevent the default link behavior
//         if (currentStep < totalSteps) {
//             currentStep++;
//             $('.nav-link').removeClass('active');
//             $(`#profile-tab, #contact-tab`)[currentStep - 2].classList.add('active'); // Activate the next tab
//             updateProgress(currentStep);
//         } else {
//             // Handle the form submission logic here
//             alert("Form submitted!"); // Example action
//         }
//     });

//     // Initialize progress bar and fraction display to step 1
//     updateProgress(currentStep);
// });

$(document).ready(function () {
    const totalSteps = 3;
    let currentStep = 1;

    function updateProgress(step) {
        const progress = (step / totalSteps) * 100;
        $('#progressBar').css('width', `${progress}%`);
    }

    function updateButtonText(step) {
        if (step === totalSteps) {
            $('#nextButton').text('Submit');
        } else {
            $('#nextButton').text('Next');
        }
    }

    function validateInputs(step) {
        let allValid = true;
        $(`#step${step}-content input`).each(function () {
            if ($(this).val().trim() === '') {
                $(this).addClass('is-invalid');
                allValid = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });
        return allValid;
    }

    function setActiveTab(step) {
        $('.nav-link, .tab-pane').removeClass('active show');
        $(`#step${step}-tab, #step${step}-content`).addClass('active show');
    }

    function enableTab(step) {
        $(`#step${step}-tab`).removeClass('disabled').addClass('enable-click');
    }

    $('#nextButton').click(function () {
        if (validateInputs(currentStep)) {
            if (currentStep < totalSteps) {
                currentStep++;
                enableTab(currentStep);
                setActiveTab(currentStep);
                updateProgress(currentStep);
                updateButtonText(currentStep);
            } else {
                alert("Form submitted!"); // Example action
            }
        }
    });

    // Initialization: disable all tabs except the first
    $('.nav-link').addClass('');
    enableTab(1); // Always enable the first tab

    // Navigation tabs click event handling
    $(document).on('click', '.enable-click', function () {
        var stepSelected = $(this).attr('id').match(/\d+/)[0]; // Extracts number from id like 'step1-tab'
        if (stepSelected) {
            stepSelected = parseInt(stepSelected);
            currentStep = stepSelected;
            setActiveTab(currentStep);
            updateProgress(currentStep);
            updateButtonText(currentStep);
        }
    });

    // Initialize progress bar and button text
    updateProgress(currentStep);
    updateButtonText(currentStep);
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle');
    const overlay = document.getElementById('overlay');
    const html = document.documentElement; // Reference to the HTML element
    const closeOverlay = document.getElementById('closeOverlay');

    navbarToggle.addEventListener('click', function () {
        const navbarContent = document.getElementById('navbarSupportedContent');

        // Toggle the 'show' class
        navbarContent.classList.toggle('show');

        // Toggle overlay and html overflow
        if (navbarContent.classList.contains('show')) {
            overlay.classList.add('active');
            html.classList.add('overflow-hidden'); // Add class to html
        } else {
            overlay.classList.remove('active');
            html.classList.remove('overflow-hidden'); // Remove class from html
        }
    });

    // Close overlay when the close icon is clicked
    closeOverlay.addEventListener('click', function () {
        const navbarContent = document.getElementById('navbarSupportedContent');
        navbarContent.classList.remove('show');
        overlay.classList.remove('active');
        html.classList.remove('overflow-hidden'); // Remove class from html
    });

    // Close overlay when the overlay is clicked
    overlay.addEventListener('click', function () {
        const navbarContent = document.getElementById('navbarSupportedContent');
        navbarContent.classList.remove('show');
        overlay.classList.remove('active');
        html.classList.remove('overflow-hidden'); // Remove class from html
    });
});




$('.form-control').on('focus blur change', function (e) {
    var $currEl = $(this);

    if ($currEl.is('select')) {
        if ($currEl.val() === $("option:first", $currEl).val()) {
            $('.control-label', $currEl.parent()).animate({ opacity: 0 }, 240);
            $currEl.parent().removeClass('focused');
        } else {
            $('.control-label', $currEl.parent()).css({ opacity: 1 });
            $currEl.parents('.form-group').toggleClass('focused', ((e.type === 'focus' || this.value.length > 0) && ($currEl.val() !== $("option:first", $currEl).val())));
        }
    } else {
        $currEl.parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }
}).trigger('blur');



///Products Slider IMG
$(document).ready(function () {
    let imgId = 1;
    let autoplayInterval;

    // Add click event listeners for image buttons
    $('.img-select a').each(function () {
        $(this).on('click', function (event) {
            event.preventDefault();
            imgId = $(this).data('id');

            // Remove active class from all and add to the clicked one
            $('.img-select a').parent().removeClass('active');
            $(this).parent().addClass('active');

            slideImage();
            resetAutoplay(); // Reset autoplay on manual slide
        });
    });

    // Function to slide images
    function slideImage() {
        const displayWidth = $('.img-showcase img:first-child').width();

        $('.img-showcase').css('transform', `translateX(${- (imgId - 1) * displayWidth}px)`);
    }

    // Function to start autoplay
    function startAutoplay() {
        autoplayInterval = setInterval(function () {
            imgId++;
            if (imgId > $('.img-select a').length) {
                imgId = 1; // Loop back to the first image
            }
            // Add active class to corresponding img-item
            $('.img-select a').parent().removeClass('active');
            $('.img-select a[data-id="' + imgId + '"]').parent().addClass('active');
            slideImage();
        }, 3000); // Change image every 3 seconds (3000 milliseconds)
    }

    // Function to reset autoplay when manually changing images
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay(); // Restart autoplay
    }

    // Initialize autoplay
    startAutoplay();

    // Adjust slider on window resize
    $(window).on('resize', slideImage);
});


// document.getElementById('services-link').addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent the default anchor behavior
//     const navItem = document.getElementById('services-item');
//     navItem.classList.toggle('active');
// });

// Remove active class when clicking anywhere on the body
// document.body.addEventListener('click', function (e) {
//     const navItem = document.getElementsByClassName('hasDrop');
//     const targetElement = e.target.closest('.nav-item'); // Check if clicked inside nav-item
//     if (!targetElement) { // If the click was outside the nav-item
//         navItem.classList.remove('ssactive');
//     }
// });

$(document).ready(function () {
    let isListenerActive = false;

    function addRemoveActiveClassListener() {
        function handleClick(e) {
            const navItem = $(e.target).closest('.hasDrop'); // Get the clicked .hasDrop element

            // If a navItem is clicked
            if (navItem.length) {
                // Remove 'active' class from all other .hasDrop elements except the clicked one
                $('.hasDrop').not(navItem).removeClass('active');

                // Toggle 'active' class on the clicked .hasDrop element
                navItem.toggleClass('active');
            } 
        }

        if ($(window).width() <= 1000) {
            if (!isListenerActive) {
                $(document.body).on('click', handleClick);
                isListenerActive = true;
            }
        } else {
            if (isListenerActive) {
                $(document.body).off('click', handleClick);
                isListenerActive = false;
            }
        }
    }

    // Run the function on page load and when the window is resized
    addRemoveActiveClassListener();
    $(window).resize(function () {
        addRemoveActiveClassListener();
    });
});

/// Animation code
$(document).ready(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('animate__animated animate__fadeInUp');
                observer.unobserve(entry.target); // Optionally unobserve the element after animation
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Select all elements with the class 'animateMe' using jQuery
    $('.animateMe').each(function () {
        observer.observe(this);
    });
});
