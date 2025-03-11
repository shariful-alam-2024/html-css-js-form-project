// national
document.getElementById("national-id").addEventListener("change", function () {
     const container = document.getElementById("national-id-container");

     if (this.value === "yes") {
          container.innerHTML = `
               <label for="national-id-input">[National ID number]:</label>
               <input type="text" id="national-id-input" name="national-id-input" required>
               `;
     } else {
          container.innerHTML = ""; // Remove the input if "No" is selected
     }
});
// birth
document.getElementById("birth-id").addEventListener("change", function () {
     const container = document.getElementById("birth-id-container"); // Now correctly references the id

     if (this.value === "yes") {
          container.innerHTML = `
               <label for="birth-id-input">Birth Registration Number:</label>
               <input type="text" id="birth-id-input" name="birth-id-input" required>
               `;
     } else {
          container.innerHTML = ""; // Remove input if "No" is selected
     }
});

// passport


document.getElementById("Pasport-id").addEventListener("change", function () {
     const container = document.getElementById("Pasport-id-container"); // Now correctly references the id

     if (this.value === "yes") {
          container.innerHTML = `
               <label for="Pasport-id-input">[Your Pasport Number]:</label>
               <input type="text" id="Pasport-id-input" name="Pasport-id-input" required>
               `;
     } else {
          container.innerHTML = ""; // Remove input if "No" is selected
     }
});
// quota

document.getElementById("quota-id").addEventListener("change", function () {
     const container = document.getElementById("quota-id-container");

     if (this.value === "freedom-fighter") {
          container.innerHTML = `
           <label for="quota-id-input">Freedom Fighter Details (Name, Certificate No, Date, etc.):</label>
          <input type="text" id="quota-id-input" name="quota-id-input" required>
            `;
     } else {
          container.innerHTML = ""; // Clear input for other selections
     }
});
// distrect present addresses
const districts = [
     "Barguna", "Barisal", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur", "B_baria", "Bandarban", "Chandpur", "Chattogram", "Cox_s_bazar", "Cumilla",
     "Feni"
];

function populateDistricts(selectElementId) {
     const selectElement = document.getElementById(selectElementId);
     districts.forEach(district => {
          const option = document.createElement("option");
          option.value = district;
          option.textContent = district;
          selectElement.appendChild(option);
     });
}

populateDistricts("present_district");
populateDistricts("permanent_district");

const upa = {
     Barisal: ['Agailjhara', 'Babuganj', 'Bakerganj', 'Banaripara', 'Barisal-s', 'Gouranadi', 'Hizla', 'Mehendiganj', 'Muladi', 'Uzirpur'],

     Barguna: ['Amtali', 'Bamna', 'Betagi', 'Pathargata', 'Taltali'],

     Bhola: ['Bhola-s', 'Borhanuddin', 'charfassion', 'Daulatkhan', 'Lalmohan', 'Monpura', 'Tazumuddin',],

     Jhalokathi: ['Jhalokathi-s', 'Rajapur', 'Nalchity', 'kathalia'],
     Patuakhali: ['Patuakhali-s', 'Rangabali', 'Bhandria', 'Mirjaganj', 'Dumki', 'galachipa', 'Dashmina', 'Bauphal'],
     Pirojpur: ['Pirojpur-s', 'Kawkhali', 'Mothbaria', 'Nazirpur', 'Nesarabad', 'Zianagar'],
     B_baria: ['B_baria-s', 'Ashuganj', 'Bancharampur', 'Kasba', 'Bijoynagar', 'Nabinagar', 'Nasirnagar', 'Sarail'],
     Bandarban: ['Bandarban-s', 'Lama', 'Ruma', 'Thanchi', 'Naikhyongchari', 'Rowangchari', 'Alikadam'],
     Chandpur: ['Chandpur-s', 'Faridganj', 'Haimchar', 'Haziganj', 'Kachua', 'Matlab (Dakshin)', 'Matlab (Uttar)', 'Shahrasti'],
     Chattogram: ['Chattogram-s', 'Anwara', 'Banskhali', 'Boalkhali', 'Chandanish', 'Fatikchari', 'Hathazari', 'Karnaphuli', 'Lohagara', 'Mirsharai', 'Patiya', 'Rangunia', 'Raojan', 'Sandwip', 'Satkania', 'Sitakunda'],
     Cox_s_bazar: ["Cox's bazar-s", 'Ramu', 'Chakoria', 'Kutubdia', 'Moheskhali', 'Ukhiya', 'Teknaf', 'pekua',],
     Cumilla: ['Titas', 'Nangalkot', 'Muradnagar', 'Monohorganj', 'Meghna', 'Lalmai', 'Laksham', 'Homna', 'Debidwar', 'Daudkandi', 'Cumilla-S Daksin', 'Cumilla-S', 'Chouddagram', 'Chandina', 'Burichong', 'Brahmanpara', 'Barura'],
     Feni: ['Feni-s', 'Sonagazi', 'Porshuram', 'Fulgazi', 'Daganbhuiyan', 'Chhagalniya',],
};

function updateUpazila(districtSelect, upazilaSelect) {
     const selectedDistrict = districtSelect.value;
     upazilaSelect.innerHTML = '<option value="">Select Upazila</option>';

     if (selectedDistrict && upa[selectedDistrict]) {
          upa[selectedDistrict].forEach(upazila => {
               const option = document.createElement("option");
               option.value = upazila;
               option.textContent = upazila;
               upazilaSelect.appendChild(option);
          });
     }
}

document.getElementById("present_district").addEventListener("change", function () {
     updateUpazila(this, document.getElementById("present_upazila"));
});

document.getElementById("permanent_district").addEventListener("change", function () {
     updateUpazila(this, document.getElementById("permanent_upazila"));
});

document.getElementById("chake").addEventListener("change", function () {
     if (this.checked) {
          document.getElementById("permanent_care").value = document.getElementById("present_care").value;
          document.getElementById("permanent_village").value = document.getElementById("present_village").value;
          document.getElementById("permanent_district").value = document.getElementById("present_district").value;

          // Trigger change event to update upazilas
          document.getElementById("permanent_district").dispatchEvent(new Event('change'));

          document.getElementById("permanent_upazila").value = document.getElementById("present_upazila").value;
          document.getElementById("permanent_post").value = document.getElementById("present_post").value;
          document.getElementById("permanent_code").value = document.getElementById("present_code").value;
     } else {
          document.getElementById("permanent_care").value = "";
          document.getElementById("permanent_village").value = "";
          document.getElementById("permanent_district").value = "";
          document.getElementById("permanent_upazila").innerHTML = '<option value="">Select Upazila</option>';
          document.getElementById("permanent_post").value = "";
          document.getElementById("permanent_code").value = "";
     }
});

// ssc equavlent
document.getElementById("ssc_result").addEventListener("change", function () {
     const container = document.getElementById("ssc_result-container"); // Now correctly references the id

     if (this.value === "GPA(out of 5)") {
          container.innerHTML = `
               <label for="ssc_result-input">[Result]:</label>
               <input type="number" id="ssc_result-input" name="ssc_result-input" required>
               `;
     } else {
          container.innerHTML = ""; // Remove input if "No" is selected
     }
});


const select = document.getElementById("ssc_passing_year");
for (let year = 2000; year <= 2025; year++) {
     let option = document.createElement("option");
     option.value = year;
     option.textContent = year;
     select.appendChild(option);
}
// Hsc equivalent
document.getElementById("Hsc_result").addEventListener("change", function () {
     const container = document.getElementById("Hsc_result-container"); // Now correctly references the id

     if (this.value === "GPA(out of 5)") {
          container.innerHTML = `
               <label for="Hsc_result-input">[Result]:</label>
               <input type="number" id="Hsc_result-input" name="Hsc_result-input" required>
               `;
     } else {
          container.innerHTML = ""; // Remove input if "No" is selected
     }
});


const select1 = document.getElementById("Hsc_passing_year");
for (let year = 2000; year <= 2025; year++) {
     let option = document.createElement("option");
     option.value = year;
     option.textContent = year;
     select1.appendChild(option);
}
// Graduation-Equivalent
const select2 = document.getElementById("Graduation-Equivalent");
for (let year = 2000; year <= 2025; year++) {
     let option = document.createElement("option");
     option.value = year;
     option.textContent = year;
     select2.appendChild(option);
}
// university
const university = [
     "ঢাকা বিশ্ববিদ্যালয়",
     "রাজশাহী বিশ্ববিদ্যালয়",
     "চট্টগ্রাম বিশ্ববিদ্যালয়",
     "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
     "ইসলামী বিশ্ববিদ্যালয়",
     "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়"
];
const selectElement1 = document.getElementById("University/Inst");
university.forEach(university => {
     const option = document.createElement("option");
     option.value = university.toLowerCase().replace(/\s+/g, "-");
     option.textContent = university;
     selectElement1.appendChild(option);
});
// degrees
const subjects = [
"Computer Science",
     "Business",
     "Engineering",
     "Biology",
     "Mathematics",
     "Psychology"
    ];

const selectElement = document.getElementById("subject-degree");

subjects.forEach(subject => {
     const option = document.createElement("option");
     option.value = subject.toLowerCase().replace(/\s+/g, "-");
     option.textContent = subject;
     selectElement.appendChild(option);
});
// examin
const examin = [
     "MBA",
     "MSc",
     "BSc",
     "Diploma",
     "BBA",
     "Other"
];
const exam1 = document.getElementById("exam");
examin.forEach(examin => {
     const option = document.createElement("option");
     option.value = examin.toLowerCase().replace(/\s+/g, "-");
     option.textContent = examin;
     exam1.appendChild(option);
})
// 
const univ = [
     "ঢাকা বিশ্ববিদ্যালয়",
     "রাজশাহী বিশ্ববিদ্যালয়",
     "চট্টগ্রাম বিশ্ববিদ্যালয়",
     "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
     "ইসলামী বিশ্ববিদ্যালয়",
     "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়"
];
const selectElement4 = document.getElementById("University/Inst1");
univ.forEach(univ => {
     const option = document.createElement("option");
     option.value = univ.toLowerCase().replace(/\s+/g, "-");
     option.textContent = univ;
     selectElement4.appendChild(option);
});
// 
const chake = document.getElementById("toggleButton");
const fieldset = document.getElementById("myFieldset");
chake.addEventListener("click", () => {
     fieldset.disabled = !fieldset.disabled;
})
// passing year
const select3 = document.getElementById("passing");
for (let year = 2000; year <= 2025; year++) {
     let option = document.createElement("option");
     option.value = year;
     option.textContent = year;
     select3.appendChild(option);
}
// }subject or degrees
const degree = [
     "biology",
     "mathematics",
     "psychology",
     "computer science",
     "business",
     "engineering",
     "diploma",
     "bba",
     "cse",
     "eee",
     "ce",
     "me",
     "che",
     "ee",
     "mba",
     "msc",
     "bsc",
     "other"

];
const selectSubject9 = document.getElementById("Subject/Degree");
degree.forEach(degree => {
     const option = document.createElement("option");
     option.value = degree.toLowerCase().replace(/\s+/g, "-");
     option.textContent = degree;
     selectSubject9.appendChild(option);
});
// course_duration

const duration = [
     "1 year",
     "2 years",
     "3 years",
     "4 years",
     "1.2 years",
     "1.3 years",
     
];

const selectElement6 = document.getElementById("course_duration");
duration.forEach(duration => {
     const option = document.createElement("option");
     option.value = duration.toLowerCase().replace(/\s+/g, "-");
     option.textContent = duration;
     selectElement6.appendChild(option);
});
// result



function handleHscResultChange(event) {
     const container = document.getElementById("result-container");

     if (event.target.value === "GPA (out of 5)" || event.target.value === "GPA (out of 4)") {
          container.innerHTML = `
            <label for="Hsc_result-input">[Result]:</label>
            <input type="number" id="result-container" name="result-container" required>
        `;
     } else {
          container.innerHTML = ""; // Remove input for other options
     }
}

document.getElementById("result").addEventListener("change", handleHscResultChange);
//




const checkbox = document.getElementById("job-expedience");
const fieldset1 = document.getElementById("job-Container");
const button = document.getElementById("job-btn");

checkbox.addEventListener("click", () => {
     fieldset1.disabled = !checkbox.checked;
     button.disabled = !checkbox.checked;
});

// Employment options
const employmentTypes = [
     "semi-govtempoly",
     "autonomous",
     "temporary business",
     "ad-hoc business",
     "regular business",
];

const selectEmployment = document.getElementById("empoly-on");

employmentTypes.forEach(type => {
     const option = document.createElement("option");
     option.value = type.toLowerCase().replace(/\s+/g, "-");
     option.textContent = type;
     selectEmployment.appendChild(option);
});

// Adding a new fieldset dynamically
document.getElementById("job-btn").addEventListener("click", function () {
     let container = document.getElementById("job-Container");

     let newFieldset = document.createElement("fieldset");
     newFieldset.innerHTML = `
        <legend>Job Experience</legend>
        <label for="new-empoly-on">Employ-on</label>
        <select name="new-empoly-on" class="empoly-on">
            <option value="">Select</option>
        </select><br/>
        <label for="Designation/Post" class="">Designation/Post</label>
          <input type="text" id="Designation/Post" name="Designation/Post" required><br />
          <label>Date of Birth (YYYY-MM-DD):</label>
          <input type="date" name="dob" id="name" placeholder="YYYY-MM-DD"> to <input type="date" name="dob" id="my-date2" placeholder="YYYY-MM-DD"><br/>
          <!--  <input type="checkbox" id="current-date2" name="chake" value="currently working" />
          <label for="current-date">currently working</label> <br /> -->
          <!-- Organization -->
           <label for="Organization" class="">Organization</label>
          <input type="text" id="Organization" name="Organization" required><br />
          <!-- address -->
          <label for="address" class="">Address</label>
          <input type="text" id="address" name="address" required><br />
          <label for="text-area" class="">job description :</label>
          <textarea name="text" id="text-area" rows="2" col="90"></textarea>
    `;

     // Append the new fieldset after the existing container
     container.parentNode.insertBefore(newFieldset, container.nextSibling);

     // Populate the newly added select dropdown
     let newSelect = newFieldset.querySelector(".empoly-on");
     employmentTypes.forEach(type => {
          const option = document.createElement("option");
          option.value = type.toLowerCase().replace(/\s+/g, "-");
          option.textContent = type;
          newSelect.appendChild(option);
     });
     // add more button click job expriences then date time 
     // let mydata = document.getElementById("current-date2");
     // mydata.addEventListener("change", function () {
     //      const dateInput = document.getElementById("my-date2");
     //      if (this.checked) {
     //           const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
     //           dateInput.value = today;
     //      } else {
     //           dateInput.value = ""; // Clear the input if unchecked
     //      }
     // })
});
// current date
document.getElementById("current-date").addEventListener("change", function () {
     const dateInput = document.getElementById("my-date");
     if (this.checked) {
          const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
          dateInput.value = today;
     } else {
          dateInput.value = ""; // Clear the input if unchecked
     }
});









