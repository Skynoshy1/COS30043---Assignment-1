export default {
  data() {
    return {
      tasks: [],
      newTaskText: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTaskText.trim()) {
        this.tasks.unshift({
          id: Date.now(),
          text: this.newTaskText.trim(),
          priority: 'High'
        });
        this.newTaskText = '';
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
    },
    togglePriority(task) {
      task.priority = task.priority === 'High' ? 'Low' : 'High';
    }
  },
  template: `
    <div class="card section-card">
      <h2 class="section-title">To-Do List</h2>
      <div class="input-group mb-3">
        <input 
          type="text" 
          v-model="newTaskText" 
          class="form-control" 
          placeholder="Enter a new task..." 
          @keyup.enter="addTask"
        >
        <button class="btn btn-primary" type="button" @click="addTask">Add</button>
      </div>

      <div v-if="tasks.length === 0" class="text-muted text-center py-3">
        No tasks added yet. Add some tasks above!
      </div>

      <ul v-else class="list-group">
        <li 
          v-for="task in tasks" 
          :key="task.id" 
          class="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-2"
        >
          <div>
            <span class="fw-bold">{{ task.text }}</span>
            <span 
              class="badge ms-2" 
              :class="task.priority === 'High' ? 'bg-danger' : 'bg-secondary'"
            >
              {{ task.priority === 'High' ? 'High Priority' : 'Low Priority' }}
            </span>
          </div>
          <div class="d-flex gap-2">
            <button 
              class="btn btn-sm btn-outline-primary" 
              @click="togglePriority(task)"
            >
              {{ task.priority === 'High' ? 'Mark as Low Priority' : 'Mark as High Priority' }}
            </button>
            <button 
              class="btn btn-sm btn-danger" 
              @click="deleteTask(task.id)"
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  `
};
