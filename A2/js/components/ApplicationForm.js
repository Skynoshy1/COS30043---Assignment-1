const { ref, computed } = Vue;

const ApplicationForm = {
  data() {
    return {
      formUsername: '',
      formPassword: '',
      formConfirmPassword: '',
      formEventCategory: 'Business',
      formEventName: '',
      formFirstName: '',
      formLastName: '',
      formDob: '',
      formEmail: '',
      formStreet: '',
      formSuburb: '',
      formPostcode: '',
      formMobile: '',
      showTerms: false
    };
  },
  template: `
    <div class="card p-4 shadow-sm mb-4">
      <h2 class="card-title mb-4">Job Application Form</h2>
    
      <form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php" class="row g-3">
        
        <fieldset class="border p-3 rounded mb-3">
          <legend class="w-auto px-2">Personal Information</legend>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">First Name:</label>
              <input type="text" class="form-control" v-model="formFirstName" name="firstName" required>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Last Name:</label>
              <input type="text" class="form-control" v-model="formLastName" name="lastName" required>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Date of Birth:</label>
              <input type="date" class="form-control" v-model="formDob" name="dob" required>
            </div>
          </div>
        </fieldset>

        <fieldset class="border p-3 rounded mb-3">
          <legend class="w-auto px-2">Account Details</legend>
          <div class="row">
            <div class="col-md-4 mb-3">
              <label class="form-label">Username:</label>
              <input type="text" class="form-control" v-model="formUsername" name="username" required>
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">Password:</label>
              <input type="password" class="form-control" v-model="formPassword" name="password" required>
            </div>
            <div class="col-md-4 mb-3">
              <label class="form-label">Confirm Password:</label>
              <input type="password" class="form-control" v-model="formConfirmPassword" name="confirmPassword" required>
            </div>
            <div class="col-md-12 mb-3">
              <label class="form-label">Email:</label>
              <input type="email" class="form-control" v-model="formEmail" name="email" required>
            </div>
          </div>
        </fieldset>

        <fieldset class="border p-3 rounded mb-3">
          <legend class="w-auto px-2">Address</legend>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Street Address:</label>
              <input type="text" class="form-control" v-model="formStreet" name="streetAddress">
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Suburb:</label>
              <input type="text" class="form-control" v-model="formSuburb" name="suburb">
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Postcode:</label>
              <input type="text" class="form-control" v-model="formPostcode" name="postcode" required>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Mobile Number:</label>
              <input type="text" class="form-control" v-model="formMobile" name="mobileNumber" required>
            </div>
          </div>
        </fieldset>

        <div class="col-md-6 mb-3">
          <label class="form-label">Preferred Job Category:</label>
          <select class="form-select" v-model="formEventCategory" name="preferredCategory" required>
            <option value="AI">AI</option>
            <option value="Data Science">Data Science</option>
            <option value="Software Development">Software Development</option>
            <option value="DevOps">DevOps</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>

        <div class="col-12 mt-3">
          <button type="button" class="btn btn-secondary me-2" @click="showTerms = !showTerms">Terms and Conditions</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>

        <div v-if="showTerms" class="col-12 mt-3 alert alert-info">
          <p class="mb-0">Here are the terms and conditions placeholder text...</p>
        </div>
      </form>
    </div>
  `
};

export default ApplicationForm;