import React from 'react'
import { ResponsivePie } from '@nivo/pie'

const data=[
    
    {
      "id": "Loan",
      "label": "Loan",
      "value": 700,
      "color": "hsl(352, 70%, 50%)"
    },
    {
      "id": "Equity",
      "label": "Equity",
      "value": 300,
      "color": "hsl(33, 70%, 50%)"
    }
  ]

function Investment() {

    const total=data.reduce((init,dat)=>dat.value+init,0)
 
  return (
   <>
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
   
    arcLabel={(d) => <tspan style={{fontSize:"20px"}}>{(d.value/total)*100} %</tspan>}
   
    activeOuterRadiusOffset={8}
    
    borderWidth={1}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
  
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
            ]
        ]
    }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'ruby'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'Loan'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'go'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'python'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'Equity'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'lisp'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'elixir'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'javascript'
            },
            id: 'lines'
        }
    ]}
    // legends={[
    //     {
    //         anchor: 'bottom',
    //         direction: 'row',
    //         justify: false,
    //         translateX: 0,
    //         translateY: 56,
    //         itemsSpacing: 0,
    //         itemWidth: 100,
    //         itemHeight: 18,
    //         itemTextColor: '#999',
    //         itemDirection: 'left-to-right',
    //         itemOpacity: 1,
    //         symbolSize: 18,
    //         symbolShape: 'circle',
    //         effects: [
    //             {
    //                 on: 'hover',
    //                 style: {
    //                     itemTextColor: '#000'
    //                 }
    //             }
    //         ]
    //     }
    // ]}
  
  />
   </>
  )
}

export default Investment
