notesApp.service('UserInfo', function(){
    var User = {};
    this.setUser = function(data){
        User.id = data['id'];
        User.email = data['email'];
    }
    this.getUser = function(){
        return User;
    }
});