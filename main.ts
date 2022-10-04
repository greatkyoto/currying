const curriedAdd = (x: number) => (y:number) => x + y;
const add = (x: number, y: number) => x + y;

//１を足す処理が随所に転がっていると、共通化がされておらず改修が大変
console.log(add(1,2));
console.log(add(1,100));
console.log(add(1,224));


//カリー化をすると、共通化が行われ改修箇所が一箇所に纏まる
const add1 = curriedAdd(1);
console.log(add1(3));
console.log(add1(38));
console.log(add1(33));


