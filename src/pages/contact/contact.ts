import { Component,OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit():void {
    this.test1();
    //this.test2();
  }

  test1() {

  }

  //const命令 § ⇧

  // const PI = 3.1415926;
  // PI = 4;
  //const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
  // const foo;


    // var a = [];
    // for(var i=0; i<10; i++) {
    //   a[i] = function() {
    //     console.log(i);
    //   }
    // }
    // a[6]();

    // var a = [];
    // for(let i=0; i<10; i++) {
    //   a[i] = function() {
    //     console.log(i);
    //   }
    // }
    // a[6]();
    // for(let i = 0; i<3; i++){
    //   let i = 'abc';
    //   console.log(i);
    // }
    //let不像var那样会发生“变量提升”现象。所以，变量一定要在声明后使用，否则报错。
    // console.log(foo);
    // var foo = 2;


    // let bar = 2;
    // console.log(bar);

    //只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
    // var tmp = 123;
    // if(true) {
    //   let tmp;
    //   tmp = 'abc';
    // }
    //let不允许在相同作用域内，重复声明同一个变量。
      // let a = 10;
      // let a = 1;

    






}
