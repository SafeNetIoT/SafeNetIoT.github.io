import React, { useState } from 'react';
import Link from 'next/link';

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
      <div className="container">
        <div className="d-flex align-items-center w-100 justify-content-between">
          <Link href="/" className="navbar-brand me-4">
            {title}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            aria-expanded={!isNavCollapsed}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
            <ul className="navbar-nav align-items-center gap-4 ms-3">
              {links.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${item.sublinks ? 'dropdown' : ''}`}
                  style={{ position: 'relative' }}
                >
                  {item.sublinks ? (
                    <div
                      onMouseEnter={() => setOpenDropdown(index)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className="nav-link dropdown-toggle bg-transparent border-0"
                        onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                        style={{ padding: '0.5rem 0' }}
                      >
                        {item.title}
                      </button>
                      <div
                        className={`dropdown-menu p-0 ${openDropdown === index ? 'show' : ''}`}
                      >
                        {item.sublinks.map((sublink, subIndex) => (
                          <React.Fragment key={subIndex}>
                            <Link
                              href={sublink.link}
                              className={`dropdown-item py-2 px-3 ${sublink.title === 'All Research' ? 'all-research' : ''}`}
                            >
                              {sublink.title}
                            </Link>
                            {subIndex < item.sublinks.length - 1 && (
                              <hr className="my-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className="nav-link"
                      style={{ padding: '0.5rem 0' }}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
