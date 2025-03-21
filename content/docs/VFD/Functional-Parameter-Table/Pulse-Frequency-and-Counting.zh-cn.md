---
title: 5.12 Pb组：摆频、定长和计数
toc: true
weight: 12
next: /docs/functional-parameter-table/multi-segment-speed-instructions-and-simplified-plc/
prev: /docs/functional-parameter-table/pid-function-parameters/
---
{{< callout type="info" >}}
  变频器参数属性说明
{{< /callout >}}
✅：表示该参数的设定值在变频器处于停机、运行状态中，均可更改；  
✳️：表示该参数的设定值在变频器处于运行状态时，不可更改；  
❎：表示该参数的数值是实际检测记录值，不能更改；


## Pb组：摆频、定长和计数

|  功能代码|    名称  | 设定范围 | 出厂值 |属性 | DEC地址 |
| :----: |    :----   | :----   | :----:   | :----:   | :----:   |
|  Pb-00|    摆频设定方式  | 0：相对于中心频率</br>1：相对于最大频率 |0 | ✅ | 64256 |
|  Pb-01|    摆频幅度  | 0.0~100.0% |0.0% | ✅ | 64257 |
|  Pb-02|    突跳频率幅度  | 0.0~50.0% |0.0% | ✅ | 64258 |
|  Pb-03|    摆频周期  | 0.1~3000.0s |10.0s | ✅ | 64259 |
|  Pb-04|    摆频的三角波上升时间  | 0.1~100.0% |50.0% | ✅ | 64260 |
|  Pb-05|    设定长度  | 0~65535m |1000m | ✅ | 64261 |
|  Pb-06|    实际长度  | 0~65535m |0m | ✅ | 64262 |
|  Pb-07|    每米脉冲数  | 0.1~6553.5 |100.0 | ✅ | 64263 |
|  Pb-08|    设定计数值  | 1~65535 |1000 | ✅ | 64264 |
|  Pb-09|    指定计数值  | 1~65535 |1000 | ✅ | 64265 |


探索这些文档以便了解更多内容：

{{< cards >}}
  {{< card link="https://item.taobao.com/item.htm?ft=t&id=771441899583" title="立即购买高性能矢量变频器" icon="shopping-cart" >}}

  {{< card link="/blog/faq/" title="变频器常见问题解答" icon="newspaper" >}}
{{< /cards >}}	
