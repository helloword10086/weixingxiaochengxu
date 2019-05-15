start  从页面到了组件
页面是老板，组件是员工， 页面是组件组成的，
start  老板也要知道状态，Page  data 
<countdown start="{{start}}">
</countdown>
- 组件的数据  data（内部数据） +properties(外部)
- properties 里的 observer  接收到值改变时执行 观察者