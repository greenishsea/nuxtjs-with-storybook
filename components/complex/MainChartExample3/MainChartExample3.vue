<script>
import { Line } from 'vue-chartjs'

const greenColors = [
  '#4dbd74',
  '#5ec381',
  '#70ca8f',
  '#82d09d',
  '#94d7ab',
  '#a6deb9',
  '#a6deb9'
]
const blueColors = [
  '#63c2de',
  '#72c8e1',
  '#82cee4',
  '#91d4e7',
  '#a1daeb',
  '#b1e0ee',
  '#c0e6f1'
]

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
      datasets: this.data1.map((d, i) => ({
          label: '室温' + (i + 1) + '日前',
          backgroundColor: 'transparent',
          borderColor: greenColors[i],
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: d.temps
      }))
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
