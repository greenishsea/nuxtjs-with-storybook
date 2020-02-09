<script>
import { Line } from 'vue-chartjs'

// const brandPrimary = '#20a8d8'
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'
const brandFourth = '#0000ff'

function convertHex (hex, opacity) {
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
  return result
}

export default {
  extends: Line,
  props: [
    'width',
    'height',
    'targetDate',
    'labels',
    'data1',
    'data2',
    'data3',
    'data4',
  ],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'C',
          backgroundColor: convertHex(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.data1
        },
        {
          label: 'Rh',
          backgroundColor: 'transparent',
          borderColor: brandSuccess,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.data2
        },
        // {
        //   label: 'Hpa',
        //   backgroundColor: 'transparent',
        //   borderColor: brandDanger,
        //   pointHoverBackgroundColor: '#fff',
        //   borderWidth: 1,
        //   borderDash: [8, 5],
        //   data: this.data3
        // },
        // {
        //   label: 'Lux',
        //   backgroundColor: 'transparent',
        //   borderColor: brandFourth,
        //   pointHoverBackgroundColor: '#fff',
        //   borderWidth: 1,
        //   borderDash: [8, 5],
        //   data: this.data4
        // }
      ]
    }, {
      maintainAspectRatio: false,
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          },
          scaleLabel: {
            display: true,
            labelString: this.targetDate
          }
        }],
        yAxes: [{
          gridLines: {
            display: true
          }
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    })
  }
}
</script>
