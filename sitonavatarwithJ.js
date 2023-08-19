//Disable Avatar collision first in AVATAR app, click the sliders looking icon top right :)
function keyPressEvent(event) {
    if (event.text === "j" || event.text === "J") {
        MyAvatar.beginSit(Vec3.sum(MyAvatar.position, { x: 0, y: 0.25, z: 0 }), MyAvatar.orientation);
        var RANGE = 1;
        var avatars = AvatarList.getAvatarsInRange(MyAvatar.position, RANGE);

        if (avatars.length > 0) {
            var closestAvatarUUID = avatars[0];
            var inputString = closestAvatarUUID
            var strippedString = inputString.replace(/[{}]/g, '');
            MyAvatar.setParentID(strippedString);
            Camera.mode = "first person";
            print("Sitting on :" + strippedString);
        } else {
            print("No avatars within the specified range.");
        }
    } else if (event.text === "SPACE") {
        MyAvatar.endSit(Vec3.sum(MyAvatar.position, { x: 0, y: 0.25, z: 0 }), MyAvatar.orientation);
        MyAvatar.setParentID(null);
        var inputString2 = MyAvatar.sessionUUID;
        var strippedString2 = inputString2.replace(/[{}]/g, '');
        Camera.mode = "first person look at";
        print("Unsitting and clearing parent UUID.");
    }
}

Controller.keyPressEvent.connect(keyPressEvent);
