#!/bin/bash
# project
p1 = '/root/code/mongodb-vue/server'
p2 = '/root/code/sse-vue-demo/server'
demoFun(){
  cd $[p1]
  echo "这是我的第一个 shell 函数!"
}
echo "-----函数开始执行-----"
demoFun
echo "-----函数执行完毕-----"
