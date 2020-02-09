import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import temperaturesWeekly from '../../../assets/json/temperatures7.json'
import MainChartExample4 from './MainChartExample4.vue'
import MarkdownText from './MainChartExample4.md'

function getAvg(data, index, key, decimal) {
  return (
    data.reduce((sum, item) => sum + item[key][index], 0) / data.length
  ).toFixed(decimal)
}

let fileNameDateLatest
let labelsLatest
let tempsLatest
let rhsLatest
// let hpasLatest
// let luxesLatest

const chartDataConverted = temperaturesWeekly.content.map((item, i) => {
  const chartDataReduced = item.data.filter(
    (obj) =>
      obj.written_date
        .split(' ')[1]
        .split('.')[0]
        .split(':')[1] === '30' // FIXME '00'でデータ取得ズレによる不足が出たため暫定で'30'
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

  if (i === 0) {
    fileNameDateLatest = fileNameDate
    labelsLatest = labels
    tempsLatest = temps
    rhsLatest = rhs
    // hpasLatest = hpas
    // luxesLatest = luxes
  }

  return {
    fileNameDate,
    // labels,
    temps,
    rhs,
    hpas,
    luxes
  }
})

// Get average
const tempsAvg = []
const rhsAvg = []
labelsLatest.map((label, i) => {
  tempsAvg.push(getAvg(chartDataConverted, i, 'temps', 1))
  rhsAvg.push(getAvg(chartDataConverted, i, 'rhs', 1))
})

// Create input data
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'
const brandFourth = '#f0f0f0'
const COLOR_BLACK = '#fff'

const targetChartData = [
  {
    label: '昨日の室温',
    borderColor: brandSuccess,
    pointHoverBackgroundColor: COLOR_BLACK,
    data: tempsLatest
  },
  {
    label: '昨日の湿度',
    borderColor: brandInfo,
    pointHoverBackgroundColor: COLOR_BLACK,
    data: rhsLatest
  },
  {
    label: '先週の平均室温',
    borderColor: brandDanger,
    pointHoverBackgroundColor: COLOR_BLACK,
    data: tempsAvg
  },
  {
    label: '先週の平均湿度',
    borderColor: brandFourth,
    pointHoverBackgroundColor: COLOR_BLACK,
    data: rhsAvg
  }
]

storiesOf('complex|MainChartExample4', module).add(
  'Default',
  () => ({
    components: { MainChartExample4 },
    template: `<MainChartExample4 \
    width="800" \
    @click="action" \
    :targetDate="targetDate" \
    :labels="labels" \
    :chartData="chartData" \
    >Default</MainChartExample4>`,
    methods: { action: action('clicked') },
    data: () => ({
      targetDate: fileNameDateLatest,
      labels: labelsLatest,
      chartData: targetChartData
    })
  }),
  {
    notes: { markdown: MarkdownText }
  }
)
