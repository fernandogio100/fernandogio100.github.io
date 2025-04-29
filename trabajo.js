let nameList = [];
let numberList = [];

function getInformation() {
    let rawList;

    rawList = document.getElementById("mainInput").value;
    const listOfNames = rawList.match(/\b(\w+|\d+)(?:\s+|$)/g);

    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    // for (let na of listOfNames) {
    //     for (let n of numbers) {
    //         if (na.includes(n)) {
    //             numberList.push(na);
    //             break;
    //         }
    //         else {
    //             nameList.push(na);
    //             break;
    //         }
    //     }
    // }

    for (let na of listOfNames) {
        let hasNumber = false;

        for (let n of numbers) {
            if (na.includes(n)) {
                hasNumber = true;
                break;
            } 
        }

        if (hasNumber) {
            numberList.push(na);
        } else {
            nameList.push(na);
        }
    }

    console.log(nameList)
    console.log(numberList)

    // for (let na of nameList) {
    for (let i = 0; i < nameList.length; i++) {
        document.getElementById("copyName").innerHTML += nameList[i] + " " + nameList[i + 1] + "\n";
        i++;
    }

    for (let n of numberList) {
        document.getElementById("copyNumber").innerHTML += n;
    }

    document.getElementById("generateBlocks").disabled = true;
}

function getName() {
    let see = document.getElementById("copyName");

    see.select();
    navigator.clipboard.writeText(see.value);
}

function getNumber() {
    let see = document.getElementById("copyNumber");

    see.select();
    navigator.clipboard.writeText(see.value);
}