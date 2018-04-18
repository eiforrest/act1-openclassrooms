import { Injectable } from '@angular/core';

 @Injectable()
export class Post {
    private title: string;
    private content: string;
    private loveIts: number;
    private createdAt: Date;

    public getTitle(){
        return this.title;
    }
    public setTitle(title:string){
        this.title = title;
    }
    public getContent() {
        return this.content;
    }
    public setContent(content:string){
        this.content = content;
    }

    constructor() {
        this.loveIts = 0;
        this.createdAt = new Date();
    }
}