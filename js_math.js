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
            //#endregion
        };
        return result;
    }

    
}