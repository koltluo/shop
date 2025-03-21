---
title: 5.8 P7组：键盘与显示
toc: true
weight: 8
next: /docs/functional-parameter-table/accessibility-features/
prev: /docs/functional-parameter-table/start-stop-control-parameters/
---
{{< callout type="info" >}}
  变频器参数属性说明
{{< /callout >}}
✅：表示该参数的设定值在变频器处于停机、运行状态中，均可更改；  
✳️：表示该参数的设定值在变频器处于运行状态时，不可更改；  
❎：表示该参数的数值是实际检测记录值，不能更改；


## P7组：键盘与显示

|  功能代码|    名称  | 设定范围 | 出厂值 |属性 | DEC地址 |
| :----: |    :----   | :----   | :----:   | :----:   | :----:   |
|  P7-01|    MF.K键功能选择  | 0：MF.K无效</br>1：操作面板命令通道与远程命令通道（端子命令通道或通讯命令通道）切换</br>2：正反转切换</br>3：正转点动</br>4：反转点动 |2 | ✅ | 63233 |
|  P7-02|    STOP/RESET键功能  | 0：只在键盘操作方式下，STOP/RESET键停机功能有效</br>1：在任何情况下，STOP/RESET键停机功能均有效 |1 | ✅ | 63234 |
|  P7-03|    LED运行显示参数1  | 0000~FFFF</br>Bit00：运行频率1（Hz）</br>Bit01：设定频率（Hz）</br> Bit02：母线电压（V）</br>Bit03：输出电压（V）</br>Bit04：输出电流（A）</br>Bit05：输出功率（KW）</br>Bit06：输出转矩（%）</br>Bit07：X输入状态</br>Bit08：Y输出状态</br>Bit09：AI1电压（V）</br>Bit10：AI2电压（V）</br>Bit11：AI3面板电位器电压（V）</br>Bit12：计数值</br>Bit13：保留</br>Bit14：负载速度显示</br>Bit15：PID设定（供水宏显示压力值）|001F | ✅ | 63235 |
|  P7-04|    LED运行显示参数2  | 0000~FFFF</br>Bit00：PID反馈（供水宏显示压力值）</br>Bit01：PLC阶段</br> Bit02：HDI输入脉冲频率（kHz）</br>Bit03：运行频率2（Hz）</br>Bit04：剩余运行时间</br>Bit05：AI1校正前电压（V）</br>Bit06：AI2校正前电压（V）</br>Bit07：AI3面板电位器校正前电压（V）</br>Bit08：线速度</br>Bit09：当前上电时间（Hour）</br>Bit10：当前运行时间（Min）</br>Bit11：HDI输入脉冲频率（Hz）</br>Bit12：通讯设定值</br>Bit13：编码器反馈速度（Hz）</br>Bit14：主频率X显示（Hz）</br>Bit15：辅助频率Y显示（Hz） | ✅ | 63236 |
|  P7-05|    LED停机显示参数  | 0000~FFFF</br>Bit00：设定频率（Hz）</br>Bit01：母线电压（V）</br> Bit02：X输入状态</br>Bit03：Y输出状态</br>Bit04：AI1电压（V）</br>Bit05：AI2电压（V）</br>Bit06：AI3面板电位器电压（V）</br>Bit07：计数值</br>Bit08：长度值</br>Bit09：PLC阶段</br>Bit10：负载速度</br>Bit11：PID设定（压力）</br>Bit12：HDI输入脉冲频率（Hz）</br>Bit13：PID反馈（压力）（Hz） |0033 | ✅ | 63237 |
|  P7-06|    负载速度显示系数  | 0.0001~6.5000 |1.000 | ✅ | 63238 |
|  P7-07|    逆变器模块散热器温度  | 0.0℃~100.0℃ |- | ❎ | 63239 |
|  P7-09|    累计运行时间  | 0h~65535h |- | ✅ | 63241 |
|  P7-12|    负载速度显示小数点位数  | 0：0位小数位</br>1：1位小数位</br>2：2位小数位</br>3：3位小数位 |1 | ✅ | 63244 |
|  P7-13|    累计上电时间  | 0~65535h |- | ❎ | 63245 |
|  P7-14|    累计耗电量  | 0~65535度 |- | ❎ | 63246 |
|  P7-17|    数码管2停机监视选择  | 0000~FFFF |0000 | ✅ | 63249 |
|  P7-18|    数码管2运行监视选择  | 0000~FFFF |0000 | ✅ | 63250 |


探索这些文档以便了解更多内容：

{{< cards >}}
  {{< card link="https://item.taobao.com/item.htm?ft=t&id=771441899583" title="立即购买高性能矢量变频器" icon="shopping-cart" >}}

  {{< card link="/blog/faq/" title="变频器常见问题解答" icon="newspaper" >}}
{{< /cards >}}	
