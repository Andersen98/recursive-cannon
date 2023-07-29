export function getJoystickInvertedAngle({ x_, y_ }: { x_: number; y_: number; }): number {
    //where the virtical is inverted
    var y = -y_;
    var x = x_;
    var result = 0;
    if(y<0){
        result = (180/Math.PI) * (Math.PI+ Math.atan2(-y,-x));
    } else{
        result = (180/Math.PI) * Math.atan2(y,x);
    }
    return result;
}
