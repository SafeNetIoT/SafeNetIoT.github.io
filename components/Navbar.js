import React, { useState } from 'react';
import Link from 'next/link';

export const Nav = ({ title, links }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-secondary">
      <div className="container">
        <Link href="/" className="navbar-brand">
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
          <ul className="navbar-nav align-items-center gap-3"> {/* Added gap between items */}
            {links.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${item.sublinks ? 'dropdown' : ''}`}
                style={{ height: '100%', position: 'relative' }}
              >
                {item.sublinks ? (
                  <div
                    className="h-100"
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
                      style={{
                        border: 'none',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        minWidth: '200px'
                      }}
                    >

                      <hr className="my-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                      {item.sublinks.map((sublink, subIndex) => (
                        <React.Fragment key={subIndex}>
                          <Link
                            href={sublink.link}
                            className="dropdown-item py-2 px-3"
                            style={{
                              backgroundColor: 'white',
                              color: '#365B6D'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f7f7f7'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                          >
                            {sublink.title}
                          </Link>
                          {subIndex < item.sublinks.length - 1 && (
                            <hr className="my-0" style={{ borderColor: 'rgba(54,91,109,0.1)' }} />
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
    </nav>
  );
};