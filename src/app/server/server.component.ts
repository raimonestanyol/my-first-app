import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',

})
export class ServerComponent {
    serverId=10;
    serverStatus:string = 'offline';

    //just to demonstrate you can call a method from the string interpolation box, you can ofc use the property directly
    getServerStatus() {
        return this.serverStatus;
    }
}