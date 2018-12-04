export class Item {
    private static id:number = 0;
    objectID:number;
    contents:string;

    constructor(contents:string){
        Item.id++;
        this.objectID = Item.id;
        this.contents = contents;
    }
}