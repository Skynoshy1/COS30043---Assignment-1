import JobList from './components/JobList.js';
import ApplicationForm from './components/ApplicationForm.js';
import ToDoList from './components/ToDoList.js';
import JobOverview from './components/JobOverview.js';
import JobDetail from './components/JobDetail.js';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: JobOverview },
    { path: '/job/:id', component: JobDetail }
  ]
});

const app = Vue.createApp({});

app.component('job-list', JobList);
app.component('application-form', ApplicationForm);
app.component('to-do-list', ToDoList);

app.use(router);
app.mount('#app');
