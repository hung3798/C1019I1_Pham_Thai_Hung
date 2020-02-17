let myDog = {
    weight: 5,
    name : "dan",
    age : 3,
    bark : function () {
        alert("gaau gau gau")
    },
    eat: function (bone) {
            this.weight = this.weight + bone.weight
        }
    };
