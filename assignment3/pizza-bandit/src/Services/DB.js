import * as firebase from 'firebase';

const db = firebase.firestore();

/**
 * Sends order to the firebase DB
 * @param {*} order - object containing the details of the order
 */
const CompleteOrder = (order) => {

    const { email, item, date, vendor, total } = order;

    console.log("DB: ", `${email} | ${item} | ${date} | ${vendor} | ${total} |`);

    db.collection("orders").add({
        date: date,
        email: email,
        item: item,
        price: total,
        vendor: vendor
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

};

const GetOrder = (request) => {
    let ordersRef = db.collection("orders");

    ordersRef.where("email", "==", `${request.email}`).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                request.callback(querySnapshot);
            }
        })
        .catch((error) => {
            console.error("DB: ", error);
        });
}

/**
 * 
 * @param {*} inquiry request order details
 */
const GetOrders = (inquiry) => {

    //stuff
    let ordersRef = db.collection("orders");

    ordersRef.where("email", "==", `${inquiry.email}`).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                inquiry.callback(querySnapshot);
            }
        })
        .catch((error) => {
            console.error("DB: ", error);
        });

};

export { CompleteOrder, GetOrder, GetOrders };