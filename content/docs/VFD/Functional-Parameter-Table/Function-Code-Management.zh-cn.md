---
title: 5.15 PP组：功能码管理
toc: true
weight: 15
next: /docs/functional-parameter-table/control-optimization-parameters/
prev: /docs/functional-parameter-table/communication-parameters/
---
{{< callout type="info" >}}
  变频器参数属性说明
{{< /callout >}}
✅：表示该参数的设定值在变频器处于停机、运行状态中，均可更改；  
✳️：表示该参数的设定值在变频器处于运行状态时，不可更改；  
❎：表示该参数的数值是实际检测记录值，不能更改；


## PP组：功能码管理

|  功能代码|    名称  | 设定范围 | 出厂值 |属性 | DEC地址 |
| :----: |    :----   | :----   | :----:   | :----:   | :----:   |
|  PP-00|    用户密码  | 0~65535 |00000 | ✅ | 7936 |
|  PP-01|    参数初始化  | 0：无操作</br>01：恢复出厂参数，不包括电机参数</br>02：清除记录信息</br>03：恢复出厂参数，包括电机参数</br>04：保留 |000 | ✳️ | 7937 |
|  PP-02|    功能参数组显示选择 | 个位：U组显示选择</br>十位：A组显示选择</br>百位：B组显示选择</br>0：不显示</br>1：显示 |101 | ✳️ | 7938 |
|  PP-04|    功能码修改属性  | 0：可修改</br>1：不可修改 |0 | ✅ | 7940 |


探索这些文档以便了解更多内容：

{{< cards >}}
  {{< card link="https://item.taobao.com/item.htm?ft=t&id=771441899583" title="立即购买高性能矢量变频器" icon="shopping-cart" >}}

  {{< card link="/blog/faq/" title="变频器常见问题解答" icon="newspaper" >}}
{{< /cards >}}	
