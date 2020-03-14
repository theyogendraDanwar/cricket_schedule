import React from 'react';
const moment = require('moment');


const CardTile = ({data, index, ...props}) => (
  <div key={index} className="w-100 w-50-ns pr3-ns pb3-ns pb2 mb2">
    <div className="bg-white shadow-4 br2 pointer">
      <div className="divider"></div>
      <div className="flex justify-between items-center pa3">
        <span className="f7 fw5">{data.seriesName}</span>
        <span className="f7 gray mr2"> ❯ </span>
      </div>
      <div className="divider"></div>
      <div className="mh3 pb2">
        <p className="ma0 mv3 f7 fw5">
          {data.matchNumber}, {data.venue}
        </p>
        <div className="flex mb2">
          <div className="flex w-100 flex-column justify-center items-evenly">
            <div className="flex w-50 pv2">
              <img className="h1 w15 shadow-4"  src="https://images.cricket.com/teams/1_flag.png"/>
              <span className="mh3 f6 fw6">{data.homeTeamName}</span></div>
            <div className="flex w-50 pv2">
              <img className="h1 w15 shadow-4"  src="https://images.cricket.com/teams/1_flag.png"/>
              <span className="mh3 f6 fw6">{data.awayTeamName}</span></div>
          </div>
        </div>
        <div className="flex  justify-center relative items-center">
          <div className="divider bg-orange_2 min-height-4 absolute w-100 z-0"></div>
          <div className="pa1 tc gray br4 f8 fw5 bg-white truncate z-1 w-third flex justify-center">
            <div className="pa1 tc gray br4 fw5 truncate bg-orange_2 w-100">
              { `${moment.unix(data.startDate).format('HH')} hr to toss ` }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CardTile;