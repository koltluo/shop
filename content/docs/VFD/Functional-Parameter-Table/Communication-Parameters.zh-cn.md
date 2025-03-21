---
title: 5.14 Pd组：通讯参数
toc: true
weight: 14
next: /docs/functional-parameter-table/function-code-management/
prev: /docs/functional-parameter-table/multi-segment-speed-instructions-and-simplified-plc/
---
{{< callout type="info" >}}
  变频器参数属性说明
{{< /callout >}}
✅：表示该参数的设定值在变频器处于停机、运行状态中，均可更改；  
✅：表示该参数的设定值在变频器处于运行状态时，不可更改；  
❎：表示该参数的数值是实际检测记录值，不能更改；


## Pd组：通讯参数

|  功能代码|    名称  | 设定范围 | 出厂值 |属性 | DEC地址 |
| :----: |    :----   | :----   | :----:   | :----:   | :----:   |
|  Pd-00|    波特率  | 0：300BPS</br>1：600BPS</br>2：1200BPS</br>3：2400BPS</br>4：4800BPS</br>5：9600BPS</br>6：19200BPS</br>7：38400BPS</br>8：57600BPS |5 | ✅ | 64768 |
|  Pd-01|    数控格式  | 0：无校验（8-N-2）</br>1：偶校验（8-E-1）</br>2：奇校验（8-O-1）</br>3：无校验（8-N-1）|3 | ✅ | 64769 |
|  Pd-02|    本机地址  | 1~247 |1 | ✅ | 64770 |
|  Pd-03|    应答延迟  | 0~20ms |2 | ✅ | 64771 |
|  Pd-04|    通讯超时时间  | 0.0（无效）</br>0.1s~60.0s |0.0 | ✅ | 64772 |
|  Pd-05|    数据传送格式选择  | 1：标准的MODBUS协议 |1 | ✅ | 64773 |
|  Pd-06|    通讯读取电流分辨率  | 0：0.01A</br>1：0.1A |0 | ✅ | 64774 |
|  Pd-07|    保留  | - |0 | ✅ | 64775 |


探索这些文档以便了解更多内容：

{{< cards >}}
  {{< card link="https://item.taobao.com/item.htm?ft=t&id=771441899583" title="立即购买高性能矢量变频器" icon="shopping-cart" >}}

  {{< card link="/blog/faq/" title="变频器常见问题解答" icon="newspaper" >}}
{{< /cards >}}	
