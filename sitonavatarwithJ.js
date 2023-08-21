// Disable Avatar collision first in AVATAR app, click the sliders looking icon top right :)
function keyPressEvent(event) {
    if (event.text === "j" || event.text === "J") {
        MyAvatar.beginSit(Vec3.sum(MyAvatar.position, { x: 0, y: 0.20, z: 0 }), MyAvatar.orientation);
        var RANGE = 1;
        var avatars = AvatarList.getAvatarsInRange(MyAvatar.position, RANGE);
        var sessionUUID = MyAvatar.sessionUUID;
        print(JSON.stringify(avatars));
        if (avatars.length > 0) {
            for (var i=0; i < avatars.length; i++) { 
                var closestAvatarUUID = avatars[i];
                // Exclude the current avatar's sessionUUID from the check
                if (sessionUUID !== closestAvatarUUID) {
                    MyAvatar.setParentID(sessionUUID);
                    Camera.mode = "first person";
                    print("Sitting on: " + strippedString);
                } else {
                    print("Cannot sit on yourself.");
                }
            }
        } else {
            print("No avatars within the specified range.");
        }
    } else if (event.text === "SPACE") {
        MyAvatar.endSit(Vec3.sum(MyAvatar.position, { x: 0, y: 0.20, z: 0 }), MyAvatar.orientation);
        MyAvatar.setParentID(null);
        Camera.mode = "first person look at";
        print("Unsitting and clearing parent UUID.");
    }
}

Controller.keyPressEvent.connect(keyPressEvent);
