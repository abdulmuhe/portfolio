// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")
const menuIcon = document.getElementById("menu-icon")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")

  if (mobileMenu.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars")
    menuIcon.classList.add("fa-times")
  } else {
    menuIcon.classList.remove("fa-times")
    menuIcon.classList.add("fa-bars")
  }
})

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    // Close mobile menu if open
    mobileMenu.classList.remove("active")
    menuIcon.classList.remove("fa-times")
    menuIcon.classList.add("fa-bars")
  })
})

// Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

  let current = ""
  const scrollPosition = window.pageYOffset + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-section") === current) {
      link.classList.add("active")
    }
  })
}

// Update active link on scroll
window.addEventListener("scroll", updateActiveNavLink)

// Contact Form Submission
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const formObject = {}
  formData.forEach((value, key) => {
    formObject[key] = value
  })

  // Simulate form submission
  alert("Thank you for your message! I'll get back to you soon.")
  contactForm.reset()
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".experience-card, .portfolio-card, .skill-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.95)"
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.8)"
  }
})

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect on page load
window.addEventListener("load", () => {
  const heroName = document.querySelector(".hero-name")
  if (heroName) {
    typeWriter(heroName, "AbdulMuhe", 150)
  }
})
