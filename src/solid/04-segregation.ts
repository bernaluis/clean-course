interface Bird{
    eat():void;
    walk():void;   
}
interface SwimmingBird{
    swim():void;
}
interface FlyingBird{
    fly():void;
}
interface RunningBird{
    run():void;
}
class Tucan implements Bird,FlyingBird{
    eat(): void {
        throw new Error("Method not implemented.");
    }
    walk(): void {
        throw new Error("Method not implemented.");
    }
    fly():void{
        throw new Error("Method not implemented.");
    }

}