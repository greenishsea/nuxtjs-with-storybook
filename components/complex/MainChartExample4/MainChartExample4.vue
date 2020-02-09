<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: [
    'width',
    'height',
    'targetDate',
    'labels',
    'chartData',
  ],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.chartData.map((d) => ({
          label: d.label,
          backgroundColor: 'transparent',
          borderColor: d.borderColor,
          pointHoverBackgroundColor: d.pointHoverBackgroundColor,
          borderWidth: 2,
          data: d.data
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
