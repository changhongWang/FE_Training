let num = 1;
let obj = {
    num: 2,
    add: function() {
        this.num = 3;
        (function() {
            console.log(this.num);
            this.num = 4;
        })();
        console.log(this.num);
    },
    sub: function() {
        console.log(this.num)
    }
}
obj.add();
console.log(obj.num);
console.log(num);
const sub = obj.sub;
sub();