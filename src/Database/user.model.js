let serial = 0;
let users = [];

class UserModel {
    createUser = ({ firstName, lastName, email, password } = {}) => {
        const emailExist = users.find((user) => user.email === email);
        if (emailExist) {
            throw { message: 'email already used', status: 500 };
        } else {
            const user = { id: (serial += 1), firstName, lastName, email, password };
            users.push(user);
            return user;
        }
    };

    indexUsers = () => {
        if (users.length < 1) {
            throw { status: 500, message: 'no data found' };
        } else {
            return users;
        }
    };

    indexUsersSorted = () => {
        if (users.length < 1) {
            throw { status: 500, message: 'no data found' };
        } else {
            const Sorted = users.sort(function (a, b) {
                if (a.firstName < b.firstName) {
                    return -1;
                }
                if (a.firstName > b.firstName) {
                    return 1;
                }
                return 0;
            });
            console.log(Sorted);
            return Sorted;
        }
    };

    deleteUser = ({ id } = {}) => {
        const deletedIndex = users.findIndex((user) => user.id == id);
        if (deletedIndex != -1) {
            return users.splice(deletedIndex, 1);
        } else {
            throw { status: 500, message: 'no data found' };
        }
    };

    updateUser = ({ id, firstName, lastName, email, password } = {}) => {
        const updatedIndex = users.findIndex((user) => user.id == id);
        if (updatedIndex != -1) {
            const oldValues = users[updatedIndex];
            const newValues = {
                id: oldValues.id,
                firstName: firstName ? firstName : oldValues.firstName,
                lastName: lastName ? lastName : oldValues.lastName,
                email: email ? email : oldValues.email,
                password: password ? password : oldValues.password,
            };
            users[updatedIndex] = newValues;
            return users[updatedIndex];
        } else {
            throw { status: 500, message: 'no data found' };
        }
    };

    getUserById = ({ id } = {}) => {

        const index = users.findIndex((user) => user.id == id);
        console.log(index);
        if (index != -1) {
            return users[index];
        } else {
            throw { status: 500, message: 'no data found' };
        }
    };
}

module.exports = UserModel;
