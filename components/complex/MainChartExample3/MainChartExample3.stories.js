import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import temperaturesWeekly from '../../../assets/json/temperatures7.json'
import MainChartExample3 from './MainChartExample3.vue'
import MarkdownText from './MainChartExample3.md'

const chartData = temperaturesWeekly.content.map((item) => {
  const chartDataReduced = item.data.filter(
    (obj) =>
      obj.written_date
        .split(' ')[1]
        .split('.')[0]
        .split(':')[1] === '00'
  )
  const fileNameDate = item.file_datetime.split('_')[0]
  const labels = chartDataReduced.map((obj) =>
    obj.written_date
      .split(' ')[1]
      .split('.')[0]
      .slice(0, -3)
  )
  const temps = []
  const rhs = []
  const hpas = []
  const luxes = []
  chartDataReduced.map((obj) => {
    temps.push(obj.c)
    rhs.push(obj.rh)
    hpas.push(obj.hpa)
    luxes.push(obj.lux)
  })

  return {
    fileNameDate,
    labels,
    temps,
    rhs,
    hpas,
    luxes
  }
})

const fileNameDateLatest = temperaturesWeekly.content[0].file_datetime.split('_')[0]

storiesOf('complex|MainChartExample3', module).add(
  'Default',
  () => ({
    components: { MainChartExample3 },
    template: `<MainChartExample3 \
    width="800" \
    @click="action" \
    :targetDate="targetDate" \
    :labels="labels" \
    :data1="data1" \
    :data2="data2" \
    :data3="data3" \
    :data4="data4"\
    >Default</MainChartExample3>`,
    methods: { action: action('clicked') },
    data: () => ({
      targetDate: fileNameDateLatest,
      labels: chartData[0].labels,
      // data1: temps,
      data1: chartData,
      data2: chartData[0].rhs,
      data3: chartData[0].hpas,
      data4: chartData[0].luxes
    })
  }),
  {
    notes: { markdown: MarkdownText }
  }
)
