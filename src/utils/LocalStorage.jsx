const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "emp1@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve login issue in app",
        date: "2026-05-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update UI",
        description: "Improve dashboard design",
        date: "2026-05-18",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write API docs",
        description: "Document all endpoints",
        date: "2026-05-22",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstName: "Amit",
    email: "emp2@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create landing page",
        description: "Design homepage layout",
        date: "2026-05-19",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix navbar",
        description: "Resolve responsive issue",
        date: "2026-05-17",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy app",
        description: "Deploy to Netlify",
        date: "2026-05-21",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstName: "Suresh",
    email: "emp3@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Test features",
        description: "QA testing",
        date: "2026-05-20",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix bugs",
        description: "Resolve reported issues",
        date: "2026-05-18",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize code",
        description: "Improve performance",
        date: "2026-05-22",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "Vikas",
    email: "emp4@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create icons",
        description: "Design UI icons",
        date: "2026-05-19",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update theme",
        description: "Dark mode support",
        date: "2026-05-17",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix CSS",
        description: "Resolve layout issues",
        date: "2026-05-21",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    firstName: "Ankit",
    email: "emp5@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Client meeting",
        description: "Discuss requirements",
        date: "2026-05-20",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare report",
        description: "Weekly progress report",
        date: "2026-05-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix deadline issue",
        description: "Handle delay problem",
        date: "2026-05-22",
        category: "Management",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@gmail.com",
    password: "123"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}