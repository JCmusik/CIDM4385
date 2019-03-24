import * as firebase from 'firebase';

const db = firebase.firestore();

/**
 * Sends order to the firebase DB
 * @param {*} order - object containing the details of the order
 */
const CompleteOrder = (order) => {

    const { email, item, date, vendor, total } = order;

    // console.log("DB: ", `${email} | ${item} | ${date} | ${vendor} | ${total} |`);

    db.collection("orders").add({
        date: date,
        email: email,
        item: item,
        price: total,
        vendor: vendor
    })
        .then((docRef) => {
            // console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
};


/**
 * 
 * @param {*} inquiry request order details
 */
const GetOrders = (inquiry) => {

    //stuff
    let ordersRef = db.collection("orders");

    ordersRef.orderBy('date', 'desc').get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                inquiry.callback(querySnapshot);
            }
        })
        .catch((error) => {
            console.error("DB: ", error);
        });

};

export { CompleteOrder, GetOrders };