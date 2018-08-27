// 初始化返回的实例就是一个实例

class Single {
  constructor(name) {
    this.name = name;
  }
  static getInstance(name) {
    if (!this.instance) {
      this.instance = new Single(name);
    }
    return this.instance;
  }
}
const s1 = Single.getInstance("s1");
const s2 = Single.getInstance("s2");
console.log(s1 === s2);

class Single2 {
    constructor(name) {
        this.name = name;
        if(!Single2.instance){
            Single2.instance = this;
        }
        return Single2.instance;
    }
}
const s3 = new Single2("s1");
const s4 = new Single2("s2");
console.log(s3 === s4);
