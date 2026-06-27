import { jobs } from './JobList.js';

export default {
  computed: {
    currentJob() {
      return jobs.find(j => j.job_id === this.$route.params.id);
    }
  },
  template: `
    <div v-if="currentJob" class="card border-0">
      <div class="card-body p-0">
        <div class="d-flex justify-content-between align-items-start mb-3 border-bottom pb-3">
          <div>
            <h3 class="section-title border-0 pb-0 mb-1" style="font-size: 1.6rem;">{{ currentJob.job_title }}</h3>
            <h5 class="text-muted mb-0">{{ currentJob.company }}</h5>
          </div>
          <span class="badge bg-primary fs-6">{{ currentJob.job_id }}</span>
        </div>

        <div class="row g-3 mb-4">
          <div class="col-sm-6">
            <strong>Category:</strong> {{ currentJob.category }}
          </div>
          <div class="col-sm-6">
            <strong>Location:</strong> {{ currentJob.location }}
          </div>
          <div class="col-sm-6">
            <strong>Employment Type:</strong> {{ currentJob.employment_type }}
          </div>
          <div class="col-sm-6">
            <strong>Salary Range:</strong> {{ currentJob.salary_range }}
          </div>
          <div class="col-sm-6">
            <strong>Job Level:</strong> {{ currentJob.job_level }}
          </div>
          <div class="col-sm-6">
            <strong>Positions Available:</strong> {{ currentJob.positions_available }}
          </div>
          <div class="col-sm-6">
            <strong>Supervisor:</strong> {{ currentJob.supervisor }}
          </div>
          <div class="col-sm-6">
            <strong>Start Date:</strong> {{ currentJob.start_date }}
          </div>
        </div>

        <div class="mb-4">
          <h5 class="fw-bold mb-2">Job Description</h5>
          <p class="text-secondary" style="line-height: 1.6;">{{ currentJob.job_description }}</p>
        </div>

        <div class="mb-4">
          <h5 class="fw-bold mb-2">Required Skills</h5>
          <div>
            <span v-for="skill in currentJob.required_skills" :key="skill" class="badge bg-success me-2 mb-2">{{ skill }}</span>
          </div>
        </div>

        <div class="mb-4">
          <h5 class="fw-bold mb-2">Preferred Qualifications</h5>
          <div>
            <span v-for="pref in currentJob.preferred_qualifications" :key="pref" class="badge bg-info text-dark me-2 mb-2">{{ pref }}</span>
          </div>
        </div>

        <div class="row g-3 mb-4 pt-3 border-top">
          <div class="col-sm-6 text-muted small">
            <strong>Posted Date:</strong> {{ currentJob.posted_date }}
          </div>
          <div class="col-sm-6 text-danger text-sm-end small">
            <strong>Application Deadline:</strong> {{ currentJob.application_deadline }}
          </div>
        </div>

        <div class="pt-2">
          <span v-for="tag in currentJob.tags" :key="tag" class="badge bg-light text-secondary border me-1">#{{ tag }}</span>
        </div>
      </div>
    </div>
  `
};
