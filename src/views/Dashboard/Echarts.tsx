import React from 'react'
import ReactEcharts from 'echarts-for-react'
import styled from 'styled-components'
import rawData from "./rawData.json"

const Echart = styled.div`
  width: 100%;
  height: 100%;
  .echarts-for-react {
    width: 100%;
  }
`

const Echarts = () => {
    const data = rawData.data.map(entry=> {
        return [entry.time, entry.windSpeed, entry.R, entry.waveHeight];
    });
    const dims = {
        time: 0,
        windSpeed: 1,
        R: 2,
        waveHeight: 3,
        weatherIcon: 2,
        minTemp: 3,
        maxTemp: 4
    };
  // 配置对象
  const getOption = () => {
    return {
        // title: {
        //     left: 'center'
        // },
        // tooltip: {
        //     trigger: 'axis',
        // },
        title: [
        {
          text: 'TLV $104.419.391',
          left: '1%',
          top: '10px',
          textStyle: {
            fontSize: '18px',
            fontWeight: 300,
            color: '#2f303f',
          },
        },
        {
          text: '2021-05-19 오후 10:00 기준',
          right: '1%',
          top: '10px',
          textStyle: {
            fontSize: '14px',
            fontWeight: 300,
            color: '#727272',
          },
        },
      ],
        // 高度
        grid: {
            top: 50,
            bottom: 40,
            left:40,
            right:40
        },
        xAxis: {
            type: 'time',
            maxInterval: 3600 * 1000 * 24*30,
            splitLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
        },
        yAxis: [{
            name: '',
            nameLocation: 'middle',
            nameGap: 35,
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#ddd'
                }
            }
        }, {
            name: '',
            nameLocation: 'middle',
            nameGap: 35,
            max: 6,
            axisLine: {
                lineStyle: {
                    color: '#015DD5'
                }
            },
            splitLine: {show: true,
            lineStyle:{
                    type:'dashed'
                }}
        }, 
        // {
        //     axisLine: {show: false},
        //     axisTick: {show: false},
        //     axisLabel: {show: false},
        //     splitLine: {show: false}
        // }
        ],
     
        dataZoom: [{
            type: 'inside',
            xAxisIndex: 0,
            minSpan: 5
        },
        // {
        //     type: 'slider',
        //     xAxisIndex: 0,
        //     minSpan: 5,
        //     bottom: 50
        // }
        ],
        series: [
            {
            type: 'line',
            yAxisIndex: 1,
            showSymbol: false,
            hoverAnimation: false,
            symbolSize: 10,
            itemStyle: {
                color: '#FF9F1A'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#FF9F1A'
                    }, {
                        offset: 1, color: '#FFFAE8'
                    }]
                }
            },
            //  markLine: {
            //     silent: true,
            //     lineStyle: {
            //         color: '#333'
            //     },
            //     data: [{
            //         yAxis: 1
            //     }, {
            //         yAxis: 2
            //     }, {
            //         yAxis: 3
            //     }, {
            //         yAxis: 4
            //     }, {
            //         yAxis: 5
            //     }]
            //  },
            // lineStyle: {
            //     normal: {
            //         color: 'rgba(88,160,253,1)'
            //     }
            // // },
            // itemStyle: {
            //     normal: {
            //         color: 'rgba(88,160,253,1)'
            //     }
            // },
            encode: {
                x: dims.time,
                y: dims.waveHeight
            },
            data,
            z: 2
        },]
    };
  }

  return (
    <Echart>
      <ReactEcharts option={getOption()} style={{ width: '100%', height: '100%' }} />
    </Echart>
  )
}

export default Echarts
