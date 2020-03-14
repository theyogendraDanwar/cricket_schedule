import React, { useEffect, useState } from 'react'
import CardTile from '../../components/CardTile/CardTile'
import Spinner from '../../components/Spinner/Spinner'
import Tabs from '../../components/Tabs/Tabs'
import Tab from '../../components/Tab/Tab'
import * as hooks from '../../useHttp';
import * as CONFIG from '../../config'

const App = () => {
  const [currentTab, changeCurrentTab] = useState(0);
  const [currentActiveSession, changeActiveSession] = useState(0);
  const [obj, updateObject] = useState({ type: 'All', status: 'upcoming'})
  const [isPageLoading, cricketData] = hooks.useHttp(CONFIG.URI, obj);
  useEffect(()=> {
    updateObject({
      type: currentTab === 0 ? "All" 
      : currentTab === 1 ? "International" 
      : currentTab === 2 ? "Domestic" : "All",
      status: currentActiveSession === 0 ? "upcoming"
      : currentActiveSession === 1 ? "running" 
      : currentActiveSession === 2 ? "completed" : "upcoming",
    })
  },[currentTab, currentActiveSession])
  return (
    <div className="app-container min-vh-100 ph3 ph7-l relative">
      <div className="main-content">
        <div className="f35 db black-70 b pt3 pt0-ns pb2">Schedule</div>
        <div className="dn dn-m flex-l items-center w-80">
          {CONFIG.activeButton.map((item, index) => (
            <div key={index} onClick={() => changeActiveSession(index)} className={`ba br2 fw5 f6 pa2 tc w-25 mr3 pointer black ${currentActiveSession === index ? 'cdcgr white' : ''}`}>
              {item.toUpperCase()}
            </div>
          ))}
        </div>
        <div className="dn-l flex items-center w-100 relative flex items-center justify-center">
        <div className="min-height-4 divider bg-dark-gray absolute w-100 z-1"></div>
          {CONFIG.activeButton.map((item, index) => (
            <div key={index} onClick={() => changeActiveSession(index)} className={`ba fw5 f6 pa2 b--gray z-2 fw5 tc w-25 pointer black ${currentActiveSession === index ? ' text-cdcgr bg-white' : 'bg-light-gray'}`}>
              {item.toUpperCase()}
            </div>
          ))}
        </div>
        <Tabs currentTab={currentTab}>
          <Tab onClick={() => changeCurrentTab(0)} label="All" />
          <Tab onClick={() => changeCurrentTab(1)} label="International" />
          <Tab onClick={() => changeCurrentTab(2)} label="Domestic" />
        </Tabs>
        <div className={`min-vh-60 max-vh-80 overflow-y-scroll hidescroll ${isPageLoading ? 'flex items-center justify-center' : ''}`}>
          {!isPageLoading && cricketData.schedule ? <div className="w-100 mt1 mb1 db flex flex-wrap">
            {cricketData.schedule.map((item, index) => (
              <CardTile data={item} key={index} />
            ))}
          </div>
          : <Spinner type="loading-text"/> }
        </div>
      </div>
    </div>
  )
}

export default App