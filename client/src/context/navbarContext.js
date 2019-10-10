import React from 'react';

export const links = {
  dashboard: [],
  profile: [
    { name: 'projects', link: '/profile' },
    { name: 'blogs', link: '/profile/blogs' },
    { name: 'story', link: '/profile/story' },
    { name: 'settings', link: '/profile/settings' }
  ],
  notes: [
    { name: 'html/css', link: '/notes/html-css' },
    { name: 'javascript', link: '/notes/javascript' },
    { name: 'node', link: '/notes/node' },
    { name: 'react', link: '/notes/react' }
  ],
  assignments: [
    { name: 'html/css', link: '/assignments/html-css' },
    { name: 'javascript', link: '/assignments/javascript' },
    { name: 'node', link: '/assignments/node' },
    { name: 'react', link: '/assignments/react' }
  ]
}

const NavbarContext = React.createContext({ active:'dashboard', links: links.dashboard, toggleHeader: (link) => links[link] });

export const NavbarProvider = NavbarContext.Provider;
export const NavbarConsumer = NavbarContext.Consumer;
export default NavbarContext;