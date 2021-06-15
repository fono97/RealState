
// this does not work ToDO Email Tom
class Slider {
  display() {
    let toggleNavStatus = false;
    let searchInfo = document.getElementById("registration");
    let registration = document.getElementById("search-info");
    let howItWorks = document.getElementById("how-it-works");
    let buttons = document.querySelectorAll(".nav-menu ul");
    let search = document.querySelector(".search");
    let registrationForm = document.querySelector(".registration-form");
    let getStarted = document.querySelector(".get-started");
    // let wrapper = document.querySelector(".wrapper");
    let RegistrationTitle = document.querySelector(".title");
    let registrationFor = document.querySelector(".registration-for");

    let toggleNav = function () {
      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          changeMenu(index);
        });
      });
    };
    let changeMenu = function (index) {
      if (toggleNavStatus === false) {
        if (index === 0) {
          if (registration.clientWidth === 0) {
            registration.style.display = "block";
            search.style.visibility = "visible";
            registration.style.width = "23rem";
            registration.style.opacity = "1";
            searchInfo.style.display = "none";
            howItWorks.style.display = "none";
          } else {
            registration.style.width = "0rem";
          }
        } else if (index === 1) {
          if (searchInfo.clientWidth === 0) {
            searchInfo.style.display = "block";
            registrationForm.style.visibility = "visible";
            searchInfo.style.width = "23rem";
            searchInfo.style.opacity = "1";
            registration.style.display = "none";
            howItWorks.style.display = "none";
            RegistrationTitle.style.visibility = "visible";
            registrationFor.style.visibility = "visible";
          } else {
            searchInfo.style.width = "0rem";
          }
        } else if (index === 2) {
          if (howItWorks.clientWidth === 0) {
            howItWorks.style.display = "block";
            getStarted.style.visibility = "visible";
            howItWorks.style.width = "23rem";
            howItWorks.style.opacity = "1";
            searchInfo.style.display = "none";
            registration.style.display = "none";
          } else {
            howItWorks.style.width = "0rem";
          }
        }
        toggleNavStatus = true;
      } else if (toggleNavStatus === true) {
        if (index === 0) {
          if (registration.clientWidth > 0) {
            search.style.visibility = "hidden";
            registration.style.width = "0rem";
          } else {
            howItWorks.style.display = "none";
            searchInfo.style.display = "none";
            howItWorks.style.width = "0rem";
            searchInfo.style.width = "0rem";
            howItWorks.style.zIndex = "1";
            searchInfo.style.zIndex = "1";
            registration.style.zIndex = "3";
            registration.style.opacity = "1";
            registration.style.display = "block";
            registration.style.width = "23rem";
            search.style.visibility = "visible";
          }
        } else if (index === 1) {
          if (searchInfo.clientWidth > 0) {
            registrationForm.style.visibility = "hidden";
            RegistrationTitle.style.visibility = "hidden";
            searchInfo.style.width = "0rem";
            registrationFor.style.visibility = "hidden";
          } else {
            registration.style.display = "none";
            howItWorks.style.display = "none";
            registration.style.width = "0rem";
            howItWorks.style.width = "0rem";
            registration.style.zIndex = "1";
            howItWorks.style.zIndex = "1";
            searchInfo.style.zIndex = "3";
            searchInfo.style.opacity = "1";
            searchInfo.style.display = "block";
            searchInfo.style.width = "23rem";
            registrationForm.style.visibility = "visible";
            registrationFor.style.visibility = "visible";
          }
        } else if (index === 2) {
          if (howItWorks.clientWidth > 0) {
            getStarted.style.visibility = "hidden";
            howItWorks.style.width = "0rem";
          } else {
            searchInfo.style.display = "none";
            registration.style.display = "none";
            searchInfo.style.width = "0rem";
            registration.style.width = "0rem";
            searchInfo.style.zIndex = "1";
            registration.style.zIndex = "1";
            howItWorks.style.zIndex = "3";
            howItWorks.style.opacity = "1";
            howItWorks.style.display = "block";
            howItWorks.style.width = "23rem";
            getStarted.style.visibility = "visible";
          }
        }
        toggleNavStatus = false;
      }
    };
    return toggleNav();
  }
}

class Switchtable {
  displayHeader() {
    let changeTabHeader = function () {
      let lists = document.querySelectorAll(".tabHeader");
      lists.forEach((list) => {
        list.addEventListener("click", () => {
          let tabNumber = parseInt(list.dataset.tab);
          document.querySelector(".active-tab").classList.remove("active-tab");
          list.classList.add("active-tab");
          switch (tabNumber) {
            case 1:
              changeTabSection(tabNumber);
              break;

            case 2:
              changeTabSection(tabNumber);
              break;

            case 3:
              changeTabSection(tabNumber);
              break;

            case 4:
              changeTabSection(tabNumber);
              break;

            default:
              break;
          }
        });
      });
    };

    let changeTabSection = (tabNumber) => {
      let currentTab = document.querySelector(".show");
      currentTab.classList.remove("show");
      currentTab.classList.add("hide");
      let newTab = document.getElementById(`display-tab-${tabNumber}`);
      newTab.classList.remove("hide");
      newTab.classList.add("show");
    };
    return changeTabHeader();
  }
}

class Mouse {
  mouse() {
    let searchAddress = document.getElementById("search-address");
    let addContent = document.querySelector(".content-add");
    let currentStatus = "enter";
    let displayImage = function () {
      if (currentStatus === "enter") {
        searchAddress.addEventListener("mouseenter", () => {
          addContent.style.visibility = "visible";
        });
        currentStatus = "leave";
      }
      if (currentStatus === "leave") {
        searchAddress.addEventListener("mouseleave", () => {
          addContent.style.visibility = "hidden";
        });
        currentStatus = "enter";
      }
    };
    return displayImage();
  }
}

class Sign {
  setUpSign() {
    let Titles = document.querySelectorAll(".sub-title");
    Titles.forEach((title, index) => {
      title.addEventListener("click", () => {
        document.querySelector(".show-title").classList.remove("show-title");
        title.classList.add("show-title");
        if (index === 0) {
          document.querySelector(".required-2").style.display = "none";
          document.querySelector(".required-1").style.display = "block";
          document.querySelector(".rounded").innerHTML = "continue";
        } else if (index === 1) {
          document.querySelector(".required-1").style.display = "none";
          document.querySelector(".required-2").style.display = "block";
          document.querySelector(".rounded").innerHTML = "sign in";
        }
      });
    });
  }
}

let user = new Sign();
user.setUpSign();

class Properties {
  async getProperties() {
    try {
      let result = await fetch("main.json");
      let data = await result.json();
      let properties = data.info;
      properties = properties.map((property) => {
        const { location, price, url } = property;
        const { bed, bath, size, id } = property.description;
        return { location, price, url, bed, bath, size, id };
      });

      return properties;
    } catch (error) {
      console.log(error);
    }
  }
}

let houses = document.querySelector(".our-houses");
class UI extends Properties {
  displayProperties(properties) {
    let result = "";
    properties.forEach((property) => {
      result += `
              <article class="our-house">
            <div class="image-container">
              <img src= ${property.url} alt="house" class="house-img" />
            </div>
            
            <div class="house-info">
              <ul>
                <li class="house-info-1">${property.bed}</li>
                <li>${property.bath}</li>
                <li class="house-info-3">${property.size}</li>
              </ul>
              <address>${property.location}</address>
              <h4>${property.price}</h4>
            </div>
          </article> 
            `;
    });
    houses.innerHTML = result;
    return this.displayFullImage(properties);
  }

  displayFullImage(properties) {
    let galleryImages = document.querySelectorAll(".house-img");
    if (galleryImages) {
      galleryImages.forEach((image, index) => {
        let currentImage = index;
        image.addEventListener("click", () => {
          let body = document.body;
          let imgWindow = document.createElement("div");
          let close = document.createElement("div");
          close.setAttribute("class", "close");
          imgWindow.setAttribute("class", "img-window");
          imgWindow.appendChild(close);
          let textDiv = document.createTextNode("x");
          close.setAttribute("title", "remove text");
          close.appendChild(textDiv);
          body.appendChild(imgWindow);
          close.setAttribute("onclick", "this.closeImg()");

          let containerImg = document.createElement("div");
          containerImg.setAttribute("class", "container-image");
          imgWindow.appendChild(containerImg);

          let newImg = document.createElement("img");

          newImg.setAttribute("class", "new-img");
          containerImg.appendChild(newImg);
          newImg.setAttribute("src", properties[index].url);

          newImg.onload = function () {
            let arrowLeft = document.createElement("div");
            containerImg.appendChild(arrowLeft);
            arrowLeft.setAttribute("id", "arrow-left");
            arrowLeft.setAttribute("class", "arrow");

            arrowLeft.addEventListener("click", function () {
              changeImg(0);
            });

            let arrowRight = document.createElement("div");
            containerImg.appendChild(arrowRight);
            arrowRight.setAttribute("id", "arrow-right");
            arrowRight.setAttribute("class", "arrow");

            arrowRight.addEventListener("click", function () {
              changeImg(1);
            });
          };
        });
        let newCalc;
        let changeImg = function (changeDir) {
          let newImg = document.querySelector(".new-img");
          if (changeDir === 1) {
            newCalc = currentImage + 1;
          } else if (changeDir === 0) {
            newCalc = currentImage - 1;
          }
          newImg.setAttribute("src", properties[newCalc].url);
          currentImage = newCalc;
        };
      });
    }
  }
 closeImg(){
  document.querySelector(".img-window").remove();
  document.querySelector(".close").remove();
  document.querySelector(".arrowRight").remove();
  document.querySelector(".arrowLeft").remove();
}
}
// function closeImg() {
//   document.querySelector(".img-window").remove();
//   document.querySelector(".close").remove();
//   document.querySelector(".arrowRight").remove();
//   document.querySelector(".arrowLeft").remove();
// }

class TestimonialClients {
  displayTestimonials() {
    let bannerStatus = 1;
    let bannerTimer = 6000;
    let activeBanner = setInterval(function () {
      changeTestimonials();
    }, bannerTimer);
    let containerTestimonials = document.querySelector(
      ".container-testimonials"
    );
    containerTestimonials.addEventListener("mouseenter", () => {
      clearInterval(activeBanner);
    });
    containerTestimonials.addEventListener("mouseleave", () => {
      activeBanner = setInterval(() => {
        changeTestimonials();
      }, bannerTimer);
    });

    document
      .getElementById("arrow-right")
      .addEventListener("click", function () {
        changeTestimonials();
      });

    let changeTestimonials = function () {
      let clientTestimonials = document.querySelectorAll(
        ".testimonials-clients"
      );
      if (bannerStatus === 1) {
        document.getElementById("testimonial-2").style.opacity = "0";
        setTimeout(function () {
          document.getElementById("testimonial-1").style.right = "0px";
          document.getElementById("testimonial-1").style.zIndex = "1500";
          document.getElementById("testimonial-2").style.right = "-400px";
          document.getElementById("testimonial-2").style.zIndex = "1000";
          document.getElementById("testimonial-3").style.right = "400px";
          document.getElementById("testimonial-3").style.zIndex = "500";
          document.getElementById("testimonial-2").style.visibility = "hidden";
          document.getElementById("testimonial-3").style.visibility = "hidden";
          document.getElementById("testimonial-1").style.visibility = "visible";
        }, 500);

        setTimeout(function () {
          document.getElementById("testimonial-2").style.opacity = "1";
        }, 1000);
        bannerStatus = 2;
      } else if (bannerStatus === 2) {
        document.getElementById("testimonial-3").style.opacity = "0";

        setTimeout(function () {
          document.getElementById("testimonial-2").style.right = "0px";
          document.getElementById("testimonial-2").style.zIndex = "1500";
          document.getElementById("testimonial-3").style.right = "-400px";
          document.getElementById("testimonial-3").style.zIndex = "1000";
          document.getElementById("testimonial-1").style.right = "400px";
          document.getElementById("testimonial-1").style.zIndex = "500";
          document.getElementById("testimonial-3").style.visibility = "hidden";
          document.getElementById("testimonial-1").style.visibility = "hidden";
          document.getElementById("testimonial-2").style.visibility = "visible";
        }, 500);
        setTimeout(function () {
          document.getElementById("testimonial-3").style.opacity = "1";
        }, 1000);
        bannerStatus = 3;
      } else if (bannerStatus === 3) {
        document.getElementById("testimonial-1").style.opacity = "0";

        setTimeout(function () {
          document.getElementById("testimonial-3").style.right = "0px";
          document.getElementById("testimonial-3").style.zIndex = "1500";
          document.getElementById("testimonial-1").style.right = "-400px";
          document.getElementById("testimonial-1").style.zIndex = "1000";
          document.getElementById("testimonial-2").style.right = "400px";
          document.getElementById("testimonial-2").style.zIndex = "500";
          document.getElementById("testimonial-1").style.visibility = "hidden";
          document.getElementById("testimonial-2").style.visibility = "hidden";
          document.getElementById("testimonial-3").style.visibility = "visible";
        }, 500);

        setTimeout(function () {
          document.getElementById("testimonial-1").style.opacity = "1";
        }, 1000);
        bannerStatus = 1;
      }
    };
    return changeTestimonials;
  }
}

class Validator {

  validateUser() {
  let submitForm = document.getElementById("button-send");
  let formValidation = ()=>{
    submitForm.addEventListener("click", (ev) =>{
      ev.preventDefault();
      this.checkUser();
      document.querySelector(".form-user").reset();
    });
  };
  return formValidation();
}

checkUser(){
  let user = {
    name: document.getElementById("user-name").value,
    email: document.getElementById("user-email").value,
    phoneNumber: document.getElementById("user-phone").value,
  };
  this.userName(user);
  this.userEmail(user);
  this.userTel(user);
  this.addUserToCart(user, this.userName(user), this.userEmail(user), this.userTel(user))
};

  userName(user) {
  let username = "";
  if (user.name === "") {
    document.getElementById("user-name").style.borderColor = "red";
    document.querySelectorAll(".fail")[0].style.visibility = "visible";
    document.querySelectorAll(".error-text")[0].style.visibility = "visible";
  } else if (user.name.length > 10) {
    console.log("text is so long")
  } else {
    document.getElementById("user-name").style.borderColor = `#f69314`;
    document.querySelector(".success").style.visibility = "visible";
    username = user.name;
  }
  return username;
};

  userEmail(user){
  let useremail = "";
  if (user.email === "") {
    console.log("sorry, but the input field can't be empty")
  }
  let regExpression = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,8})$/;
  let result = regExpression.test(user.email)
  if (result) {
    document.getElementById("user-email").style.borderColor = `#f69314`;
    document.querySelectorAll(".success")[1].style.visibility = "visible";
    useremail = user.email;
  }
  else {
    document.getElementById("user-email").style.borderColor = "red";
    document.querySelectorAll(".fail")[1].style.visibility = "visible";
    document.querySelectorAll(".error-text")[1].style.visibility = "visible";
  }
  return useremail;
}

  userTel(user) {
  let usertel = "";
  if (user.phoneNumber === "") {
    console.log("sorry, the empty field can be empty")
  }
  let regExpression = /^[1]-?\d{3}-?\d{3}-?\d{4}$/;
  let result = regExpression.test(user.phoneNumber);
  if (result) {
    document.getElementById("user-phone").style.borderColor = `#f69314`;
    document.querySelectorAll(".success")[2].style.visibility = "visible";;
    usertel = user.phoneNumber;
  } else {
    document.getElementById("user-phone").style.borderColor = "red";
    document.querySelectorAll(".fail")[2].style.visibility = "visible";
    document.querySelectorAll(".error-text")[2].style.visibility = "visible";
  }
  return usertel;
};

  addUserToCart(user, userName, userEmail, userTel) {
  if (userTel.length > 0 && userName.length > 0 && userEmail.length > 0) {
    let users = localStorage.getItem("currentUser")
    users = JSON.parse(users)
    if (!users) {
      users = [];
    }
    users.push(user)
    localStorage.setItem("currentUser", JSON.stringify(users))
  }
  else {
    alert("I am sorry, you are not qualified")
  }
 }
}

document.addEventListener("DOMContentLoaded", () => {
  const properties = new Properties();
  const ui = new UI();
  ui.getProperties();
  let slider = new Slider();
  let aude = new Switchtable();
  //get all properties
  properties.getProperties().then((properties) => {
    return ui.displayProperties(properties);
  });

  // change all header
  slider.display();
  //switch title
  aude.displayHeader();

  //display mouse
  let mouse = new Mouse();
  mouse.mouse();
  // displayTestimonials
  let clientTestimonials = new TestimonialClients();
  clientTestimonials.displayTestimonials();
  //validator
  let user = new Validator()
  user.validateUser()
});

