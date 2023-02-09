import { ResponsivePie } from '@nivo/pie'
import React from 'react'
const data=[
    {
      "id": "Geographic Sector",
      "label": "Geographic Sector",
      "value": 500,
      "color": "hsl(168, 70%, 50%)"
    },
    {
      "id": "Foreign Employment ",
      "label": "Foreign Employment ",
      "value": 300,
      "color": "hsl(154, 70%, 50%)"
    },
    {
      "id": "Co-operative",
      "label": "Co-operative",
      "value": 175,
      "color": "hsl(65, 70%, 50%)"
    },
    {
      "id": "Corporate",
      "label": "Corporate",
      "value": 200,
      "color": "hsl(352, 70%, 50%)"
    },
    {
      "id": "Nepal Government Employee",
      "label": "Nepal Government Employee",
      "value": 440,
      "color": "hsl(33, 70%, 50%)"
    },
    {
        "id": "Other's",
        "label": "Other's",
        "value": 561,
        "color": "hsl(352, 70%, 50%)"
      },
      {
        "id": "Social Organization",
        "label": "Social Organization",
        "value": 100,
        "color": "hsl(33, 70%, 50%)"
      },
      {
        "id": "Artist ",
        "label": "Artist ",
        "value": 100,
        "color": "hsl(352, 70%, 50%)"
      },
      {
        "id": "Doctor ",
        "label": "Doctor ",
        "value": 100,
        "color": "hsl(33, 70%, 50%)"
      },
      {
        "id": "Teacher ",
        "label": "Teacher ",
        "value": 100,
        "color": "hsl(352, 70%, 50%)"
      },
      {
        "id": "Army ",
        "label": "Army ",
        "value": 100,
        "color": "hsl(33, 70%, 50%)"
      },
      {
        "id": "Journalist ",
        "label": "Journalist ",
        "value": 100,
        "color": "hsl(352, 70%, 50%)"
      },
      {
        "id": "Teacher ",
        "label": "Teacher ",
        "value": 440,
        "color": "hsl(33, 70%, 50%)"
      },
      {
        "id": "Labour ",
        "label": "Labour ",
        "value": 100,
        "color": "hsl(352, 70%, 50%)"
      },
      {
        "id": "Nepal Police",
        "label": "Nepal Police",
        "value": 200,
        "color": "hsl(33, 70%, 50%)"
      }
  ]
function Private() {
  return (
    <>
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
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
    arcLinkLabelsThickness={2}
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
                id: 'Labour'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'Geographic Sector'
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
                id: 'scala'
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
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 120,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
  
  />
   </>
  )
}

export default Private
