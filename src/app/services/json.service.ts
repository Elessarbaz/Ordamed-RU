import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {
    constructor() { }

    public convertToObject(data: any){
        let whileIs = true;

        while(whileIs){
            if(data != null){
                if(!(data instanceof Object)){
                    data = JSON.parse(data);
                }
                else{
                    whileIs = false;
                    break;
                }
            }
            else{
                whileIs = false;
                break;
            }
        }

        return data;
    }
}