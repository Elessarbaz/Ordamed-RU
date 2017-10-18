import { Injectable } from '@angular/core';

declare const UIkit: any;

@Injectable()
export class NotifyService {
    constructor() { }

    getNotify(text:any){
        UIkit.notify({
            message : text,
            status  : 'info',
            timeout : 3000,
            pos     : 'bottom-right'
        });
    }
}