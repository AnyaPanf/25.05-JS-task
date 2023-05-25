// 1. Вам дан обьект, с ключами herbivores, predators, All animals. 
//    Заполните значение ключа All animals всеми животными.

// let obj = {
//     herbivores: ["Заяц", "Корова", "Лошадь"],
//     predators: ["Волк", "Медведь", "Лунтик"], 
// }

// let newObj = Object.values(obj)
// obj["All animals"] = newObj

// console.log(newObj);


// 2. Вам дан обьект obj, напишите функцию которая удалит поля со 
//    значениями undefined и вывести в консоль обновленный обьект 

//let obj = {id: 1,title: "tuna sandwich",subtitle: undefined,price: "20$","new price": null,description: "tuna sandwich best sandwich in the world","more info": undefined,categories: null}

// const noUndefined = (obj) => {
//     return Object.values(obj).map((el) => {
//         if (el === undefined) {
//             return delete obj.el
//         } else {
//             return el
//         }
//     })
// }
// console.log(noUndefined({id: 1, title: "tuna sandwich", subtitle: undefined, price: "20$", "new price": null, description: "tuna sandwich best sandwich in the world", "more info": undefined, categories: null }));

// Что-то я совсем не понимаю простых действий с объектами (как в первой задаче здесь и в первых трех вообще) 
// и как потом соединить объект (после того, как мы превратили его в массив). Второе прям проблема.