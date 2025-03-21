---
title: 5.4 P3组：V/F控制参数
toc: true
weight: 4
next: /docs/functional-parameter-table/input-terminal-parameters/
prev: /docs/functional-parameter-table/vector-parameter/
---
{{< callout type="info" >}}
  变频器参数属性说明
{{< /callout >}}

✅：表示该参数的设定值在变频器处于停机、运行状态中，均可更改；  
✳️：表示该参数的设定值在变频器处于运行状态时，不可更改；  
❎：表示该参数的数值是实际检测记录值，不能更改；



## P3组：V/F控制参数

|  功能代码|    名称  | 设定范围 | 出厂值 |属性 | DEC地址 |
| :----: |    :----   | :----   | :----:   | :----:   | :----:   |
|  P3-00|  V/F曲线设定  | 1：G型</br>2：P型 |1 | ✳️ | 62208 |
|  P3-01|    转矩提升  | 1：G型</br>2：P型 |1 | ✅ | 62209 |
|  P3-02|    转矩提升截止频率  | 1：G型</br>2：P型 |1 | ✳️ | 62210 |
|  P3-03|    多点VF频率点1  | 1：G型</br>2：P型 |1 | ✳️ | 62211 |
|  P3-04|    多点VF电压点1  | 1：G型</br>2：P型 |1 | ✳️ | 62212 |
|  P3-05|    多点VF频率点2  | 1：G型</br>2：P型 |1 | ✳️ | 62213 |
|  P3-06|    多点VF电压点2  | 1：G型</br>2：P型 |1 | ✳️ | 62214 |
|  P3-07|    多点VF频率点3  | 1：G型</br>2：P型 |1 | ✳️ | 62215 |
|  P3-08|    多点VF电压点3  | 1：G型</br>2：P型 |1 | ✳️ | 62216 |
|  P3-09|    VF转差补偿增益  | 1：G型</br>2：P型 |1 | ✅ | 62217 |
|  P3-10|    VF过励磁增益 | 1：G型</br>2：P型 |1 | ✅ | 62218 |
|  P3-11|    VF振荡抑制增益  | 1：G型</br>2：P型 |1 | ✅ | 62219 |


探索这些文档以便了解更多内容：

{{< cards >}}
  {{< card link="https://item.taobao.com/item.htm?ft=t&id=771441899583" title="立即购买高性能矢量变频器" icon="shopping-cart" >}}

  {{< card link="/blog/faq/" title="变频器常见问题解答" icon="newspaper" >}}
{{< /cards >}}	
