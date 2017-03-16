/**
 * Created by Paul on 2017-03-16.
 */
import { database } from './initializeFirebase';

const timeoutPromise = (millis) => new Promise((resolve) => {
    setTimeout(resolve, millis);
});

const button = document.getElementById("test-button");
button.addEventListener('click', onButtonClick, false);

const counter = document.getElementById("counter");

let count = 0;

setInterval(() => {
    count++;
    counter.innerText = count;
}, 1000);

async function onButtonClick() {
    console.log("Clicked the button");

    await timeoutPromise(2000);
    console.log("waited 2 seconds to test out await");

    console.log("Making database reference push request");
    const ref = await database.ref('posts').push();

    try {
        await ref.set({
            test: "data",
            something: true
        });
    } catch (e) {
        console.error(e.message);
        console.trace(e.stack);
    }
}
