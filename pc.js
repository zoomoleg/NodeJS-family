/*jshint esversion: 6 */
import express from 'express';
import fetch from 'isomorphic-fetch';

const app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// получение структуры данных через промисы и ожидания
const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
let pc = {};
fetch(pcUrl)
  .then(async (res) => {
    pc = await res.json();
    console.log(pc);
})
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });


// ответ будет если обратились к корню и глубже
app.use('/', (req, res) => {
//путь запроса
  console.log(req.path);
//разделяем запрос по косым /
  var arr_path = req.path.split('/',10);
//смотрим как разделился путь на массив
  console.log(arr_path);
//удаляем вместе с ключом пустое в начале
  arr_path.splice(0, 1);
//глубина запроса
  console.log(arr_path.length);
// первоначальное значчение иначе будет UNDEFINED
  var otvet = ' ';
//проверяем что пришло в пути запроса если к корню, то выводим всю структуру
    if (arr_path == '') {return res.json (pc)}
      else {
//иначе начинаем прибалять к основному объекту значения пути
        if (arr_path.length <=1 ) {
          console.log(eval('pc.'+arr_path));
          console.log(arr_path);
          return res.json (eval('pc.'+arr_path));
          } else {
//цикл для добавления пути к объекта
              for ( var i = 0 ; i < arr_path.length ; i++ ) {
                otvet = otvet + '.' + arr_path[i] ;

                console.log(arr_path[i]);
                console.log(otvet);

              };
            var otvet1 = 'pc' + otvet.replace(" ", '');
            console.log(otvet1);
// EVAL превращает строку в объект
  return res.json (eval(otvet1));

};
};
})
