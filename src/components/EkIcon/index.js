require('react')
require('react-dom')
const iconMap = require('@/utils/const').iconMap

module.exports = props => (
  <i class={`iconfont icon-${props.type}`}/>
  // <i class="iconfont">&#xe6c5;</i>
  // <i class="iconfont">{iconMap[props.type]}</i>
)