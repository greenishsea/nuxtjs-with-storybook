import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import temperatures1 from '../../../assets/json/temperatures1.json'
import MainChartExample2 from './MainChartExample2.vue'
import MarkdownText from './MainChartExample2.md'

let chartData = temperatures1.content[0].data
chartData = chartData.filter(
  (obj) =>
    obj.written_date
      .split(' ')[1]
      .split('.')[0]
      .split(':')[1] === '00'
)
const fileNameDate = temperatures1.content[0].file_datetime.split('_')[0]
const labels = chartData.map((obj) =>
  obj.written_date
    .split(' ')[1]
    .split('.')[0]
    .slice(0, -3)
)
const temps = []
const rhs = []
const hpas = []
const luxes = []
chartData.map((obj) => {
  temps.push(obj.c)
  rhs.push(obj.rh)
  hpas.push(obj.hpa)
  luxes.push(obj.lux)
})

storiesOf('complex|MainChartExample2', module).add(
  'Default',
  () => ({
    components: { MainChartExample2 },
    template: `<MainChartExample2 \
    width="800" \
    @click="action" \
    :targetDate="targetDate" \
    :labels="labels" \
    :data1="data1" \
    :data2="data2" \
    :data3="data3" \
    :data4="data4"\
    >Default</MainChartExample2>`,
    methods: { action: action('clicked') },
    data: () => ({
      targetDate: fileNameDate,
      labels,
      data1: temps,
      data2: rhs,
      data3: hpas,
      data4: luxes
    })
  }),
  {
    notes: { markdown: MarkdownText }
  }
)
