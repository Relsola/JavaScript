{
    /* 
      1. 对JS的理解
          动态类型语言：代码在执行过程中，才知道这个变量属于的类型。
          弱类型：数据类型不固定，可以随时改变。
          解释型：一边执行，一边编译，不需要程序在运行之前需要整体先编译。
          基于对象：最终所有对象都指向Object。
          脚本语言：一般都是可以嵌在其它编程语言当中执行。
          单线程：依次执行，前面代码执行完后面才执行。

    ECMAscript	                DOM	                      BOM  
    JavaScript的语法部分  	    文档对象模型	           浏览器对象模型
    主要包含JavaScript语言语法  主要用来操作页面元素和样式 主要用来操作浏览器相关功能
    */
}

{
    // 2. JS数据类型有哪些？值是如何存储的？
    // 基本数据类型:
    Number
    String
    Boolean
    undefined
    null
    Symbol // ES6新增，表示独一无二的值
    BigInt // ES6新增，以n结尾，表示超长数据

    // 对象：
    Object
    Function
    Array
    Date
    RegExp
    Error

    /* 
      基本数据类型值是不可变的，多次赋值，只取最后一个。
      基本数据类型存储在栈中，占据空间小
      引用数据类型存储在堆中。引用数据类型占据空间大
      引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
    */
}

{
    // 3. Undefined 与 undeclared 的区别？
    undefined
    undeclared
}