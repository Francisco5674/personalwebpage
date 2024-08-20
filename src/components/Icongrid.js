import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as BsIcons from 'react-icons/bs';
import '../CSS/IconGrid.css'; // Assuming you'll style it in a separate CSS file

const IconGrid = () => {
  const icons = [
    { id: 1, component: <FaIcons.FaPython />, link: 'https://www.python.org/' },
    { id: 2, component: <FaIcons.FaRProject />, link: 'https://www.r-project.org/'},
    { id: 3, component: <SiIcons.SiWolfram />, link: 'https://www.wolfram.com/mathematica/'},
    { id: 4, component: <SiIcons.SiGithubactions />, link: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches'},
    { id: 5, component: <BsIcons.BsFiletypeHtml />},
    { id: 6, component: <BsIcons.BsFiletypeSql />},
    { id: 7, component: <SiIcons.SiRuby />, link: 'https://www.ruby-lang.org/en/'},
    { id: 8, component: <SiIcons.SiRubyonrails/>, link: 'https://rubyonrails.org/'},
    { id: 9, component: <FaIcons.FaReact/>, link: 'https://react.dev/'},
    { id: 10, component: <SiIcons.SiPostgresql/>, link: 'https://www.postgresql.org/'},
    // Add more icons as needed
  ];

  return (
    <div className="icon-grid">
      {icons.map(icon => (
        <a key={icon.id} href={icon.link} target="_blank" rel="noopener noreferrer" className="icon-link">
          {icon.component}
        </a>
      ))}
    </div>
  );
};

export default IconGrid;
