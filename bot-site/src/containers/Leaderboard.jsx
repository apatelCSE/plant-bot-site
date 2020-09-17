import React, {Component} from 'react';
import './Leaderboard.css';

function BarGroup(props) {
    let barPadding = 2;
    let barColour = '#007bff';
    // sets width of each bar
    let widthScale = d => d * 50;
  
    let width = widthScale(props.d.score);
    let yMid = props.barHeight * 0.5;
    
    return <g className="bar-group">
      <text className="name-label" x="-10" y={yMid} alignmentBaseline="middle" >{props.d.name}</text>
      <rect y={barPadding * 0.5} width={width} height={props.barHeight - barPadding} fill={barColour} />
      <text className="value-label" x={width + 10} y={yMid} alignmentBaseline="middle" >{props.d.score}</text>
    </g>
}
  
class BarChart extends Component {
    render() {
      let barHeight = 30;
      let barGroups = this.props.bots.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                                                      <BarGroup d={d} barHeight={barHeight} />
                                                    </g>)                         
      
      return <svg width="400" height={100+50*this.props.bots.length} >
        <g className="container">
          <g className="chart" transform="translate(130,25)">
            {barGroups}
          </g>
        </g>
      </svg>
    }
}

export default BarChart;