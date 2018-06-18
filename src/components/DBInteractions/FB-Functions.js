import { googleProvider, rebase }  from './base';

    export function SaveObjToFB (endpoint, objToSave, ) { //object  {}, endPoint "endPoint"
    return rebase.push(endpoint, {
      data: objToSave, 
        then(err) {
          if(err) {
          } else if (!err) {
          
          }
        }
      })
      .then((result) => {
        return result;
      })
  }

  export function DeleteFromFB (endpoint, itemID) { //example "users" endpoint and itemID of specific user "userid"
    return rebase.remove(endpoint + "/" + itemID, function(err){
      if(err){
        // console.log("this is a scary error", err);
    } else if (!err) {
      // console.log("deleted item successfully");
    }
    })
  }

  export function GetFromFB (endpoint){
    return rebase.fetch(endpoint, {
      context: this,
      asArray: true, 
      then(data) {
        return data;
      }

    })
  }




  export function logout () {
    return rebase.initializedApp.auth().signOut()
  }





  export function loginWithGoogle () {
    return rebase.initializedApp.auth().signInWithPopup(googleProvider)
    .then((data) => {
      saveUser(data.user);
    });
  }



  
  export function saveUser (user) {
    // console.log("save user", user);
    return rebase.initializedApp.database().ref().child(`users/${user.uid}`)
      .update({
        email: user.email,
        name: user.displayName,
        portrait: user.photoURL,
        uid: user.uid,
        answers: {}
      })
      .then(() => {
        return user;
      })
  }

  export function saveAnswers (user, obj) {
    console.log(user, obj);
    return rebase.initializedApp.database().ref().child(`users/${user.uid}`)
      .update({obj})
      .then(() => {
        return user;
      })
  }