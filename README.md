# js_math_lib My library for using math utils
Connect:
===========
import Math from "./js_math.js";  
var math = new Math();  

Classes:
===========
SimpleMath:
-----------
  ### Connect:
    import Math from "./js_math.js";
    var simpleMath = new Math().SimpleMath(isLogging); - bool isLogging - Нужно ли логирование
  ### Functions:
    lerp(start, end, amt) - Линейная интерполяция, start - начальное число, end - конечное, amt - шаг интерполяции
    toDegrees(angle) - Конвертация радиан в градусы, angle - угол в радианах
    toRadian(degrees) - Конвертация градусов в радианы, degrees - угол в градусах
    
===========
Intesections
-----------
  ### Functions:
    isUserSee(target) - возвращает true, если target видно на экране, в другом случае false.
