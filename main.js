// //1. Реалізувати розбиття стрічки на слова у масив. Допустим є написання функцій.
// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words);

// //2. Написати функцію, яка поверне знайде чи входить шукана стрічка у задану

// if(str.indexOf('fox')== -1){
//     console.log('fox is not in the str');  //Fox = -1, because isn't in the str
// }
// else{
//     console.log('Found');
// }

// //3. Написати функцію, яка порахує факторіал натурального числа
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
// console.log(factorial(5));

// //4. Реалізувати алгоритм бінарного пошуку
// function binarySearch(value, list) {
//     let first = 0;    //left endpoint
//     let last = list.length - 1;   //right endpoint
//     let position = -1;
//     let found = false;
//     let middle;
 
//     while (found === false && first <= last) {
//         middle = Math.floor((first + last)/2);
//         if (list[middle] == value) {
//             found = true;
//             position = middle;
//         } else if (list[middle] > value) {  //if in lower half
//             last = middle - 1;
//         } else {  //in in upper half
//             first = middle + 1;
//         }
//     }
//     return position;
// }
// let arr = [0,1,3,4,5,6,8,9,10,11,12,13,14,15,16,17];
// const target = 13;
// let pos = binarySearch(target, arr);
// console.log(pos);

// //5. Написати функцію, яка знайде максимальну дату у масиві
// const dates = ["2016/10/13 00:00:00", "2017/10/13 00:30:00", "2015/10/13 01:00:00", "2021/10/13 01:30:00", "2010/10/13 02:00:00", "2013/10/13 02:30:00", "2019/10/13 03:00:00", "2020/10/13 03:30:00", "2001/10/13 04:00:00", "2018/10/13 04:30:00"];


// var max = dates[0]; // initially set max as first element


// dates.forEach(function(v) {  // iterate over array values and update max
//   max = new Date(v) > new Date(max)? v: max;
// });

// console.log('max :', max);

// //6. Написати реалізацію сортування бульбашкою масиву
// function bubbleSort(arr) {
//     for (var i = 0, endI = arr.length - 1; i < endI; i++) {
//         for (var j = 0, endJ = endI - i; j < endJ; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var swap = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = swap;
//             }
//         }
//     }
//     return arr;
// }
// const arr_for_bubble = [18,2,35,24,1,0,24,6,5,4,90];
// console.log(bubbleSort(arr_for_bubble));


/*7. Реалізувати з допомогою прототипів або класів такі інформаційні об’єкти:
a. Замовник
b. Проект
c. Виконавець
d. Проекти на виконанні
Реалізувати такі можливості системи:
a. Додавання нового замовника в колекцію
b. Редагування замовника в колекції
c. Видалення замовника з колекції
d. Пошук одного замовника в колекції
e. Додавання проекту в колекцію
f. Редагування проекту в колекції
g. Видалення проекту з колекції
h. Додавання виконавця в колекцію
i. Редагування виконавця в колекції
j. Видалення виконавця з колекції
k. Пошук усіх проектів замовника
l. Пошук усіх проектів виконавця
 Усі колекції реалізувати у вигляді асоціативних масивів Array */
class Customer {
    constructor(person_name) {
      this.person = person_name;
    }
    get cnam() {
      return this.person;
    }
    set cnam(x) {
      this.person = x;
    }
  }
class Executor {
    constructor(person_name) {
      this.person = person_name;
    }
    get exnam() {
      return this.person;
    }
    set exnam(x) {
      this.person = x;
    }
  }
  class Project extends Customer {
    constructor(customer_name, project_name) {
        super(customer_name)
        this.project = project_name;
    }
    get prnam() {
      return this.project;
    }
    set prnam(x) {
      this.project = x;
    }
  }
  class Project_in_progress extends Executor {
    constructor(executor_name, project_name) {
        super(executor_name)
        this.project = project_name;
    }
    get pinpnam() {
      return this.project;
    }
    set pinpnam(x) {
      this.project = x;
    }
  }
  //create a new Customer and add it to the collection
  function push_to_cust(arr, cust){
      let cust_obj = new Customer(cust);
      arr.push(cust_obj);
    }
  var cust_arr = [];
  var cust_name = 'P.I.Topylko';
  push_to_cust(cust_arr, cust_name);
  console.log(cust_arr);

  
  var project_arr = [];
  for (let i = 0; i<cust_arr.length; i++){
      for (let j = 1; j <=6; j++){
            let Lab = new Project(cust_arr[i].cnam, 'Lab'.concat(j.toString()));
            //console.log(j.toString());
            project_arr.push(Lab);  
        }
    }
    let proj_in_prog_arr=[];
    let exec_li = ['Zheplinska','Liubchynska','Ivanyk','Prots','Hentosh','Revenko','Borovyk','Slavych','Bahlai'];
    let exec_arr=[];
    for (let i=0; i<exec_li.length; i++){
        exec_arr.push(new Executor(exec_li[i]));
    }
    console.log(exec_arr);
    console.log(project_arr);
    //console.log(project_arr[0].prnam);
    for (let i=0; i<exec_arr.length; i++){
        for (let j = 0; j <6; j++){
            
            let lab_in_prog = new Project_in_progress(exec_arr[i].exnam, project_arr[j].prnam);
            proj_in_prog_arr.push(lab_in_prog);
        }
            
    }
    console.log(proj_in_prog_arr);
    console.log(proj_in_prog_arr.filter(exec=> exec.exnam=='Zheplinska'));


  
