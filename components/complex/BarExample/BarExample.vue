<script>
import {Bar, mixins} from 'vue-chartjs'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  // props: {
  //   chartData: Object,
  //   options: Object
  // },
  mounted () {
    // // Overwriting base render method with actual data.
    // console.log('this.chartData')
    // console.log(this.chartData)
    // this.renderChart(this.chartData, this.options)
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          // data: this.chartData ? this.chartData.map(obj => obj.rh) : []
        }
      ]
    })
  }
}
</script>
