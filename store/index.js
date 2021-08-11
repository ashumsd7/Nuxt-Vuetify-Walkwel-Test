import Vuex from 'vuex'


const createStore = () => {
    return new Vuex.Store({
      state: {
        users: []
      },
      mutations: {
          addUsersMuataion(state, payload) {
              if (state.users == null || state.users == undefined) {
                  state.users = [];
              }
              state.users.push(payload);
          console.log(state.users);
        },
        loadUsersMutations(state, payload) {
          state.users = payload;
        }
      },
      actions: {
        addUsersAction(context, payload) {
          console.log(">>in user action", payload);
          context.commit("addUsersMuataion", payload);
          context.dispatch("storeInLocalStorage", payload);
        },
        storeInLocalStorage(context, user) {
          let fetchedUsers;
          var getUsers = localStorage.getItem("users");
          console.log("these are the users>", getUsers);
          if (getUsers == null || getUsers == undefined) {
            fetchedUsers = [];
          } else {
            fetchedUsers = JSON.parse(getUsers);
          }
          fetchedUsers.push(user);
          console.log("final Data after push", fetchedUsers);
          localStorage.setItem("users", JSON.stringify(fetchedUsers));
        },
        replaceLocalStorage(context, payload) {
          localStorage.setItem("users", JSON.stringify(payload));
        },
        loadUsersAction(context) {
          let fetchedUsers;
          var getUsers = localStorage.getItem("users");
          if (getUsers !== null || getUsers !== undefined) {
            fetchedUsers = JSON.parse(getUsers);
          }
          console.log("loaded users", fetchedUsers);
          context.commit("loadUsersMutations", fetchedUsers);
        },
        deleteUserAction(context, id) {
          let users = context.state.users;
          console.log("before>>", users);
          for (let index in users) {
            //  console.log(state.stocks[index].id);
            if (users[index].id == id) {
              users.splice(index, 1);
            }
          }
          context.dispatch("replaceLocalStorage", users);
          console.log("after>>", users);
        },
        editUserAction(context, payload) {
          let users = context.state.users;
          for (let index in users) {
            if (users[index].id == payload.id) {
              users.splice(index, 1, payload);
            }
            }
            context.dispatch("replaceLocalStorage", users);
        }
      },
      getters: {
        getUsers(state) {
          return state.users;
        }
      }
    });
}

export default createStore;