import React from 'react';

const Tabs = ({ children, currentTab, ...props }) => {
  const childrenWithProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, { currentTab, index })
  );
  return (
    <div className="tabs mw8 center mt3">
      <div className="tabs__menu flex">
        {childrenWithProps}
      </div>
    </div>
  )
}

export default Tabs;