const ApplicationForm = {
  data() {
    return {
      formFirstName: '',
      formLastName: '',
      formUsername: '',
      formPassword: '',
      formConfirmPassword: '',
      formEmail: '',
      formStreet: '',
      formSuburb: '',
      formPostcode: '',
      formMobile: '',
      formDob: '',
      formEventCategory: '',
      showTerms: false,
      errors: {}
    };
  },
  methods: {
    validateForm(e) {
      this.errors = {};
      const alphaRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const specialCharRegex = /[$\%^\&\*]/;
      const postcodeRegex = /^\d{4}$/;
      const mobileRegex = /^04\d{8}$/;

      if (!this.formFirstName) {
        this.errors.firstName = 'First name is required.';
      } else if (!alphaRegex.test(this.formFirstName)) {
        this.errors.firstName = 'First name must contain letters only.';
      }

      if (!this.formLastName) {
        this.errors.lastName = 'Last name is required.';
      } else if (!alphaRegex.test(this.formLastName)) {
        this.errors.lastName = 'Last name must contain letters only.';
      }

      if (!this.formUsername) {
        this.errors.username = 'Username is required.';
      } else if (this.formUsername.length < 3) {
        this.errors.username = 'Username must be at least 3 characters.';
      }

      if (!this.formPassword) {
        this.errors.password = 'Password is required.';
      } else if (this.formPassword.length < 8) {
        this.errors.password = 'Password must be at least 8 characters.';
      } else if (!specialCharRegex.test(this.formPassword)) {
        this.errors.password = 'Password must contain at least one special character from [$, %, ^, &, *].';
      }

      if (!this.formConfirmPassword) {
        this.errors.confirmPassword = 'Confirm password is required.';
      } else if (this.formConfirmPassword !== this.formPassword) {
        this.errors.confirmPassword = 'Passwords do not match.';
      }

      if (!this.formEmail) {
        this.errors.email = 'Email is required.';
      } else if (!emailRegex.test(this.formEmail)) {
        this.errors.email = 'Email format is invalid.';
      }

      if (this.formStreet && this.formStreet.length > 40) {
        this.errors.streetAddress = 'Street address must be at most 40 characters.';
      }

      if (this.formSuburb && this.formSuburb.length > 20) {
        this.errors.suburb = 'Suburb must be at most 20 characters.';
      }

      if (!this.formPostcode) {
        this.errors.postcode = 'Postcode is required.';
      } else if (!postcodeRegex.test(this.formPostcode)) {
        this.errors.postcode = 'Postcode must be exactly 4 digits.';
      }

      if (!this.formMobile) {
        this.errors.mobileNumber = 'Mobile number is required.';
      } else if (!mobileRegex.test(this.formMobile)) {
        this.errors.mobileNumber = 'Mobile number must be exactly 10 digits and start with 04.';
      }

      if (!this.formDob) {
        this.errors.dob = 'Date of birth is required.';
      } else {
        const birthDate = new Date(this.formDob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        if (age < 16) {
          this.errors.dob = 'You must be at least 16 years old.';
        }
      }

      if (!this.formEventCategory) {
        this.errors.preferredCategory = 'Please select a preferred category.';
      }

      if (Object.keys(this.errors).length > 0) {
        e.preventDefault();
      }
    }
  },
  template: `
    <div class="card section-card">
      <h2 class="section-title">Job Application Form</h2>
      <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" @submit="validateForm" novalidate>
        
        <fieldset class="mb-4 p-3 border rounded">
          <legend class="w-auto px-2 fs-5 fw-bold">Personal Information</legend>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" id="firstName" v-model="formFirstName" name="firstName" class="form-control" :class="{'is-invalid': errors.firstName}">
              <div class="invalid-feedback">{{ errors.firstName }}</div>
            </div>
            <div class="col-md-6">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" id="lastName" v-model="formLastName" name="lastName" class="form-control" :class="{'is-invalid': errors.lastName}">
              <div class="invalid-feedback">{{ errors.lastName }}</div>
            </div>
            <div class="col-md-6">
              <label for="dob" class="form-label">Date of Birth</label>
              <input type="date" id="dob" v-model="formDob" name="dob" class="form-control" :class="{'is-invalid': errors.dob}">
              <div class="invalid-feedback">{{ errors.dob }}</div>
            </div>
            <div class="col-md-6">
              <label for="mobileNumber" class="form-label">Mobile Number</label>
              <input type="text" id="mobileNumber" v-model="formMobile" name="mobileNumber" class="form-control" :class="{'is-invalid': errors.mobileNumber}">
              <div class="invalid-feedback">{{ errors.mobileNumber }}</div>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" id="email" v-model="formEmail" name="email" class="form-control" :class="{'is-invalid': errors.email}">
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="col-md-6">
              <label for="preferredCategory" class="form-label">Preferred Category</label>
              <select id="preferredCategory" v-model="formEventCategory" name="preferredCategory" class="form-select" :class="{'is-invalid': errors.preferredCategory}">
                <option value="">Select Category</option>
                <option value="AI">AI</option>
                <option value="Data Science">Data Science</option>
                <option value="Software Development">Software Development</option>
                <option value="DevOps">DevOps</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
              <div class="invalid-feedback">{{ errors.preferredCategory }}</div>
            </div>
          </div>
        </fieldset>

        <fieldset class="mb-4 p-3 border rounded">
          <legend class="w-auto px-2 fs-5 fw-bold">Account Details</legend>
          <div class="row g-3">
            <div class="col-md-4">
              <label for="username" class="form-label">Username</label>
              <input type="text" id="username" v-model="formUsername" name="username" class="form-control" :class="{'is-invalid': errors.username}">
              <div class="invalid-feedback">{{ errors.username }}</div>
            </div>
            <div class="col-md-4">
              <label for="password" class="form-label">Password</label>
              <input type="password" id="password" v-model="formPassword" name="password" class="form-control" :class="{'is-invalid': errors.password}">
              <div class="invalid-feedback">{{ errors.password }}</div>
            </div>
            <div class="col-md-4">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input type="password" id="confirmPassword" v-model="formConfirmPassword" name="confirmPassword" class="form-control" :class="{'is-invalid': errors.confirmPassword}">
              <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
            </div>
          </div>
        </fieldset>

        <fieldset class="mb-4 p-3 border rounded">
          <legend class="w-auto px-2 fs-5 fw-bold">Address</legend>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="streetAddress" class="form-label">Street Address (Optional)</label>
              <input type="text" id="streetAddress" v-model="formStreet" name="streetAddress" class="form-control" :class="{'is-invalid': errors.streetAddress}">
              <div class="invalid-feedback">{{ errors.streetAddress }}</div>
            </div>
            <div class="col-md-4">
              <label for="suburb" class="form-label">Suburb (Optional)</label>
              <input type="text" id="suburb" v-model="formSuburb" name="suburb" class="form-control" :class="{'is-invalid': errors.suburb}">
              <div class="invalid-feedback">{{ errors.suburb }}</div>
            </div>
            <div class="col-md-2">
              <label for="postcode" class="form-label">Postcode</label>
              <input type="text" id="postcode" v-model="formPostcode" name="postcode" class="form-control" :class="{'is-invalid': errors.postcode}">
              <div class="invalid-feedback">{{ errors.postcode }}</div>
            </div>
          </div>
        </fieldset>

        <div class="mb-4">
          <button type="button" class="btn btn-outline-secondary btn-sm mb-2" @click="showTerms = !showTerms">
            {{ showTerms ? 'Hide' : 'Show' }} Terms & Conditions
          </button>
          <p v-if="showTerms" class="alert alert-info p-3 mt-2 small" style="line-height: 1.5;">
            By submitting this application form, you consent to the collection and processing of your personal information by Insight Hire for the purposes of recruitment and job matching. You agree that the details provided are accurate and complete to the best of your knowledge.
          </p>
        </div>

        <div class="text-end">
          <button type="submit" class="btn btn-primary px-5 btn-lg">Submit Application</button>
        </div>
      </form>
    </div>
  `
};

export default ApplicationForm;