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
    // Overwriting base render method with actual data.
    console.log('this.chartData')
    console.log(this.chartData)
    this.renderChart({
      labels: this.chartData ? this.chartData[0].data.map(obj => obj.written_date.split('.')[0]) : [],
      datasets: [
        {
          label: 'c',
          backgroundColor: '#f87979',
          data: this.chartData ? this.chartData[0].data.map(
              obj => obj.c
            ) : []
        }
      ]
    })
  }
}
</script>
