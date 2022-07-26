export default class Math{
    constructor(){
        
    }

    SimpleMath(isLogging){
        var _logging = false;
        if(typeof(isLogging) == "boolean"){
            _logging = isLogging;
        }
        var result = new class SimpleMath{
            constructor(){
                this.logging = _logging;
                this.PI = 3.1415926535;
                this.e = 2.7182818284;
            }

            //#region Простые математические функции

            //Линейная интерполяция
            lerp(start, end, amt){
                var result = (1 - amt) * start + amt * end;

                if(this.logging){
                    console.log(`SimpleMath: lerp(${start},${end},${amt}), returns = ${result}`)
                }

                return result;
            }

            //Конвертация градусов в радианы
            toRadian(degrees){
                var result = (degrees * this.PI) / 180;

                if(this.logging){
                    console.log(`SimpleMath: toRadian(${degrees}), returns = ${result}`)
                }

                return result;
            }

            //Конвертация радиан в градусы
            toDegrees (angle){
                var result = angle * (180 / this.PI);

                if(this.logging){
                    console.log(`SimpleMath: toDegrees(${angle}), returns = ${result}`)
                }

                return result;
            }

            //Примерно равно
            checkApprox(num1, num2, epsilon){
                return Math.abs(num1 - num2) < epsilon;
            }
            //#endregion
        };
        return result;
    }

    Intersections(isLogging){
        var _logging = false;
        if(typeof(isLogging) == "boolean"){
            _logging = isLogging;
        }

        var result = new class Intersections{
            constructor(){
                this.logging = _logging;
            }

            isUserSee(target){
                var targetPosition = {
                    top: window.pageYOffset + target.getBoundingClientRect().top,
                    left: window.pageXOffset + target.getBoundingClientRect().left,
                    right: window.pageXOffset + target.getBoundingClientRect().right,
                    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
                },
                windowPosition = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    right: window.pageXOffset + document.documentElement.clientWidth,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };
              
                if (targetPosition.bottom > windowPosition.top && 
                  targetPosition.top < windowPosition.bottom && 
                  targetPosition.right > windowPosition.left && 
                  targetPosition.left < windowPosition.right){ 
                    return true;
                } 
                else{
                    return false;
                };
            }
        };
        return result;
    }
}