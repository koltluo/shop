---
title: 8.2 Communication Data Address Definition
weight: 2
prev: /docs/modbus-communication-protocol/agreement-content/
next: /docs/warranty-instructions/
sidebar:
  open: false
---


### 8.2.2 Non-functional Code Data

Non-functional code data can be divided into functional code data and non-functional code data. The latter includes operating commands, operating status, operating parameters, alarm information, etc.

#### 8.2.2.1 Functional Code Data

Functional code data are important setting parameters for the inverter, divided into P group and A group functional parameters. The parameter groups are as follows:

| Functional Code Data | Data Range | Attribute Value |
|:--------------------:|:----------:|:---------------:|
| P Group | P0, P1, P2, P3, P4, P5, P6, P7, P8, P9, PA, PB, PC, PD, PE, PF | Readable and Writable |
| A Group | A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, AA, AB, AC, AD, AE, AF | Readable and Writable |

The communication address definition for functional code data is as follows:
1. When reading functional code data, for P0~PF and A0~AF group functional code data, the high sixteen bits of the communication address directly represent the functional group number, and the low sixteen bits represent the sequence number of the functional code in the functional group. For example:
   - Functional parameter P0-16: Its communication address is F010H, where F0H represents the P0 group functional parameter, and 10H represents the hexadecimal data format of the sequence number 16.
   - Functional parameter AC-08: Its communication address is AC08, where ACH represents the AC group functional parameter, and 08H represents the hexadecimal data format of the sequence number 08.

2. When writing functional code data, for P0~PF group functional code data, the high sixteen bits of the communication address are distinguished between 00~0F or F0~FF based on whether writing to EEPROM is required, and the low sixteen bits directly represent the sequence number of the functional code in the functional group. For example:
   - Writing function for parameter P0-16:
     - When writing to EEPROM is required, its communication address is F010H.
     - When writing to EEPROM is not required, its communication address is 0010H.

3. When writing to EEPROM data, for A0~AF group functional code data, the high sixteen bits of the communication address are distinguished between 10~4F or A0~AF, and the low sixteen bits directly represent the sequence number of the functional code in the functional group. For example:
   - Writing function parameter AC-08:
     - When writing to EEPROM is required, its communication address is AC08H.
     - When writing to EEPROM is not required, its communication address is 4C08H.

#### 8.2.2.2 Non-functional Code Data

| Non-functional Code Data | Data Range | Attribute Value |
|:------------------------:|:----------:|:---------------:|
| Status Data | U group monitoring parameters, inverter fault description, inverter operating status | Readable |
| Control Parameters | Control commands, communication settings, digital output terminal control, analog output AO1 control, analog output AO2 control, high-speed pulse (FMP) output control, parameter initialization | Writable |
 

### 8.2.3 Status Data

Status data includes U group monitoring parameters, inverter fault description, and inverter operating status.

1. U Group Monitoring Parameters  
   The monitoring data description for the U group can be found in the relevant manual for U0 group functionality. The address definition is as follows:  
   U0~UF, where the high sixteen bits of the communication address range from 70 to 7F, and the low sixteen bits represent the sequence number of the monitoring parameter in the group. For example, U0-11 has a communication address of 700BH.

2. Inverter Fault Description  
   When communicating to read the inverter fault, the communication address is fixed at 8000H. By reading the data at this address, the upper computer can obtain the current fault code of the inverter. The fault code descriptions can be found in [Chapter Five, Functional Code P9-14](/docs/functional-parameter-table/malfunction-and-protection/).

3. Inverter Operating Status  
   When communicating to read the inverter operating status, the communication address is fixed at 3000H. By reading the data at this address, the upper computer can obtain the current information about the inverter operating status, defined as follows:

   | Communication Address for Inverter Operating Status | Readable Status Words |
   |:----------------------------------------------------:|:-----------------------|
   | 3000H | 1: Forward Rotation Running </br> 2: Reverse Rotation Running </br> 3: Stopped |

### 8.2.4 Control Parameters

Control parameters include control commands, digital output terminal control, analog output AO1 control, analog output AO2 control, and high-speed pulse (FMP) output control.

### 8.2.5 Control Commands

When P0-02 (command source) is selected as 2: communication control, the upper computer can control the inverter's start, stop, and other related commands through this communication address. The control command definitions are as follows:

| Communication Address for Control Commands | Command Function |
|:------------------------------------------:|:-----------------|
| 2000H | 1: Forward Rotation Running </br> 2: Reverse Rotation Running </br> 3: Forward Jogging </br> 4: Reverse Jogging </br> 5: Free Stop </br> 6: Deceleration Stop </br> 7: Fault Reset |

### 8.2.6 Communication Setting Value

Communication setting values are mainly used for selecting communication-given values for sources such as intermediate frequency, torque upper limit, VF separation voltage, PID setpoint, PID feedback, etc. When the communication address is 1000H, the upper computer sets the value of this communication address, and the data range is -10000 to 10000, corresponding to the relative set value of -100.00% to 100.00%.

### 8.2.7 Digital Output Terminal Control

When the digital output terminal function is selected as 20: communication control, the upper computer can control the digital output terminals of the inverter through this communication address. The definitions are as follows:

| Communication Address for Digital Output Terminal Control | Command Contents |
|:---------------------------------------------------------:|:-----------------|
| 2001H | BiT0: DO1 Output Control </br> BiT1: DO2 Output Control </br> BiT2: RELAY1 Output Control </br> BiT3: RELAY2 Output Control </br> BiT4: FMR Output Control </br> BiT5: VDO1 </br> BiT6: VDO2 </br> BiT7: VDO3 </br> BiT8: VDO4 </br> BiT9: VDO5 |

### 8.2.8 Analog Output AO1, AO2, and High-Speed Pulse Output FMP Control

When the functions for analog output AO1, AO2, and high-speed pulse output FMP are set to 12: communication setting, the upper computer can control the analog output and high-speed pulse output of the inverter through this communication address. The definitions are as follows:

| Output Terminal | Communication Address for Output Control | Command Content |
|:----------------:|:----------------------------------------:|:-----------------|
| AO1 | 2002H | 0～7FFF represents 0%～100% |
| AO2 | 2003H | 0～7FFF represents 0%～100% |
| FMP | 2004H | 0～7FFF represents 0%～100% |

### 8.2.9 Parameter Initialization

When it's necessary to perform parameter initialization operations on the inverter through the upper computer, this function is used. If PP-00 (user password) is not 0, password verification must be performed first. After successful verification, parameter initialization operation can be performed by the upper computer after 30 seconds. 

The communication address for user password verification is 1F00H. Write the correct user password directly to this address to complete the password verification. 

The address for parameter initialization is 1F01H, and its data content is defined as follows:

| Communication Address for Parameter Initialization | Command Function |
|:--------------------------------------------------:|:-----------------|
| 1F01H | 1: Restore factory parameters </br> 2: Clear record information </br> 4: Restore user backup parameters </br> 501: Backup user current parameters |






**Explore these documents to learn more.**

{{< cards >}}
  {{< card link="https://item.taobao.com/item.htm?ft=t&id=771441899583" title="Purchase high-performance vector frequency drives now." icon="shopping-cart" >}}
  {{< card link="/docs/table-of-contents/" title="Table of Contents for the Variable Frequency Drive User Manual" icon="newspaper"  >}}
  {{< card link="/blog/faq/" title="Frequently Asked Questions (FAQs) about Variable Frequency Drives" icon="newspaper" >}}
{{< /cards >}}	