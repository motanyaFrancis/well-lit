export interface NavItem {
    href: string;
    label: string;
    title: string;
    color: string;
    content: string;
  }
  
  export const navItems: NavItem[] = [
    { href: '/photo', label: 'Photos', title: 'Photos', color: '#29363B', content: 'Visual Stories' },
    { href: '/film', label: 'Film', title: 'Film', color: '#EA495F', content: 'Moving Frames' },
    { href: '/music', label: 'Music', title: 'Music', color: '#F4837D', content: 'Sonic Vibes' },
    { href: '/discover', label: 'Discover', title: 'Explore More', color: '#FDCEA9', content: 'Explore More' },
    { href: '/about', label: 'About Us', title: 'About Us', color: '#99B998', content: 'Who We Are' },
    { href: '/contact', label: 'Contact Us', title: 'Reach Out', color: '#6C5B7B', content: 'Reach Out' },
  ];
  
  // Helper functions
  
  export const getNavItemByPath = (path: string): NavItem | undefined => {
    return navItems.find(item => item.href === path);
  };
  
  export const getNavItemByLabel = (label: string): NavItem | undefined => {
    return navItems.find(item => item.label.toLowerCase() === label.toLowerCase());
  };
  