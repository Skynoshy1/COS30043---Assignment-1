const { createApp, ref, computed, watch } = Vue;

// Events Data - Initialize exact data array
const eventsData = [
  {eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8},
  {eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6},
  {eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10},
  {eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4},
  {eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6},
  {eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5},
  {eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7},
  {eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12},
  {eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9},
  {eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6},
  {eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8},
  {eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7},
  {eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5},
  {eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6},
  {eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8},
  {eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4},
  {eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6},
  {eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7},
  {eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9},
  {eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5}
];

const REGISTRATION_HISTORY_KEY = 'event-registration-history';

// Vue 3 App
createApp({
  template: `
    <div class="container-fluid">
      <!-- Header Section -->
      <header class="header-section">
        <div class="container">
          <h1 class="text-center display-4 text-warning"> Event Management Web Application</h1>
          <p class="lead mb-0 text-center fw-bold display-7">Manage and explore professional events across multiple categories</p>
        </div>
      </header>

      <!-- Main Content -->
      <div class="container">
        <!-- SECTION 1: RESPONSIVE CONTENT -->
        <div class="section-card">
          <!-- Website Title -->
          <h1 class="text-center display-4 fw-bold mb-4" style="color: #667eea;">Event Management System</h1>
          
          <!-- Featured Event Management Image -->
          <div class="row mb-5">
            <div class="col-lg-10 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop" 
                alt="Event management - professionals at a conference discussing and networking" 
                class="img-fluid rounded shadow-lg"
              >
              <p class="text-muted mt-3 small text-center">
                Professional event management and conference organization
              </p>
            </div>
          </div>

          <!-- Why Choose Us? Section -->
          <div class="mb-5">
            <h1 class="section-title">Why Choose Us?</h1>
            <div class="row g-4">
              <!-- Item 1 -->
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm hover-card" style="transition: transform 0.3s;">
                  <div class="card-body text-center">
                    <div class="display-5 mb-3">🎯</div>
                    <h5 class="card-title fw-bold">Comprehensive Event Database</h5>
                    <p class="card-text text-muted">Access to 20+ curated professional events across multiple industries and categories.</p>
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm hover-card" style="transition: transform 0.3s;">
                  <div class="card-body text-center">
                    <div class="display-5 mb-3">🔍</div>
                    <h5 class="card-title fw-bold">Advanced Search & Filtering</h5>
                    <p class="card-text text-muted">Powerful search tools to find events by category, duration, or specific keywords instantly.</p>
                  </div>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm hover-card" style="transition: transform 0.3s;">
                  <div class="card-body text-center">
                    <div class="display-5 mb-3">📊</div>
                    <h5 class="card-title fw-bold">Detailed Analytics Dashboard</h5>
                    <p class="card-text text-muted">Real-time statistics on total events, categories, and duration insights for informed decisions.</p>
                  </div>
                </div>
              </div>

              <!-- Item 4 -->
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm hover-card" style="transition: transform 0.3s;">
                  <div class="card-body text-center">
                    <div class="display-5 mb-3">💼</div>
                    <h5 class="card-title fw-bold">Multi-Category Coverage</h5>
                    <p class="card-text text-muted">Events spanning Technology, Business, Marketing, and Finance sectors for diverse professionals.</p>
                  </div>
                </div>
              </div>

              <!-- Item 5 -->
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm hover-card" style="transition: transform 0.3s;">
                  <div class="card-body text-center">
                    <div class="display-5 mb-3">🔐</div>
                    <h5 class="card-title fw-bold">Secure Registration System</h5>
                    <p class="card-text text-muted">Safe and encrypted user registration with password validation and data protection.</p>
                  </div>
                </div>
              </div>

              <!-- Item 6 -->
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 shadow-sm hover-card" style="transition: transform 0.3s;">
                  <div class="card-body text-center">
                    <div class="display-5 mb-3">♿</div>
                    <h5 class="card-title fw-bold">Accessibility First Design</h5>
                    <p class="card-text text-muted">WCAG compliant interface with proper labels, semantic HTML, and keyboard navigation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECTION 2: EVENT INFORMATION (SEARCHABLE TABLE) -->
        <div class="section-card">
          <h2 class="section-title">Event Search</h2>
          
          <!-- Search Inputs Row -->
          <div class="row mb-4">
            <div class="col-md-4 mb-3">
              <label for="searchEventId" class="form-label fw-bold">Event ID:</label>
              <input 
                id="searchEventId"
                v-model="searchEventId" 
                type="text" 
                class="form-control" 
                placeholder="e.g., EVT10001"
                aria-label="Search by event ID"
              >
            </div>
            <div class="col-md-4 mb-3">
              <label for="searchEventName" class="form-label fw-bold">Event Name:</label>
              <input 
                id="searchEventName"
                v-model="searchEventName" 
                type="text" 
                class="form-control" 
                placeholder="e.g., Tech Innovations"
                aria-label="Search by event name"
              >
            </div>
            <div class="col-md-4 mb-3">
              <label for="searchDuration" class="form-label fw-bold">Duration:</label>
              <input 
                id="searchDuration"
                v-model="searchDuration" 
                type="number" 
                class="form-control" 
                placeholder="e.g., 8"
                aria-label="Search by duration in hours"
              >
            </div>
          </div>

          <!-- Category Filter Radio Buttons -->
          <div class="mb-4 p-3 bg-light rounded">
            <p class="fw-bold mb-3">Filter by Category:</p>
            <div class="row">
              <div class="col-md-2 col-sm-3">
                <div class="form-check">
                  <input 
                    id="categoryAll"
                    v-model="selectedCategoryFilter" 
                    type="radio" 
                    value="All" 
                    class="form-check-input"
                    aria-label="Show all categories"
                  >
                  <label class="form-check-label" for="categoryAll">All</label>
                </div>
              </div>
              <div class="col-md-2 col-sm-3">
                <div class="form-check">
                  <input 
                    id="categoryTech"
                    v-model="selectedCategoryFilter" 
                    type="radio" 
                    value="Technology" 
                    class="form-check-input"
                    aria-label="Filter Technology category"
                  >
                  <label class="form-check-label" for="categoryTech">Technology</label>
                </div>
              </div>
              <div class="col-md-2 col-sm-3">
                <div class="form-check">
                  <input 
                    id="categoryBiz"
                    v-model="selectedCategoryFilter" 
                    type="radio" 
                    value="Business" 
                    class="form-check-input"
                    aria-label="Filter Business category"
                  >
                  <label class="form-check-label" for="categoryBiz">Business</label>
                </div>
              </div>
              <div class="col-md-2 col-sm-3">
                <div class="form-check">
                  <input 
                    id="categoryMkt"
                    v-model="selectedCategoryFilter" 
                    type="radio" 
                    value="Marketing" 
                    class="form-check-input"
                    aria-label="Filter Marketing category"
                  >
                  <label class="form-check-label" for="categoryMkt">Marketing</label>
                </div>
              </div>
              <div class="col-md-2 col-sm-3">
                <div class="form-check">
                  <input 
                    id="categoryFin"
                    v-model="selectedCategoryFilter" 
                    type="radio" 
                    value="Finance" 
                    class="form-check-input"
                    aria-label="Filter Finance category"
                  >
                  <label class="form-check-label" for="categoryFin">Finance</label>
                </div>
              </div>
            </div>
          </div>

          <!-- Events Table -->
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead class="table-light">
                <tr>
                  <th scope="col">Event ID</th>
                  <th scope="col">Event Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Duration (hours)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="event in filteredEventsTable" :key="event.eventid">
                  <td>{{ event.eventid }}</td>
                  <td>{{ event.eventname }}</td>
                  <td>
                    <span 
                      class="badge"
                      :class="{
                        'bg-info': event.category === 'Technology',
                        'bg-primary': event.category === 'Business',
                        'bg-success': event.category === 'Marketing',
                        'bg-warning text-dark': event.category === 'Finance'
                      }"
                    >
                      {{ event.category }}
                    </span>
                  </td>
                  <td>{{ event.durationhour }}h</td>
                </tr>
              </tbody>
            </table>
            <div v-if="filteredEventsTable.length === 0" class="alert alert-info mt-3">
              No events match your search criteria. Try adjusting your filters.
            </div>
          </div>
          <p class="text-muted small mt-3">Showing {{ filteredEventsTable.length }} of {{ eventsData.length }} events</p>
        </div>

        <!-- SECTION 3: REGISTRATION FORM WITH DYNAMIC LOGIC -->
        <div class="section-card">
          <h2 class="section-title">Section 3: Event Registration Form</h2>
          
          <!-- Registration Form -->
          <form @submit.prevent="handleRegistration" class="row g-3">
            <!-- Username Field -->
            <div class="col-md-6">
              <label for="username" class="form-label fw-bold">Username:</label>
              <input 
                id="username"
                v-model="formUsername" 
                type="text" 
                class="form-control" 
                placeholder="Enter your username"
                aria-label="Username"
                required
              >
            </div>

            <!-- Password Field -->
            <div class="col-md-6">
              <label for="password" class="form-label fw-bold">Password:</label>
              <input 
                id="password"
                v-model="formPassword" 
                type="password" 
                class="form-control" 
                placeholder="Enter your password"
                aria-label="Password"
                required
              >
            </div>

            <!-- Confirm Password Field -->
            <div class="col-md-6">
              <label for="confirmPassword" class="form-label fw-bold">Confirm Password:</label>
              <input 
                id="confirmPassword"
                v-model="formConfirmPassword" 
                type="password" 
                class="form-control"
                :class="{ 'is-invalid': passwordMismatch && formConfirmPassword }"
                placeholder="Re-enter your password"
                aria-label="Confirm Password"
                required
              >
              <!-- Password Mismatch Warning -->
              <div v-if="passwordMismatch && formConfirmPassword" class="invalid-feedback d-block mt-2">
                <strong>⚠️ Passwords do not match!</strong> Please ensure both password fields are identical.
              </div>
            </div>

            <!-- Event Category Selection (Radio Buttons) -->
            <div class="col-12">
              <fieldset>
                <legend class="fw-bold mb-3">Select Event Category:</legend>
                <div class="row">
                  <div class="col-md-3 col-sm-6 mb-3">
                    <div class="form-check">
                      <input 
                        id="categoryTechnology"
                        v-model="formEventCategory" 
                        type="radio" 
                        value="Technology" 
                        class="form-check-input"
                        aria-label="Technology category"
                      >
                      <label class="form-check-label" for="categoryTechnology">Technology</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 mb-3">
                    <div class="form-check">
                      <input 
                        id="categoryBusiness"
                        v-model="formEventCategory" 
                        type="radio" 
                        value="Business" 
                        class="form-check-input"
                        aria-label="Business category"
                      >
                      <label class="form-check-label" for="categoryBusiness">Business</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 mb-3">
                    <div class="form-check">
                      <input 
                        id="categoryMarketing"
                        v-model="formEventCategory" 
                        type="radio" 
                        value="Marketing" 
                        class="form-check-input"
                        aria-label="Marketing category"
                      >
                      <label class="form-check-label" for="categoryMarketing">Marketing</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6 mb-3">
                    <div class="form-check">
                      <input 
                        id="categoryFinance"
                        v-model="formEventCategory" 
                        type="radio" 
                        value="Finance" 
                        class="form-check-input"
                        aria-label="Finance category"
                      >
                      <label class="form-check-label" for="categoryFinance">Finance</label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <!-- Event Name Dropdown (Dynamic based on Category) -->
            <div class="col-md-6">
              <label for="eventSelect" class="form-label fw-bold">Select Event Name:</label>
              <select 
                id="eventSelect"
                v-model="formEventName" 
                class="form-select"
                aria-label="Select an event in the chosen category"
                required
              >
                <option value="">-- Choose an event --</option>
                <option 
                  v-for="event in filteredEventsByCategory" 
                  :key="event.eventid" 
                  :value="event.eventname"
                >
                  {{ event.eventname }}
                </option>
              </select>
            </div>
            <!-- Form Submit Button -->
            <div class="col-12 mt-4">
              <button 
                type="submit" 
                class="btn btn-primary btn-lg px-5"
                :disabled="passwordMismatch"
                aria-label="Submit registration form"
              >
                <span v-if="passwordMismatch">⚠️ Fix Password Mismatch</span>
                <span v-else>✓ Complete Registration</span>
              </button>
              <small class="d-block mt-2 text-muted" v-if="passwordMismatch">
                Please ensure passwords match before submitting.
              </small>
            </div>
          </form>

          <div v-if="registrationMessage" class="alert alert-success mt-4 mb-0" role="alert">
            {{ registrationMessage }}
          </div>

          <!-- Reactive Summary Section -->
          <div class="mt-5 pt-4 border-top">
            <h4 class="fw-bold mb-4" style="color: #667eea;">Registration Summary</h4>
            <div class="row">
              <div class="col-md-6 mb-3">
                <div class="card bg-light border-0 shadow-sm">
                  <div class="card-body">
                    <small class="text-muted fw-bold">👤 Username:</small>
                    <p class="card-text fw-bold fs-5 mt-2">
                      {{ formUsername || '(not provided)' }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="card bg-light border-0 shadow-sm">
                  <div class="card-body">
                    <small class="text-muted fw-bold">🏷️ Selected Category:</small>
                    <p class="card-text fw-bold fs-5 mt-2">
                      <span class="badge bg-primary" style="font-size: 1rem;">{{ formEventCategory }}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-12 mb-3">
                <div class="card bg-light border-0 shadow-sm">
                  <div class="card-body">
                    <small class="text-muted fw-bold">📌 Selected Event:</small>
                    <p class="card-text fw-bold fs-5 mt-2">
                      {{ formEventName || '(not selected)' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5 pt-4 border-top">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
              <h4 class="fw-bold mb-0" style="color: #667eea;">Registration History</h4>
              <button
                v-if="registrationHistory.length > 0"
                type="button"
                class="btn btn-outline-danger"
                @click="clearRegistrationHistory"
              >
                Clear History
              </button>
            </div>

            <div v-if="registrationHistory.length === 0" class="alert alert-info mb-0">
              No registration history
            </div>

            <div v-else class="table-responsive">
              <table class="table table-striped table-hover align-middle mb-0">
                <thead class="table-light">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Username</th>
                    <th scope="col">Category</th>
                    <th scope="col">Event</th>
                    <th scope="col">Registered At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(registration, index) in registrationHistory" :key="registration.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ registration.username }}</td>
                    <td><span class="badge bg-primary">{{ registration.category }}</span></td>
                    <td>{{ registration.eventName }}</td>
                    <td>{{ registration.registeredAt }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Footer Section -->
        <footer class="footer-section">
          <div class="container">
            <p class="mb-2">
              <strong>Event Management Web Application</strong> - Assignment 1
            </p>
            <p class="small mb-0">
              ♿ Built with Accessibility First | Vue 3 + Bootstrap 5 | WCAG Compliant
            </p>
          </div>
        </footer>
      </div>
    </div>
  `,

  setup() {
    // State for Section 2: Searchable Table Filters
    const searchEventId = ref('');
    const searchEventName = ref('');
    const searchDuration = ref('');
    const selectedCategoryFilter = ref('All');

    // State for Section 3: Registration Form
    const formUsername = ref('');
    const formPassword = ref('');
    const formConfirmPassword = ref('');
    const formEventCategory = ref('Business'); // DEFAULT: Business
    const formEventName = ref('');
    const registrationHistory = ref(loadRegistrationHistory());
    const registrationMessage = ref('');

    // Computed property for Section 2: Multi-criteria filtering
    const filteredEventsTable = computed(() => {
      return eventsData.filter(event => {
        // Filter by Event ID (case-insensitive partial match)
        const matchId = event.eventid.toLowerCase().includes(searchEventId.value.toLowerCase());
        
        // Filter by Event Name (case-insensitive partial match)
        const matchName = event.eventname.toLowerCase().includes(searchEventName.value.toLowerCase());
        
        // Filter by Duration (exact number match)
        const matchDuration = searchDuration.value === '' || 
                             event.durationhour.toString() === searchDuration.value;
        
        // Filter by Category
        const matchCategory = selectedCategoryFilter.value === 'All' || 
                             event.category === selectedCategoryFilter.value;
        
        // Return true only if all criteria match
        return matchId && matchName && matchDuration && matchCategory;
      });
    });

    // Computed property for Section 3: Password validation
    const passwordMismatch = computed(() => {
      return formPassword.value !== formConfirmPassword.value && formPassword.value !== '';
    });

    // Computed property for Section 3: Filter events by selected category
    const filteredEventsByCategory = computed(() => {
      return eventsData.filter(event => event.category === formEventCategory.value);
    });

    watch(formEventCategory, () => {
      formEventName.value = '';
    });

    function loadRegistrationHistory() {
      const savedHistory = localStorage.getItem(REGISTRATION_HISTORY_KEY);

      if (!savedHistory) {
        return [];
      }

      try {
        const parsedHistory = JSON.parse(savedHistory);
        return Array.isArray(parsedHistory) ? parsedHistory : [];
      } catch (error) {
        return [];
      }
    }

    function saveRegistrationHistory(history) {
      localStorage.setItem(REGISTRATION_HISTORY_KEY, JSON.stringify(history));
    }

    function resetRegistrationForm() {
      formUsername.value = '';
      formPassword.value = '';
      formConfirmPassword.value = '';
      formEventCategory.value = 'Business';
      formEventName.value = '';
    }

    function handleRegistration() {
      if (passwordMismatch.value || !formUsername.value.trim() || !formEventName.value) {
        registrationMessage.value = '';
        return;
      }

      const newRegistration = {
        id: Date.now(),
        username: formUsername.value.trim(),
        category: formEventCategory.value,
        eventName: formEventName.value,
        registeredAt: new Date().toLocaleString('en-GB')
      };

      registrationHistory.value = [newRegistration, ...registrationHistory.value];
      saveRegistrationHistory(registrationHistory.value);
      registrationMessage.value = `Registration saved for ${newRegistration.username} in ${newRegistration.eventName}.`;
      resetRegistrationForm();
    }

    function clearRegistrationHistory() {
      registrationHistory.value = [];
      registrationMessage.value = '';
      localStorage.removeItem(REGISTRATION_HISTORY_KEY);
    }

    // Computed properties for statistics
    const totalEvents = computed(() => eventsData.length);
    
    const totalCategories = computed(() => {
      return new Set(eventsData.map(e => e.category)).size;
    });

    const averageDuration = computed(() => {
      const sum = eventsData.reduce((acc, e) => acc + e.durationhour, 0);
      return (sum / eventsData.length).toFixed(1);
    });

    const totalDuration = computed(() => {
      return eventsData.reduce((acc, e) => acc + e.durationhour, 0);
    });

    return {
      // Section 2 data
      searchEventId,
      searchEventName,
      searchDuration,
      selectedCategoryFilter,
      filteredEventsTable,
      
      // Section 3 data
      formUsername,
      formPassword,
      formConfirmPassword,
      formEventCategory,
      formEventName,
      passwordMismatch,
      filteredEventsByCategory,
      registrationHistory,
      registrationMessage,
      handleRegistration,
      clearRegistrationHistory,
      
      // Statistics
      totalEvents,
      totalCategories,
      averageDuration,
      totalDuration,
      eventsData
    };
  }
}).mount('#app');
