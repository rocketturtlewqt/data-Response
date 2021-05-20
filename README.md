---
title: "响应式原理"
date: 2021-05-20T12:09:55+08:00
draft: true
---

## 响应式原理

![官方响应式原理图](https://rocketturtlewqt.github.io/20210520121038aft.png)

## 核心函数说明

![手写源码，函数模块调用流程图](https://rocketturtlewqt.github.io/20210520121206aft.png)

#### observe

- 在对象上添加__ob__属性，这个属性指向一个Observer侦测对象

#### Observer

- 侦测类，作用是将对象的每一层转为响应式
- dep类的实例在此类中实例化，用来收集依赖Watcher的实例

#### defineReactive

- 两个核心getter和setter
- 在getter中收集依赖（主要看Dep.target是否不为空，不为空就说明目前有依赖，多个依赖竞争Dep.target）
- 在setter中触发依赖

#### parsePath

- 将字符串路径，例如'a.b.c.d'，转为能够在原对象上读取此路径对应的值的函数

#### array

- 改写Array.prototype上的七个函数，让它们变为响应式

![改写流程图](https://rocketturtlewqt.github.io/20210520122231aft.png)

- 在arrayMethods定义七个一模一样的api，并重写覆盖Array.prototype上的这七个api。再将数组实例的原型设置为arrayMethods

## github源码地址

[手写数据响应式原理](https://github.com/rocketturtlewqt/data-Response.git)

