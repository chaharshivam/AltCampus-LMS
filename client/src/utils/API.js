const baseURL = 'http://localhost:3001';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': localStorage.token || ''
};

export default {
  // User requests
  postLogin: (payload) => {
    return fetch(`${baseURL}/api/users/login`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(user => {
        localStorage.setItem("token", user.token)
        return user.profile;
      });
  },
  putUser: (payload) => {
    fetch(`${baseURL}/api/users`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ user }) => user);
  },
  putStudent: (payload) => {
    fetch(`${baseURL}/api/users`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ student }) => student)
  },
  getCurrentUser: () => {
    return fetch(`${baseURL}/api/users`, {
      method: 'GET',
      headers: headers
    })
      .then(res => res.json())
      .then(({ user }) => user)
  },
  getProfile: (id) => {
    return fetch(`${baseURL}/api/users/${id}`)
      .then(res => res.json())
      .then(({ profile }) => profile);
  },
  deleteStudent: (id) => {
    return fetch(`${baseURL}/api/users/${id}`, {
      method: 'DELETE',
      headers: headers
    })
      .then(res => res.json())
      .then(({ student }) => student);
  },

  // Articles requests
  getArticles: () => {
    /*TODO: Change required in API - according to type ? general : tech */
    return fetch(`${baseURL}/api/articles`, {
      method: 'GET',
      headers: headers
    })
      .then(res => res.json())
      .then(({ articles }) => articles);
  },
  postArticle: (payload) => {
    return fetch(`${baseURL}/api/articles`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ article }) => article)
  },
  deleteArticle: (id) => {
    return fetch(`${baseURL}/api/articles/${id}`, {
      method: 'DELETE',
      headers: headers
    })
      .then(res => res.json())
      .then(({ article }) => article)
  },
  // Notes requests
  postNote: (payload) => {
    return fetch(`${baseURL}/api/notes`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then()
  },
  putNote: (id, payload) => {
    return fetch(`${baseURL}/api/notes/${id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ note }) => note)
  },
  getNotes: () => {
    /*TODO: Change required in API - according to batch & tags*/
    return fetch(`${baseURL}/api/notes`, {
      method: 'GET',
      headers: headers
    })
      .then(res => res.json())
      .then(({ notes }) => notes);
  },
  getSingleNote: (id) => {
    return fetch(`${baseURL}/api/notes/${id}`, {
      method: 'GET',
      headers: headers
    })
      .then(res => res.json())
      .then(({ note }) => note);
  },
  deleteNote: (id) => {
    return fetch(`${baseURL}/api/notes/${id}`, {
      method: 'DELETE',
      headers: headers
    })
      .then(res => res.json())
      .then(({ note }) => note)
  },
  // Announcement requests
  postAnnouncement: (payload) => {
    return fetch(`${baseURL}/api/announcements`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ announcement }) => announcement)
  },
  getAnnouncements: () => {
    return fetch(`${baseURL}/api/announcements`, {
      method: 'GET',
      headers: headers
    })
      .then(res => res.json())
      .then(({ announcements }) => announcements);
  },
  deleteAnnouncement: (id) => {
    return fetch(`${baseURL}/api/announcements/${id}`, {
      method: 'DELETE',
      headers: headers
    })
      .then(res => res.json())
      .then(({ announcement }) => announcement)
  },
  // Assignment requests
  postAssignment: (payload) => {
    return fetch(`${baseURL}/api/assignments`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });
  },
  putAssignment: (id, payload) => {
    return fetch(`${baseURL}/api/assignments/${id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ assignment }) => assignment)
  },
  checkAssignment: (id) => {
    return fetch(`${baseURL}/api/assignments/${id}?complete=true`, {
      method: 'PUT',
      headers: headers
    })
      .then(res => res.json())
      .then(msg => msg)
  },
  getAssignments: () => {
    return fetch(`${baseURL}/api/assignments`, {
      method: 'GET',
      headers: headers
    })
      .then(res => res.json())
      .then(({ assignments }) => assignments);
  },
  deleteAssignment: (id) => {
    return fetch(`${baseURL}/api/assignments/${id}`, {
      method: 'DELETE',
      headers: headers
    })
      .then(res => res.json())
      .then(({ assignment }) => assignment)
  },
  // Projects requests
  postProject: (payload) => {
    return fetch(`${baseURL}/api/projects`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ project }) => project)
  },
  putProject: (id, payload) => {
    return fetch(`${baseURL}/api/projects/${id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ project }) => project)
  },
  getProjects: (username) => {
    return fetch(`${baseURL}/api/projects/?username=${username}`)
      .then(res => res.json())
      .then(({ projects }) => projects)
  },
  deleteProject: (id) => {
    return fetch(`${baseURL}/api/projects/${id}`, {
      method: 'DELETE',
      headers: headers
    })
      .then(res => res.json())
      .then(({ project }) => project)
  },
  // Blog requests
  postBlog: (payload) => {
    return fetch(`${baseURL}/api/blogs`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ blog }) => blog)
  },
  putBlog: (id, payload) => {
    return fetch(`${baseURL}/api/blogs/${id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(({ blog }) => blog)
  },
  getBlogs: (username) => {
    return fetch(`${baseURL}/api/blogs/${username}`, {
      method: 'GET',
      headers: headers
    })
      .then(res => res.json())
      .then(({ blogs }) => blogs)
  },
  deleteBlog: (id) => {
    return fetch(`${baseURL}/api/blogs/${id}`, {
      method: 'DELETE',
      headers: headers
    })
      .then(res => res.json())
      .then(({ blog }) => blog)
  }
};