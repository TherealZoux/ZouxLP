

/*data*/
const articleImages = [
  "imgs/cat-01.jpg",
  "imgs/cat-02.jpg",
  "imgs/cat-03.jpg",
  "imgs/cat-04.jpg",
  "imgs/cat-05.jpg",
  "imgs/cat-06.jpg",
  "imgs/cat-07.jpg",
  "imgs/cat-08.jpg",
];

const gallaryImages = [
  "imgs/gallery-01.png",
  "imgs/gallery-02.png",
  "imgs/gallery-03.jpg",
  "imgs/gallery-04.png",
  "imgs/gallery-05.jpg",
  "imgs/gallery-06.png",
];
const memberImages = [
  "imgs/team-01.jpg",
  "imgs/team-02.jpg",
  "imgs/team-03.jpg",
  "imgs/team-04.jpg",
  "imgs/team-05.png",
  "imgs/team-06.png",
  "imgs/team-07.jpg",
  "imgs/team-08.jpg",
];



const testimonialsNames = [
  "Mohamed Farag",
  "Mohamed Ibrahim",
  "Shady Nabil",
  "Amr Hendawy",
  "Sherief Ashraf",
  "Osama Mohamed",
];
const testimonialsImages = [
  "imgs/avatar-01.png",
  "imgs/avatar-02.png",
  "imgs/avatar-03.png",
  "imgs/avatar-04.png",
  "imgs/avatar-05.png",
  "imgs/avatar-06.png",
];
const servicesData = [
  {
    class: "fas fa-user-shield fa-4x",
    title: "Security"
  }, {
    class: "fas fa-tools fa-4x",
    title: "Fixing Issues"
  }, {
    class: "fas fa-map-marked-alt fa-4x",
    title: "Location"
  }, {
    class: "fas fa-laptop-code fa-4x",
    title: "Coding"
  }, {
    class: "fas fa-palette fa-4x",
    title: "Styling"
  }, {
    class: "fas fa-bullhorn fa-4x",
    title: "Markting"
  }
]
const pricingFeatures = [{
  space: " GB HDD Space",
  email: " Email Addresses",
  subDomains: " Subdomains",
  databases: " Databases",
  //support: " Basic support
},
{
  0: 10,
  1: 5,
  2: 2,
  3: 4
}
]


/*elements*/
const articleContainer = document.getElementById("article-container");
const gallaryContainer = document.getElementById("gallary-container");
const testimonialsContainer = document.getElementById("testimonials-container");
const teamsContainer = document.getElementById("teams-container");
const servicesContainer = document.getElementById("services-container")
const progressSpans = document.querySelectorAll(".the-progress span");
const ourSkillsSection = document.querySelector(".our-skills");
const basicFeatures = document.querySelector(".basic-features")
const advanvedFeatures = document.querySelector(".advanced-features")
const profisionalFeatures = document.querySelector(".profisional-features")
/*loops*/

for (i = 0; i < articleImages.length; i++) {
  articleContainer.innerHTML += `

        <div class="article-card">
          <img src="${articleImages[i]}" alt="article image" />
          <div class="content">
            <h1>Test Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </div>
          <div class="info">
            <a href="#">Read more</a>
              <i class="fas fa-long-arrow-alt-right" ></i>
          </div>
        </div>
  `;

  teamsContainer.innerHTML += `
        <div class="member-box">
            <div class="data">
              <img src="${memberImages[i]}" />
              <div class="social">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </div> 
          </div>
          <div class="info">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div>
        </div>
`}

for (i = 0; i < 6; i++) {
  gallaryContainer.innerHTML += `
        <div class="gallary-box">
          <div class="image">
            <img src="${gallaryImages[i]}" alt="article image" />
          </div>
        </div>

        </div>
`;
  testimonialsContainer.innerHTML += `
        <div class="testimonials-box">
          <img src="${testimonialsImages[i]}" />
            <h1>${testimonialsNames[i]}</h1>
            <span>Full Stack Developer</span>
            <div class="rate">
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="filled fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus quaerat ducimus</p>
      </div>
`;
  servicesContainer.innerHTML += `
 <div class="service-box">
          <i class="${servicesData[i].class}"></i>
          <h3>${servicesData[i].title}</h3>
          <div class="info">
            <a href="#">Details</a>
          </div>
        </div>

`
}
for (let i = 0; i < 1; i++) {
  basicFeatures.innerHTML += `
<li>${pricingFeatures[i + 1][0]} ${pricingFeatures[i].space}</li>
    <li>${pricingFeatures[i + 1][1]} ${pricingFeatures[i].email}</li>
    <li>${pricingFeatures[i + 1][2]} ${pricingFeatures[i].subDomains}</li>
    <li>${pricingFeatures[i + 1][3]} ${pricingFeatures[i].databases}</li>
    <li>basic support</li>
  `
  advanvedFeatures.innerHTML += `
    <li>${2 * pricingFeatures[i + 1][0]} ${pricingFeatures[i].space}</li>
    <li>${2 * pricingFeatures[i + 1][1]} ${pricingFeatures[i].email}</li>
    <li>${1 + 2 * pricingFeatures[i + 1][2]} ${pricingFeatures[i].subDomains}</li>
    <li>${2 * pricingFeatures[i + 1][3]} ${pricingFeatures[i].databases}</li>
    <li>Advanced Support</li>
  `
  profisionalFeatures.innerHTML += `
    <li>${5 * pricingFeatures[i + 1][0]} ${pricingFeatures[i].space}</li>
    <li>${4 * pricingFeatures[i + 1][1]} ${pricingFeatures[i].email}</li>
    <li>${5 * pricingFeatures[i + 1][2]} ${pricingFeatures[i].subDomains}</li>
    <li>${5 * pricingFeatures[i + 1][3]} ${pricingFeatures[i].databases}</li>
    <li>Professional Support</li>
  `
}



//functions
