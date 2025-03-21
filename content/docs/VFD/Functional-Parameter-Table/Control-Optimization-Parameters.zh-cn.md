---
title: 5.16 A5组：控制优化参数
toc: true
weight: 16
next: /docs/functional-parameter-table/intelligent-constant-pressure-water-supply-parameters/
prev: /docs/functional-parameter-table/function-code-management/
---
{{< callout type="info" >}}
  变频器参数属性说明
{{< /callout >}}
✅：表示该参数的设定值在变频器处于停机、运行状态中，均可更改；  
✳️：表示该参数的设定值在变频器处于运行状态时，不可更改；  
❎：表示该参数的数值是实际检测记录值，不能更改；


## A5组：控制优化参数

|  功能代码|    名称  | 设定范围 | 出厂值 |属性 | DEC地址 |
| :----: |    :----   | :----   | :----:   | :----:   | :----:   |
|  A5-00|    DPWM切换上限选择  | 0.00Hz~15.00Hz |12.00Hz | ✅ | 42240 |
|  A5-01|    PWM调制方式  | 0：异步调制</br>1：同步调制 |0 | ✅ | 42241 |
|  A5-02|    死区补偿模式选择  | 0：不补偿</br>1：补偿模式1</br>2：补偿模式2 |1 | ✅ | 42242 |
|  A5-03|    随机PWM深度  | 0：随机PWM无效</br>1~10：PWM载频随机深度 |0 | ✅ | 42243 |
|  A5-04|    快速限流使能  | 0：不使能</br>1：使能 |1 | ✅ | 42244 |
|  A5-05|    电流检测补偿  | 0~100 |5 | ✅ | 42245 |
|  A5-06|    欠压点设置  | 100.0~2000.0V|机型确定 | ✅ | 42246 |
|  A5-07|    SVC优化模式选择  | 0：不优化</br>1：优化模式1</br>2：优化模式2 |1 | ✅ | 42247 |
|  A5-08|    死区时间调整  | 100~200% |150% | ✅ | 42248 |
|  A5-09|    过压点设定  | 200.0~2500.0V |机型确定 | ✳️ | 42249 |


探索这些文档以便了解更多内容：

{{< cards >}}
  {{< card link="https://item.taobao.com/item.htm?ft=t&id=771441899583" title="立即购买高性能矢量变频器" icon="shopping-cart" >}}

  {{< card link="/blog/faq/" title="变频器常见问题解答" icon="newspaper" >}}
{{< /cards >}}	
