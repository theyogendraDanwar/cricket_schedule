import React from 'react';

const Tab = ({onClick, label, index, currentTab,...props}) => {
  return (
    <label htmlFor="section1" onClick={onClick} className="tabs__menu-item flex-auto tc pt2 pb3 bg-animate pointer relative">
      {label}
      <div className={`min-height-4  w-100 absolute bottom-0 ${currentTab === index ? 'tab-indicator' : ''}`} />
    </label>
  )
}

export default Tab;